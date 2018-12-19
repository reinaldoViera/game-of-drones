# Game of Drones Task for UruIt

## How to:

The project is devided in two parts: client and server.

### Client

Included in `src/client`, is a react application built with `create-react-app`.

To deploy the app:
1. Move to the client folder `cd src/client`.
2. Run `yarn` to intall the dependencies.
3. Run `yarn start` to deploy a development server in [http://localhost:3000](http://localhost:3000).
4. Optionally you can run `yarn run build` to build the app for production to the `src/client/build` folder. This folder will be server by the 'server' in [http://localhost:4000](http://localhost:4000).

More commands:
* `yarn test` to run all unit test.
* `yarn run e2e` to run all e2e test.
* `yarn run cypress:open` to run all e2e in cypress enviroment.

## Server

It uses a mysql connection, so mysql should be installed, use [this](https://www.apachefriends.org/index.html) to install in ubuntu.
The `config.json` file is used to configure the connection. Please, create the database (just the database, not the tables) manually for the used config. Ex. with `development`, a `api_node_demo` database should be created.

To deploy the server:
1. Run `yarn` to intall the dependencies.
2. Run `yarn start` to init the server. If the connection is configured correctlly, this command should create the tables the configured database, and fill some default data.


