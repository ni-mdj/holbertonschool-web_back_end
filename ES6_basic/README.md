# ES6 Basics

This repository contains tasks related to mastering modern JavaScript using ECMAScript 6 (ES6). It is part of the Holberton School Web Back-End curriculum and focuses on understanding and applying new syntax and features introduced in ES6.

## Project Information

**Curriculum**: Foundations v2 - Part 2  
**Project Name**: ES6 Basics  
**Author**: Johann Kerbrat, Engineering Manager at Uber Works  
**School**: Holberton School  
**Track**: Web Back-End  
**Project Weight**: 1  
**Level**: Novice  
**Score Updates**: Your score will update as you complete the tasks.  

---

## Learning Objectives

By the end of this project, you should be able to explain:

- What ES6 is and why it was introduced
- New features in ES6 and how to use them
- The difference between `const` and `let`
- Block scope vs function/global scope
- Arrow functions and default function parameters
- The `rest` and `spread` operators
- Template literals for string interpolation
- ES6 object shorthand for properties and methods
- Iterators and the `for...of` loop

---

---

## Setup Instructions

### 1. Install Node.js 20

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### 2. Check Versions

```bash
node -v     # v20.x.x
npm -v      # 9.x.x or 10.x.x
```

### 3. Install Project Dependencies

```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

### 4. Required Configuration Files

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

> Don't forget to run `npm install` after setting these up.

---

## Project Structure

Each file in this project corresponds to a specific ES6 feature or syntax improvement:

- `0-constants.js` – `const` vs `let`
- `1-block-scoped.js` – block scoping
- `2-arrow.js` – arrow functions
- `3-default-parameter.js` – default parameters
- `4-rest-parameter.js` – rest operator
- `5-spread-operator.js` – spread operator
- `6-string-interpolation.js` – template literals
- `7-getBudgetObject.js` – object property shorthand
- `8-getBudgetCurrentYear.js` – computed property names
- `9-getFullBudget.js` – method property shorthand
- `10-loops.js` – `for...of` loop
- `11-createEmployeesObject.js` – iterators and object creation
- `12-createReportObject.js` – report structure with method

Each task is tested through separate `*-main.js` files.

---

## How to Run

To run a specific file:

```bash
npm run dev filename.js
```

To test all using Jest:

```bash
npm test
```

Make sure you use `import`/`export` syntax properly and your code passes ESLint checks.

---