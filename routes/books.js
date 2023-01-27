const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
//const{ route }=require("./users");


const router = express.Router();
/**
 * Route: /books
 * Method: GET
 * Description: Get all the books
 * Access: Public
 * Parmanters: none
 */

// http://localhost:8081/books/books
router.get("/", (req,res)=>{
    res.status(200).json({
      success:true,
      data:books,
    });
  });

  /**
   * Route: /books/issued
   * Method: GET
   * Description: Get all issued books
   * Access: Public
   * Parmanters: none
   */

  router.get("/issued/by-user",(req,res) => {
    //console.log("issued Books");
    const usersWithIssuedBook=users.filter((each)=>{
        if(each.issuedBook) return each;
    });
      const issuedBooks = [];

      usersWithIssuedBook.forEach((each) => {
        const book=books.find((book) => book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
      });
      if(issuedBooks.length === 0)
      return res.status(404).json({success:false,manager:"No books has been issued"});

      return res.status(200).json({success:true,data:issuedBooks});
  });
  
  
  /**
   * Route: /books/:id
   * Method: GET
   * Description: Get book by their id
   * Access: Public
   * Parmanters: id
   */
  router.get("/:id", (req,res) =>{
    const { id }=req.params;
    const book =books.find((each) => each.id===id);
    if(!book){
      res.status(404).json({
        success:false,
        message:"Book Not found",
      });
    }else{
      res.status(200).json({
        success:true,
        data:book,
      });
    }
  });

  /**
   * Route: /books
   * Method: POST
   * Description: Create a new book
   * Access: Public
   * Parmanters: none
   */
router.post("/",(req,res)=>{
    const { data }=req.body;

    if(!data){
        return res.status(400).json({
            success:false,
            message:"no data has provided",
        });
    }
const book=books.find((each)=>each.id ===data.id);
if(book){
    return res.status(404).json({successs:false,message:"Book already exist with same ID"});
}

    const allBooks =[...books,data];

    return res.status(200).json({
        success:true,
        data : allBooks,
    });
});

/**
   * Route: /books/:id
   * Method: PUT
   * Description: Updating a book 
   * Access: Public
   * Parmanters: id
   */

router.put("/:id", (req,res)=>{
    const  { id }=req.params;
    const { data }=req.body;
    const book =books.find((each) => each.id === id);
  
    if(!book)
     return res.status(404).json({success:false,message:"Book Not Found"});
    
     const UpdatedBook = books.map((each)=>{
     if(each.id === id){
      return{
        ...each,
        ...data,
      };
    }
    return each;
  });
   return res.status(200).json({
    success:true,
    data:UpdatedBook,
   });
  });




//default export
module.exports= router;