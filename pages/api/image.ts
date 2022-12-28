import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const OPENAI_AUTH = process.env.OPENAI_AUTH;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // fix format and user inputs
  const { prompt, n, size, responseFormat, user } = req.query;

  if (!prompt) return res.status(400).send("Missing image required prompt");

  await axios
    .post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt,
        size: size ?? "1024x1024",
        n: n ?? 1,
        // response_format: responseFormat ?? "url",
        // user: user ?? null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_AUTH}`,
        },
      }
    )
    .then((response) => {
      res.status(200).send(response.data.data[0].url);
    })
    .catch((error) => {
      throw new Error(error);
    });
}
