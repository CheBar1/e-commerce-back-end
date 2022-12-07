# E-Commerce Back End
![Github license](https://img.shields.io/badge/license-MIT-blue.svg) 

## Table of Contents
* [Description](#description)
* [Demo](#demo)
* [User-Story](#user-story)
* [Acceptance-Criteria](#acceptance-criteria)
* [Screenshot](#screenshot)
* [Installation](#require) 
* [Contact-Me](#contact-me)
* [Credits](#credits)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)

## Description
This application builds the back end for an e-commerce site where a working Express.js API was provided. It has been configured to use Sequelize to interact with a MySQL database. It also utilizes dotenv to use environmental variable to store sensitive data, such as the MySQL username, password and database name.

The walkthrough video provided demonstrates:
	- how to create the schema from the MySQL shell,
	- how to seed the database from the command line,
	- how to start the application's server,
	- GET routes for all categories, all products, and all tags being tested in Insomnia Core,
	- GET routes for a single category, a single product, and a single tag being tested in Insomnia Core, and
POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

## Demo
* View the [Demo](https://drive.google.com)

## User-Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance-Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file 
THEN I am able to connect to a database using Sequelize // dot env and connect to database
WHEN I enter schema and seed commands 
THEN a development database is created and is seeded with test data // create tables and add seeds
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database // 
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON // CRUD functionality
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Screenshot
![ScreenShot](./Develop/images/Screenshot%202022-12-07%20172200.png)

## Installation
* node.js 
* npm express 
* MySQL2 
* Sequelize 
* Dotenv

## Contact-Me
* GitHub: [CheBar1](https://github.com/CheBar1)
* Email: findme@gmail.com

## Credits
* University of Adelaide - Coding Bootcamp;
* GitHub;
* Youtube.com;

## Testing
APIs were tested using Insomnia: https://insomnia.rest/

## Questions
Please send your questions [here](mailto:findme@gmail.com?subject=[GitHub]%20Dev%20Connect) or visit [github/CheBar1](https://github.com/CheBar1).

## License
MIT
Please refer to the LICENSE in the repo