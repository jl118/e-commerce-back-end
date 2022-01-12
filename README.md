# E-Commerce Back End
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/jl118/e-commerce-back-end?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/jl118/e-commerce-back-end?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  
  ## Description 
  
  This is the back end for an e-commerce site that utilizes Express.js API and Sequelize to interact with a MySQL database containing tag, category, and product data.
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  
  *Steps required to install project:*
  
  To utilize this app you will first have to clone the repo to your machine. Next, modify the `.env.EXAMPLE` file, writing your own mysql information into the spaces provided. Once you put your information in the file, delete the `.EXAMPLE` from the end of the file name, so the file will be recognized by the program. 
  
  Then you need to open a terminal and install the required dependencies using the command `npm i`. From there, log into MySQL using the command `mysql -u root -p` (the 'root' can be replaced with your local username if necessary). After you enter your password, run the command `source db/schema.sql` to create the database. 
  
  Exit MySQL with the command `quit`, and then seed the database with the command `node seeds` to utilize the existing seed data. Finally, run `node server.js` to activate the local server on port 3001. From there you can manipulate the data easily with a program such as Insomnia, or create a front end to display the data.
  
  ## Usage 
  
  This is a database and has no front end, but the data can be manipulated with api routes in a program like Insomnia. 

  A demo video showing the functionality can be found (here)[].
    
  ## License
 
  This project is under the MIT license.
  
  ---
  
  ## Questions?
  
  If you have any questions or would like to contribute, please contact me here:
 
  GitHub: [@jl118](https://api.github.com/users/jl118)
  
  Email: jen.liebelt@gmail.com
  