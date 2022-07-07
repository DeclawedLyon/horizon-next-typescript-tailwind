import { NextApiRequest, NextApiResponse } from "next";

export default function getUserSchedule(req: NextApiRequest, res: NextApiResponse) {
  console.log('words',req.query)
  res.send({
    message: `testing: ${req.query.id}`
  })
}