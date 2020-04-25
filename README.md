


### Install the dependencies.
    $ npm i

### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON
##### Installing nodemon globably

    $ npm i -g nodemon

##### Running it

    $ nodemon

Now the app should be up and running. Go to `localhost:3000` and see.


### Environment variables

`SESSION_SECRET`

`DEBUG`

`PORT`

Our app makes use of these environment variables. You can modify their values by creating a `.env` file at the root of the directory and typing in values. For example:

    SESSION_SECRET=secretvalue
    DEBUG=app:*,app-svr:*,app-api:*
    PORT=3000