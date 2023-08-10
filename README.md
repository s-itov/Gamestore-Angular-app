# Gamestore-Angular-app

---

## Introduction

This is a Angular project for the course of _SoftUni - Angular - June 2023_. It is an **GAME E-COMMERCE** , where users can find their wished games. Registered users can **create, edit, delete, and buy games**.

---


This [project](https://github.com/s-itov/Gamestore-Angular-app.git) was created by [Simeon Itov](https://github.com/s-itov) for the purposes of Angular Softuni Course, June 2023.

It is deployed using firebase for the front end part and render.com for the back end. [View it LIVE here](https://gamestoreolx-73a85.web.app/)

![Project Dashboard](https://i.ibb.co/3sbfYQk/Screenshot-2023-08-09-114441.png)

---

## Public part

This part of the platform is designed for non-registered users. These users have access to the following:

* Home page -> 
Main dashboard page in which the user can find basic information about the site as well as the recent added games. .
* Catalog -> 
Game catalog page which lists all available games created by the registerd users.
* Details Page -> 
A page offering more detailed information about the current game such as: image, title, description, game-id and the author.
* AboutUS-> 
A page with description about the site, location and contact form.
* Login-> 
A page where the login form for already registered users is located.
* Register-> 
A page where the register form for non-users is located.

## Private part

### Game creators private pages

* Profile -> 
The page where a game creator can view their user information, the games they have been published for sale and the games that they've bought.
* Create game -> 
A page with a form for creating a game.
* Edit game -> 
A page with a form for modification of a particularly selected game, part of their games.
* Delete Blog -> 
A page with a confirmation about the deletion of particularly selected game, part of their games.
* Buy -> 
Owners of a game can not see a buy option. 
Logged in useres can buy all the games that they have not created.

## About The Project - Technical Description

### Built With

-[Angular](https://angular.io/)
-[Bootstrap](https://getbootstrap.com/)
-[SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server)

### To start the practice server:

When you are in the project directory:

Navigate to the server directory. To execute the server run the following command:  `node server.js`.

### Authentication

The server is initialized with two users, which can be used for immediate testing:
* peter@abv.bg : 123456
* john@abv.bg : 123456

## Available Scripts

In the project directory, you can run:

### `ng serve`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3030) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `ng serve --production`

Builds the app for production to the `build` folder.\
It correctly bundles Angular in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More About Angular

You can learn more in the [Angular documentation](https://angular.io).

To learn Angular, check out the [Angular documentation](https://angular.io/docs).
