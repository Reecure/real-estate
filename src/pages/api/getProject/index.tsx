import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../config/dbConnect";
import Project from "../../../../models/project";

export default async function getProject(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		dbConnect();
		const { id } = req.query;
		try {
			const project = await Project.findOne({
				_id: new ObjectId(id as string),
			});
			if (!project) {
				res.status(400).json({ message: "No project found" });
			}
			res.status(200).json({ project });
		} catch (error) {
			res.status(500).json({ message: "Server error" });
		}
	}
}
 