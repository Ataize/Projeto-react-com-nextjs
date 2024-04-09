import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      res.status(200).send("Ok");
      break;
    case "POST":
      res.status(201).send("Criado");
    case "DELETE":
      res.status(204).end();
  }
}
