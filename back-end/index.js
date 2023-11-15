import express, { request, response } from "express";
//Y9wtPaieMprozq0c
import { PORT, mongodbUrl } from "./config.js";
import mongoose from "mongoose";
import { Books } from "./models/bookModel.js";
import bookRoute from "./routers/bookRoute.js";
import cors from "cors";

const app = express(); // create a express app
app.use(express.json()); //middleware for parsing request body
app.use(cors());
//add cors policy
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Conten-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to MERN stack");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`app is listening to port: ${PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  });
