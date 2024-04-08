import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

function isAuthorized(req: NextApiRequest): boolean {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split("")[1];

    if (!token) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  isAuthorized(req);
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
