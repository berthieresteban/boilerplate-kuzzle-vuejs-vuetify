# Kuzzle, VueJS and Vuetify boilerplate

A pretty fat boilerplate to start-off webapp projects based on [Kuzzle](https://doc.kuzzle.io/core/2/guides/introduction/what-is-kuzzle/), [VueJS](https://vuejs.org/v2/guide/) and [Vuetify](https://vuetifyjs.com/en/getting-started/installation/).

This boilerplate is composed of a **backend**, located in `./apps/backend` and a **frontend**, located in `./apps/frontend`.
It also contains a`./initializationFiles` wich contains three files that will be used to initialize your backend.

Each layer of the stack contains its corresponding `README.md` file. Please refer to it.

## Overview

This boilerplate provides you with

- An instance of Kuzzle as a framework, ready to be [extended](https://doc.kuzzle.io/core/2/guides/getting-started/write-application/)
- A VueJS web application based on the Kuzzle SDK javascript v7, including:
  - an implementation of the authentication method integrated with Vuex,
  - an implementation of the "Offline mode", also integrated with Vuex,
  - a complete i18n setup based on vue-i18n,
  - a complete Vuetify installation (with fortawesome 5),
  - an instance of the vue-izitoast plugin

## Install

Clone this repository using the following command

```bash
git clone https://github.com/berthieresteban/boilerplate-kuzzle-vuejs-vuetify.git
```

Then, delete the Git tree and reinitialize the repo from scratch

```bash
cd boilerplate-kuzzle-vuejs-vuetify
rm -rf .git
```

At this point you may rename the folder of your project to a meaningful name.
Then, you can set remote(s) the usual way

```bash
git init
git remote add origin <another-git-server-URL-here>
```

You can then install the backend and frontend applications:

```bash
cd apps/backend
npm install
npm run install:docker
```

```bash
cd apps/frontend
npm install
```

## And then what?
Start your local Kuzzle instance by typing
```bash
cd apps/backend
npm run dev:docker
```

Adapt the `./initializationFiles/*` files to your need
Then you will need the kuzzle cli, [kourou](https://www.npmjs.com/package/kourou) to initialize your backend
```bash
kourou admin:loadMappings < ./initializationFiles/mappings.json
kourou admin:loadFixtures < ./initializationFiles/fixtures.json
kourou admin:loadSecurities < ./initializationFiles/securities.json
```
Serve your web app locally by typing
```bash
cd apps/frontend 
npm run serve
```

Take a look at the `README.md` files in the `backend` and `frontend` directories to do the next steps.
