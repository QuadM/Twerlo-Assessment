# Twerlo Assessment Website
## By Mahmoud Hafez

![Twerlo Logo](https://twerlo.com/wp-content/uploads/elementor/thumbs/Twerlo-Logo-pfs3vf8npcslzwf36w7aw5zf3r4zv4616dhjhk8bde.png)

## Table of contents

1. [Installation](#install)
2. [Usage](#use)
3. [Structure](#structure)

## Installation

Make sure to have [Node.js](https://nodejs.org/en/download/) installed on your machine.

1. Clone this repo `$ git clone git@github.com:QuadM/Twerlo-Assessment.git` or using `ssh`.

2. Run `$ npm install` to install dependencies and packages in both `./backend` & `./frontend`.

3. Run `$ cd backend && npm run dev-start` in the root `./twerlo-assessment`.


## Usage

1. Run `$ cd backend && npm run dev-start` to start serving the app (back&front) in the root `./twerlo-assessment` , then go to `http://localhost:4200` and enjoy the web app ♥.

## Structure

The folder structure of the backend. [ Frontend structure is Angular's boilerplate ]

```
.
├───.gitignore
├───index.js
├───package-lock.json
├───package.json
├───TestData (2)[2839].json
│
├───controllers
│   ├───rank.js
│   └───words.js
│
├───utils
│   ├───rankCalculator.js
│   └───utils.js
│
├───models
│   └───words.js
│
└───routes
    ├───words.js
    └───rank.js
```