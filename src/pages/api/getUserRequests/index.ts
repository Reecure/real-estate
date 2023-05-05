import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const fetchedRequests = await fetch(
      `https://6452077fbce0b0a0f73aad3a.mockapi.io/user-requests`
    );
    const data = await fetchedRequests.json();
    res.status(200).json(data);
  }
}
