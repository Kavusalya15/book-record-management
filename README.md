# book-record-management

This is an application called book record management/API 

## Endpoint

## /users
POST: Create a new user
GET: Get all list of users

## /users/{id}
GET:get a user by their ID
PUT: Update a user by ID
DELETE:Delete a user by their ID(Check if the user still has an issued book && is there any files to be collected from the user)

## /users/subscriptions-details/{id}
GET:get user subscription details
1.Date of subscription details
2.Valid till??
3.Fine if any??

## /books
GET: Get all books
Post :Add a new book

## / books/issued
GET :Get all issued books here

## /books/issued/withFine
GET:Get all issued books with fine