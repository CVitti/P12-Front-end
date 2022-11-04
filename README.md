# SportSee

![Author](<https://img.shields.io/badge/Author-Cl%C3%A9ment%20VITTI-blue>)

## Frontend

### General information

This repository contains all the source code to install and run the SportSee app.

### Prerequisites

- A text editor `(ex : VSCode )`
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

### Project setup

- Clone the front-end repo in the directory of your choice.

````
git clone https://github.com/CVitti/P12-Front-end.git
````

- Clone the back-end repo in the directory of your choice if it's not already done (back-end setup and starting procedure available in the readme of the back-end repository).

````
git clone https://github.com/CVitti/P12-Back-end.git
````

- Package installations after cloning.

```bash
# with NPM
npm install
# with Yarn
yarn install
```

- Start the application (When currently on P12 directory)

```bash
# Common command
cd sportsee
# and then with NPM
npm start
# or with with Yarn
yarn start
```

### APP test for user data

- Once the app is started, you'll need to change the app URL to access to the profile page.

```bash
# For the 1st test user add the following path at the end of your (localhost:port) URL :
/user/12
# For the 2nd test user add the following path at the end of your (localhost:port) URL :
/user/18
```