import dbConnect from "../../../../config/dbConnect";
import Project, { IProject } from "../../../../models/project";
import User from "../../../../models/user";

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		dbConnect();

		const {
			mlsNumber,
			address,
			price,
			neighbourhood,
			propertyType,
			poster,
			sellingNFT,
			acceptCrypto,
			acceptedCurrencies,
			size,
			bedrooms,
			bathrooms,
			yearBuilt,
			floors,
			description,
			agentRemarks,
			videoLink,
		} = req.body;

		// Find the user to associate with this project
		const user = await User.findOne({ _id: "6453dfb9c8156bf9ee4a6f75" });

		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		// Create the project with the user reference
		const project = await Project.create<IProject>({
			mlsNumber,
			address,
			price,
			neighbourhood,
			propertyType,
			sellingNFT,
			acceptCrypto,
			owner: user._id,
			acceptedCurrencies,
			size,
			poster,
			bedrooms,
			bathrooms,
			yearBuilt,
			floors,
			description,
			agentRemarks,
			videoLink,
		});

		user.projects.push(project._id);
		await user.save();

		res.status(201).json({ project });
	}
}
