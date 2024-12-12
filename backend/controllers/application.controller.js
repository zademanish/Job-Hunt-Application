import { Application } from "../models/application.model.js";
import { Job } from "../models/jobs.model.js";

export const applyJobs = async (req, res) => {
  try {
    const userId = req.id;
    // const {id:jobId} = req.params;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "job Id is required",
        success: false,
      });
    }
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied",
        success: false,
      });
    }
    // check if the job is exist or not
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.application.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "applied successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res.status(404).json({
        message: "No application found",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// admin dekhega kitne user ne apply kiya hai

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({
        message: "No job found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!applicationId) {
      return res.status(400).json({
        message: "status is required",
        success: false,
      });
    }
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "application not found",
        success: false,
      });
    }
    // update status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "status updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
