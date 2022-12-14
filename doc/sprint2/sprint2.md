# Sprint 2 Planning Meeting
## Sprint Goals
In this sprint, we want to add the ecommerce side of the app, and allow users to customize their profile. This requires the creation of the Shop, Product Details, Cart, Profile and Add Product pages.
Complete the following user stories:
- CHAR-5: As a consumer I want to be able to browse available products so that I can choose products that I may be interested in buying
- CHAR-12: As an employee I want to add/remove apparels by title and apparels on characters so that consumers can buy products
- CHAR-14: As a consumer I want to be able to view and manage items that I have added to my shopping cart so that I can review my order before processing my payment
- CHAR-18: As a logged-in character/consumer/employee I want to be able to view and modify my personal information so that my personal information is correct and up to date
- CHAR-38: As a consumer I want to be able to view item details by clicking on the item in the shopping page so that I can get a better idea of the item before adding it to my shopping cart.
- CHAR-57: As an employee, I want to see the user details of the story submissions so that I can contact him/her when the story reaches the interview stage

## Tasks Breakdown
Story CHAR-5 (Maria Gotcheva): As a consumer I want to be able to browse available products so that I can choose products that I may be interested in buying
- Shop page that shows a grid view of all products availible to buy
- Allow consumers to view the product details by clicking on a product
- Create the product model schema
- Add endpoints to read products in backend
- Add endpoints to create/update/delete products in backend

Story CHAR-12 (Eric Zhou): As an employee I want to add/remove apparels by title and apparels on characters so that consumers can buy products
- Show Product Add page
- In the product details page, employees can delete the product

Story CHAR-14 (Jacob Matias): As a consumer I want to be able to view and manage items that I have added to my shopping cart so that I can review my order before processing my payment
- Create basic UI for shopping cart page
- Ensure that all items added to the user's shopping cart are displayed on shopping cart page
- Add functionality to increment item quantity to be purchased

Story CHAR-18 (Sung Ha Hwang): As a logged-in character/consumer/employee I want to be able to view and modify my personal information so that my personal information is correct and up to date
- Profile page that displays user info stored in the database
- Ensure they know current password before updating to new password or email
    - Button that leads to change password pop-up/page
    - Button that leads to change email pop-up/page

Story CHAR-38 (Aya Bauyrzhankyzy): As a consumer I want to be able to view item details by clicking on the item in the shopping page so that I can get a better idea of the item before adding it to my shopping cart.
- The product details page should provide details like price, clothing sizes, etc that correspond to the item that
  the user clicked-on
- Allow users to add the item to their shopping cart

Story CHAR-57 (Sung Ha Hwang): As an employee, I want to see the user details of the story submissions so that I can contact him/her when the story reaches the interview stage
- Add first name and last name field to user model
- Add the user account reference to the story model
- Show the user fields in the story details page
- Prompt user to sign in before submitting a story

## Spikes
- Learn how to create/read/update/delete images in Node.js with Multer library

## Team capacity
Sung Ha Hwang 2hr/day

Aya Bauyrzhankyzy 2hr/day

Maria Gotcheva 2hr/day

Eric Zhou 2hr/day

Jacob Matias 2hr/day

In sprint2, we plan to do 32 points of work.

## Participants
Sung Ha Hwang

Jacob Matias

Aya Bauyrzhankyzy

Maria Gotcheva

Eric Zhou
