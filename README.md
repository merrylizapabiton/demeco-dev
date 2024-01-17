# Prerequisites

before running the app locally, you must have to install all these packages on your local machine.

- [**`node & npm`**](https://nodejs.org/en/download) - `npm` is the package manager of javascript, and `node` is the backend runtime of javascript.

## Installation Guide

### Windows Users
#### **step 1 - installation for windows users**
click this [**link**](https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi) to install **`npm and node`** on your windows machine, or go to [`nodejs official website`](https://nodejs.org/en/download) to get the most latest version of **`node & npm`**

### Linux Users

#### **step 1 - installation for linux users**
install `node version manager`
using `curl` or `wget`

with `curl`
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
with `wget`
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
#### **step 2 - installation for linux users**
install `node and npm`
```bash
nvm install --lts
nvm install-latest-npm
```

## How to run locally

once you have all the `prerequisites` you can now run this app on your local browser

### step 1 - running locally
clone this project repository on your local terminal
```
git clone https://github.com/edusuuu/demeco-dev
```
### step 2 - running locally 
change your `current working directory` to `demeco-dev`
```
cd demeco-dev
```
### step 3 - running locally
run `npm install` to install all the needed packages to run this app.
```
npm install
```
### step 4 - running locally
run the app on your local machine
```
npm run dev
```
### step 5 - running locally
you can see the running app on your local browser
```
localhost:6969
```
or
```
127.0.0.1:6969
```
