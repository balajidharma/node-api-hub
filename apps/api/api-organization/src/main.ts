import express from 'express';
import cors from 'cors';
import { toNodeHandler } from "better-auth/node";
import { auth } from '@node/better-auth';

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.all("/api/auth/organization/*", toNodeHandler(auth));

app.use(express.json());

const port = process.env.API_ORGANIZATION_PORT || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
