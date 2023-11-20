import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../config/dbConnect";
import Project from "../../../../models/project";

export default async function getAllProjects(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		dbConnect();
		try {
			const projects = await Project.find({});
			if (!projects) {
				res.status(400).json({ message: "No products found" });
			}
			res.status(200).json({ projects });
		} catch (error) {
			res.status(500).json({ message: "Server error" });
		}
	}
}
 