## Book Resource API
---

This is a REST API for books with the following functionalities : 
- Fetching all books (GET)
- Fetching one book based on the id (GET)
- Creating a new book (POST) with the following     fields :
  - Name 
  - ImageURL
  - Author
  - Pages
  - Price
- Updating the book based on id (PATCH)
- Deleting a book based on id (DELETE)


MongoDB Atlas has been used as a database.

---

### The routes for the given HTTP methods are defined as:


/books : for getting the details of the books (GET) and adding anew book (POST)
<br>
/books/id : for getting the details of a specific book (GET) , updating the book (PATCH) and deleting the book (DELETE)

---
### To test the API : 

npm init -y

Download these npm packages : body-parser, express, nodemon, morgan, mongoose using <br>
npm install 

Run the server using 'nodemon server.js'

Test the API using Postman tool

---

Postman Collection link with all the routes: 
https://www.getpostman.com/collections/164954ff9579409c64da





    

