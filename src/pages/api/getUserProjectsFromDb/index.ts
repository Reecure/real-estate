import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../config/dbConnect";
import User from "../../../../models/user";
import Project from "../../../../models/project";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    dbConnect();
    try {
      await Project.init();
      const user = await User.findOne({
        _id: "6453dfb9c8156bf9ee4a6f75",
      }).populate("projects");
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      res.json({ projects: user.projects });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  }
}
