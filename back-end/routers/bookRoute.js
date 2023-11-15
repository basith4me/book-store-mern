import express from "express";
import { Books } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
    try {
      if (
        !request.body.tittle ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: "send all required fields: title, author, publishYear",
        });
      }
      const newBook = {
        tittle: request.body.tittle,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };
      const book = await Books.create(newBook);
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  //route for get all books from database
  router.get("/", async (request, response) => {
    try {
      const books = await Books.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  //route for get all books from database by id
  router.get("/:id", async (request, response) => {
    try {
      //const books = await Books.find({});
  
      const { id } = request.params;
  
      const book = await Books.findById(id);
  
      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route for update a book
  
  router.put("/:id", async (request, response) => {
    try {
      if (
        !request.body.tittle ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: "send all required fields: title, author, publishYear",
        });
      }
  
      const { id } = request.params;
  
      const result = await Books.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({
          message: "Book not found"
        });
      }
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route for delete a book
  router.delete("/:id", async (request, response) => {
    try {
      const {id} = request.params;
      const result = await Books.findByIdAndDelete(id);
  
      if(!result){
        return response.status(404).json({message: "book not found"});
      }
  
      return response.status(200).send({message: "Book deleted succesfully"});
    } catch (error) {
      console.error(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router;