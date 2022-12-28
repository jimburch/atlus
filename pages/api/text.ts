import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const OPENAI_AUTH = process.env.OPENAI_AUTH;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { model, prompt, maxTokens, temperature, topP, n, stop } = req.query;

  if (!prompt) return res.status(400).send("Missing text required prompt");

  await axios
    .post(
      "https://api.openai.com/v1/completions",
      {
        prompt,
        model: model ?? "text-davinci-003",
        max_tokens: maxTokens ?? 16,
        temperature: temperature ?? 1,
        top_p: topP ?? 1,
        n: n ?? 1,
        stop: stop ?? null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_AUTH}`,
        },
      }
    )
    .then((response) => {
      return res.status(200).send(response.data.choices[0].text);
    })
    .catch((error) => {
      throw new Error(error);
    });
}
