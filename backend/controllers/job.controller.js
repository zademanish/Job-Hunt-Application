import { Job } from "../models/jobs.model.js";

export const postJobs = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      location,
      experienceLevel,
      jobType,
      position,
      companyId,
    }= req.body;

    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !location ||
      !experienceLevel ||
      !jobType ||
      !position ||
      !companyId ||
      !userId
    ) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirement: requirement.split(","),
      salary: Number(salary),
      location,
      experienceLevel,
      jobType,
      position,
      company: companyId,
      created_by: userId,
    });
    return res.status(201).json({
      message: "new job post created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({
        path:"company"
    }).sort({ createdAt:-1 });
    if (!jobs) {
      return res.status(404).json({
        message: "jobs not found",
        success: false,
      });
    }
    return res.status(201).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJobsById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: true,
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

// aadmin kitne job create kra hai abhi tak

export const getAdminJobs = async (req,res) => {
  try {
    const adminId = req.id;
    const job = await Job.find({created_by: adminId });
    if (!job) {
      return res.status(404).json({
        message: "job not found",
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
