import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../config/dbConnect";
import Project from "../../../../models/project";
import User from "../../../../models/user";

export default async function getProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    dbConnect();
    const { id } = req.query;
    try {
      const user = await User.findOne({
        _id: new ObjectId(id as string),
      });
      if (!user) {
        res.status(400).json({ message: "No user found" });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
}
