const express = require("express");
const { getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById
 } = require("../controllers/book-controller");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
//const{ route }=require("./users");
const { UserModel,BookModel } = require("../models");

const router = express.Router();
/**
 * Route: /books
 * Method: GET
 * Description: Get all the books
 * Access: Public
 * Parmanters: none
 */

// http://localhost:8081/books/books
/** router.get("/", (req,res)=>{
    res.status(200).json({
      success:true,
      data:books,
    });
  });**/
router.get("/",getAllBooks);
  /**
   * Route: /books/issued
   * Method: GET
   * Description: Get all issued books
   * Access: Public
   * Parmanters: none
   */
/**
   * Route: /books/:id
   * Method: GET
   * Description: Get book by their id
   * Access: Public
   * Parmanters: id
   */
  router.get("/:id",getSingleBookById);
  router.get("/issued/by-user",getAllIssuedBooks);
  /**
   * Route: /books
   * Method: POST
   * Description: Create a new book
   * Access: Public
   * Parmanters: none
   */
router.post("/", addNewBook);

/**
   * Route: /books/:id
   * Method: PUT
   * Description: Updating a book 
   * Access: Public
   * Parmanters: id
   */

router.put("/:id",updateBookById);
//default export
module.exports= router;