import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    await res.revalidate("/blog/dynamic")
    return res.status(200).send({ message: "Revalidation successful" })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
