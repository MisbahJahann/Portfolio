const express= require("express");
const { getDb, connectToDb} = require("./db");
const app = express();
connectToDb((err) => 
{
 if(!err)
 {
     app.listen(3000, () =>
{
      console.log(`Server is running on http://localhost:3000`);
})
    db = getDb();
 }
})
app.get("/books", (req, res) =>
{
    let books = [];
 db.collection("books")
 .find()
 .sort({title:  1})
 .forEach((book) => books.push(book))   
 .then(() =>
{
    console.log(books);
    res.status (200).json(books);
})
.catch((err) =>
{
   res.status(500).json({err: "Could not fetch the document"});
})
})