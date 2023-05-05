import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const fetchedData = await fetch(
      `https://6452077fbce0b0a0f73aad3a.mockapi.io/user-projects`
    ).then((data) => data.json());

    res.status(200).json(fetchedData);
  }
}
