// const express = require("express");
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./modules/student/student.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  // const a = 10;
  // console.log(a);

  res.send("Hello World!");
});

// console.log(process.cwd());

export default app;
