# COMMANDS USED

##### Install the dependencies.
    $ npm install

#### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON
Installing nodemon globably

    $ npm install -g nodemon

Running it

    $ nodemon

You should see a few extra lines output to terminal, confirming that nodemon is running and that it has started node `./bin/www`. Go to `localhost:3000` and check.
<br>
<br>
<br>

---
---
---
### The following may or may not be relevant. It's a summary of everything done to get this far.
---
---
---
<br>
<br>
<br>

## 3.2 &nbsp; CREATING AN EXPRESS PROJECT

#### Install the pieces
 - Node and npm
 - The Express generator installed globally
 - Git
 - Heroku
 - Suitable command-line interface (CLI) or terminal

#### Verify the installations
    $ node --version
    $ npm --version
    $ express --version

#### Creating an Express project and trying it out
    $ express --view=pug --git

Creates an Express project with the Pug template engine. Basically, this command creates a bunch of directories and files that form the basis of your application.

Next, install the dependencies.

    $ npm install

#### TRYING IT OUT
    $ DEBUG=quickfit:* npm start

(Windows 10)

    $ [Environment]::SetEnvironmentVariable("DEBUG","quickfit:*"); & npm start

#### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON
Installing nodemon globably

    $ npm install -g nodemon

Running it

    $ nodemon
You should see a few extra lines output to terminal, confirming that nodemon is running and that it has started node `./bin/www`. Go to `localhost:3000` and check.

#### ADDING AN ENGINES SECTION TO package.json
    "engines": {`
        "node": ">=11.0.0",`
        "npm": ">=6.4.0"`
    },
---
<br>
<br>

## 3.3 &nbsp; Modifying Express for MVC
#### UNDERSTANDING `res.render`:
`render` is the Express function for compiling a view template to send as the HTML response that the browser will receive.
The `render` method takes the name of the view template and a JavaScript data
object in the following construct:

    res.render('index', {title: 'express'})

The first argument is the name of template to use, in this case referencing index.pug
The second argument is a JavaScript object containing data for the template to use.


<br>
<br>

## 3.5 &nbsp; Getting Heroku set up

#### CREATING A PROCFILE (in order for heroku to work)
Create an extensionless file called `Procfile`

In it, type the single line: `web: npm start`

#### TESTING IT LOCALLY WITH HEROKU LOCAL
    $ heroku local

Starts the application running on localhost again, but this time on a different port: 5000

#### STORING THE APPLICATION IN GIT
    $ git init
    $ git add --all
    $ git commit -m "First commit"

#### CREATING THE HEROKU APPLICATION
    $ heroku create

#### DEPLOYING THE APPLICATION TO HEROKU
    $ git push heroku master

#### VIEWING THE APPLICATION ON A LIVE URL
    $ heroku open

#### A SIMPLE UPDATE PROCESS
    $ git add --all
    $ git commit -m "Commit message here"
    $ git push heroku master
---
</br>
</br>

## 5.1 &nbsp; Adding Mongoose to your application
#### Install
    $ npm i mongoose
#### In `app_server/models/db.js`:
    const mongoose = require('mongoose');
#### In `app.js`:
    require('./app_server/models/db');

---
</br>
</br>


## 5.4 &nbsp; Using the MongoDB shell to create a MongoDB database and add data ##

#### STARTING THE MONGODB SHELL
    $ mongo

#### LISTING ALL LOCAL DATABASES
    > show dbs

#### USING A SPECIFIC DATABASE
    > use <database_name>

#### LISTING THE COLLECTIONS IN A DATABASE
    > show collections

#### SEEING THE CONTENTS OF A COLLECTION
    > db.<collection_name>.find( <optional_query_object> )

Prettify the output so that you can read it.

    > db.<collection_name>.find().pretty()

#### CREATING A MONGODB DATABASE
    > use <new_database_name>

#### CREATING A COLLECTION AND DOCUMENTS
example:

    > db.<collection_name>.save({
        name: 'Bench Press',
        equip: ['BB', 'DB']
        ...
    })
---
</br>
</br>

## 5.5 &nbsp; GETTING YOUR DATABASE LIVE ##

#### ADDING THE MLAB ADD-ON TO HEROKU (in order to create a live database)
    $ heroku addons:create mongolab

Now you have a MongoDB database ready and waiting for you in the cloud. To see for yourself, open the web interface to your live database:

    $ heroku addons:open mongolab

#### PUSHING DATA FROM LOCAL TO LIVE DATABASE

##### Dump the data from your local database
    $ mongodump -h localhost:27017 -d <local_database_name>
It will output a directory called `dump`. Inside will be a directory with the name of your database.

##### Get the live database URI (you'll need it)
    $ heroku config:get MONGODB_URI

It will return something of this form:

    mongodb://<username>:<password>@<live_host_and_port>/<live_database_name>

##### Upload the dumped data to your live database
Go into the `dump` directory and enter this command:

    $ mongorestore -h <live_host_and_port> -d <live_database_name> -u <username> -p <password> <database_dump_directory>

#### TESTING THE LIVE DATABASE
    $ mongo <live_host_and_port>/<live_database_name> -u <username> -p <password>

This command connects you to your live database through the MongoDB shell. Test the live database with some commands.

    > show collections
    > db.exercises.find().pretty()
<br>

### MAKING THE APPLICATION USE THE RIGHT DATABASE (local vs. live)
#### SETTING THE DATABASE URI BASED ON THE ENVIRONMENT
In `db.js`:

    let dbURI = 'mongodb://localhost/quickfit';
    if (process.env.NODE_ENV === 'production') {
        dbURI = process.env.MONGODB_URI;
    }
    mongoose.connect(dbURI, { useNewUrlParser: true });
    ...

#### TESTING BEFORE LAUNCHING
    $ NODE_ENV=production MONGODB_URI=mongodb://<username>:<password>@<live_host_and_port>/<live_database_name> nodemon

(Windows 10)

    [Environment]::SetEnvironmentVariable("NODE_ENV","production"); [Environment]::SetEnvironmentVariable("MONGODB_URI","mongodb://<username>:<password>@<live_host_and_port>/<live_database_name>"); & nodemon

#### TESTING THAT HEROKU IS CONNECTING TO THE LIVE DATABASE
After pushing to heroku do the following command:

    $ heroku logs > logs.txt

It outputs the latest 100 lines of Heroku logs to a text file. Search the file for a message along the lines of:

    Mongoose connected to mongodb://heroku_t0zs37gc:1k3t3pgo8sb5enosk314gj@ds159330.mlab.com:59330/heroku_t0zs37gc

If you found it, then you know that the live application on Heroku is connecting to your live database.

---
<br>
<br>

##  6.1 &nbsp; THE RULES OF A REST API

#### Table 6.2 &nbsp; Four request methods used in a REST API
| Request method | Use | Response
| :------: | :--------------------------------- | :--------------------------- |
| `POST`   | Create new data in the database    | New data object as seen in the database
| `GET`    | Read data from the database        | Data object answering the request
| `PUT`    | Update a document in the database  | Updated data object as seen in the database
| `DELETE` | Delete an object from the database | Null
<br>

#### Table 6.5 &nbsp; Most popular HTTP status codes and how they might be used to send responses to an API request
| Status code | Name | Use case |
| :-: | :-------------------- | :--------------------------------------------- |
| `200` | OK                    | A successful `GET` or `PUT` request
| `201` | Created               | A successful `POST` request
| `204` | No content            | A successful `DELETE` request
| `400` | Bad request           | An unsuccessful `GET`, `POST`, or `PUT` request due to invalid content
| `401` | Unauthorized          | Requesting a restricted URL with incorrect credentials
| `403` | Forbidden             | Making a request that isn’t allowed
| `404` | Not found             | Unsuccessful request due to an incorrect parameter in the URL
| `405` | Method not allowed    | Request method not allowed for the given URL
| `409` | Conflict              | Unsuccessful `POST` request when another object with the same data already exists
| `500` | Internal server error | Problem with your server or the database server

#### TESTING THE API
To test API calls like `POST`, `PUT`, and `DELETE` download the [Postman Rest Client](https://www.postman.com/).

Postman enables you to test API URLs with several request methods, allowing you to specify additional query string parameters or form data.

#### MONGOOSE QUERY METHODS
Mongoose interacts with the database through its models. Mongoose models have several methods available to help with querying the database. Here are some of the key ones:

|  Method   | Breif Description |
| :-------- | :--------------------------------------------------------------- |
| `find`    | General search based on a suppplied query object
| `findById`| Looks for a specific ID
| `findOne` | Gets the first document to match the supplied query
| `exec`    | Executes the query and takes a callback that'll run upon completion.
| `create`  | Creates a MongoDB document based on the given object which must match the model's schema. Also takes a callback that'll run upon completion.

<br>
<br>

## 7.1 &nbsp; HOW TO CALL AN API FROM EXPRESS
#### Add the request module to your project.
    $ npm install --save request

#### Using the request module
Your Express application needs to be able to call the API URLs that we've defined—sending the correct request method—and then be able to interpret the response.

    request(options, callback);

options—JavaScript object defining the request.

callback—Function to run when a response is received.

#### Table 7.1 &nbsp;  Four common request options for defining a call to an API
| Option | Description | Required
| :----- | :---------- | :--------
| `url`  | Full URL of the request to be made, including protocol domain, path, and URL parameters | Yes
| `method` | Method of the request, such as `GET`, `POST`, `PUT`, or `DELETE` | No—defaults to GET if not specified
| `json` | Body of the request as a JavaScript object; an empty object should be sent if no body data is needed | Yes—ensures that the response body is also parsed as JSON
| `qs` | JavaScript object representing any query string parameters | No

<br>
<br>

## 8 &nbsp; Creating an Angular application with TypeScript

#### Installing Angular
    $ npm install -g @angular/cli

#### Creating a boilerplate Angular app
    $ ng new QuickFit-public --skipGit=true --skipTests=true --defaults=true --directory=app_public

#### Running the Angular app
    $ ng serve
This command compiles, builds, and delivers the Angular application to the browser on port http://localhost:4200. It also rebuilds and reloads the application whenever the source code changes.

A __component__ handles a specific piece of functionality.

A __module__ contains one or more components working together.

#### Creating a new component
    $ ng generate component <new_component_name>

This command creates a new folder called `<new_component_name>` within the src folder. Create the TypeScript, HTML, and CSS files inside it, and also update the app.module.ts file to tell the module about the new component.

#### Creating a data service

    $ ng generate service <service_name>

<br>
<br>

## 11 &nbsp; Authenticating users, managing sessions, and securing API

_JWT_ (JSON Web Token)—a JSON object encrypted into a string that’s meaningless to the human eye but that can be decoded and understood by both the application and the server.

#### Creating a user schema for MongoDB
 Passwords should never be stored in a database as plain text.

#### One-way password encryption: Hashes and salts

_salt_—a random string generated by the application for each user that's combined with the password before encryption.

_hash_—an encryption that combines a user's password with a random salt.

<br>

#### Building a Mongoose user schema
...

<br>

#### USING THE `CRYPTO` MODULE FOR ENCRYPTION
`crypto` methods:
* `randomBytes`—To generate a cryptographically strong string of data to use as the salt.
* `pbkdf2Sync`—To create the hash from the password and the salt. _pbkdf2_ stands for _password-based key derivation function 2_, an industry standard.


#### Three parts of a JWT
example:

`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9●eyJfaWQiOiI1NTZiZWRmNDhmOTUzOTViMTlhNjc1ODgiLCJlbWFpbCI6InNpbW9uQGZ1bGxzdGFja3RyYWluaW5nLmNvbSIsIm5hbWUiOiJTaW1vbiBIb2xtZXMiLCJleHAiOjE0MzUwNDA0MTgsImlhdCI6MTQzNDQzNTYxOH0●GD7UrfnLk295rwvIrCikbkAKctFFoRCHotLYZwZpdlE`

This string is meaningless to the human eye, but you should be able to spot the two
dots and therefore the three separate parts. These three parts are:
* _Header_—An encoded JSON object containing the type and the hashing algorithm used.
* _Payload_—An encoded JSON object containing the data, the real body of the
token.
* _Signature_—An encrypted hash of the header and payload, using a secret that
only the originating server knows.

#### Generating a JWT from Express
Include the npm module `jsonweb-token`

    $ npm install --save jsonwebtoken

### Keeping the secret actually secret with environment variables

Create a file in the root of the project called `.env` and set
the secret as follows:

    JWT_SECRET=<secret_string>

`<secret_string>` can be any string. This `.env` file should not be included in any Git commit, so go ahead and `.gitignore` it.

To read and use this new file to set environment variables, you’ll need to install and use a new npm module called `dotenv`

    npm install dotenv --save

The `dotenv` module should be required into the `app.js` file as the first line in the file

    require('dotenv').config( {path: '.env'} );

Now you can access it via `process.env.JWT_SECRET`

Your production environment needs to know about this environment variable too:

    $ heroku config:set JWT_SECRET=<secret_string>

### Creating an authentication API with Passport
Install the core module and the _local_ strategy module.

    $ npm install –-save passport passport-local