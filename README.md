# Rental Properties

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p float="left">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" />
</p>

## Description

_Welcome to Rental Properties! This application was created with MongoDB, Node.js, using express, and Mongoose packages._

This application:

- currently is under development
- is built with a restful API allowing admin users to create buildings and apartments

---

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Routes](#routes)
- [Walk-through video](#walk-through)
- [Screenshots](#screenshots)
- [License](#license)
- [Contributions](#how-to-contribute)
- [Questions](#questions)

---

## Usage

Use this how you see fit to save information onto the database!

---

## Installation

This project is ran through Node.js, using an Express server along with a React front-end.

- `clone the repository`
- `npm install` in the command line to install the required dependencies.
- open in the terminal and then `npm run start` to start the server!
- The back-end server will start on `localhost:3001`
- The front-end server will start on `localhost:3000`

---

## Routes

### _Front-end endpoints_

- `/` to get to the homepage where non-admin members will be able to pay their bill, create a ticket for maintenance, as well as send messages to owners.

- `/login` to login to your account.

- `/signup` to signup a new user.

- `/dashboard` this is an admin restricted route that will allow admins to view a general overview of their properties

### _Back-end API endpoints_

_User Routes_

- `/api/users` to GET all users, POST to create a new user NOTE: GET all users is restricted to users who have the isAdmin flagged to true. POST a new user will require the request body to have a {username, email, password, city, address}

- `/api/users/:id` to GET, PUT and DELETE a single user NOTE: req.params needs to include users \_\_id. GET and PUT single user are protected with a method to verify the user. DELETE is an admin route only to permanately delete a user.

- `/api/users/login` POST to login user and create a token NOTE: req.body needs to include {username, password}

_Building Routes_

- `/api/buildings` to GET and POST all buildings. NOTE: request.body for creation of a new building needs to have {name, city, address, desc}

- `/api/buildings/:id` to GET, PUT, and DELETE a building. NOTE: request parameter needs to have the buildings \_\_id

_Apartment Routes_

- `/api/apartments` to GET all apartments

- `/api/apartments/:buildingId` to POST a new apartment. NOTE: the request body needs to have {roomNumber, desc, bedrooms, address} AND the request parameter needs to have a buildings \_\_id

- `/api/apartments/:apartmentId/` to GET, PUT and DELETE an apartment. NOTE: request parameter needs to have the apartments \_\_id

- `/api/apartments/rented/:id` to PUT, this route toggles a boolean field of isRented to the opposite of it's current value

---

## Walk-through

Currently there are not any videos

---

## Screenshots

Currently there are not any screenshots

---

## License

MIT License

Copyright (c) [2022] [Amber Robeck]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## How to Contribute

However you would like to contribute I always look forward to learning something new, feel free to email me!

---

## Questions

[![email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:arr5533@gmail.com)

- OR here

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Amber-Robeck)

- OR here

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amber-robeck/)
