# COMMANDS USED

##### Install the dependencies.
    $ npm install

#### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON
> ##### Installing nodemon globably
    $ npm install -g nodemon

> ##### Running it
    $ nodemon
> ##### You should see a few extra lines output to terminal, confirming that nodemon is running and that it has started node `./bin/www`. Go to `localhost:3000` and check.
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
> ##### Creates an Express project with the Pug template engine. Basically, this command creates a bunch of directories and files that form the basis of your application.
> ##### Next, install the dependencies.
    $ npm install

#### TRYING IT OUT
    $ DEBUG=quickfit:* npm start
> ##### (Windows 10)
    $ [Environment]::SetEnvironmentVariable("DEBUG","quickfit:*"); & npm start

#### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON
> ##### Installing nodemon globably
    $ npm install -g nodemon

> ##### Running it
    $ nodemon
> ##### You should see a few extra lines output to terminal, confirming that nodemon is running and that it has started node `./bin/www`. Go to `localhost:3000` and check.



#### ADDING AN ENGINES SECTION TO package.json
    "engines": {`
        "node": ">=11.0.0",`
        "npm": ">=6.4.0"`
    },
---
<br>
<br>

## 3.5 &nbsp; Getting Heroku set up

#### CREATING A PROCFILE (in order for heroku to work)
> ##### Create a file called **Procfile**
> ##### Enter the following line in the Procfile:
    web: npm start

#### TESTING IT LOCALLY WITH HEROKU LOCAL
    $ heroku local
> ##### Starts the application running on localhost again, but this time on a different port: 5000

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

> ##### Prettify the output so that you can read it.

    > db.<collection_name>.find().pretty()

#### CREATING A MONGODB DATABASE
    > use <new_database_name>

#### CREATING A COLLECTION AND DOCUMENTS
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

 > ##### Now you have a MongoDB database ready and waiting for you in the cloud. To see for yourself, open the web interface to your live database:
    $ heroku addons:open mongolab

#### PUSHING DATA FROM LOCAL TO LIVE DATABASE

##### Dump the data from your local database
    $ mongodump -h localhost:27017 -d <local_database_name>
> ##### It will output a directory called `dump`. Inside will be a directory with the name of your database.

##### Get the live database URI (you'll need it)
    $ heroku config:get MONGODB_URI

> ##### It will return something of this form:
    mongodb://<username>:<password>@<live_host_and_port>/<live_database_name>

##### Upload the dumped data to your live database
> ##### Go into the `dump` directory and enter this command:
    $ mongorestore -h <live_host_and_port> -d <live_database_name> -u <username> -p <password> <database_dump_directory>

#### TESTING THE LIVE DATABASE
    $ mongo <live_host_and_port>/<live_database_name> -u <username> -p <password>

> ##### This command connects you to your live database through the MongoDB shell. Test the live database with some commands.

    > show collections
    > db.exercises.find().pretty()
<br>

### MAKING THE APPLICATION USE THE RIGHT DATABASE (local vs. live)
#### SETTING THE DATABASE URI BASED ON THE ENVIRONMENT
> In `app_server/models/db.js`:

    let dbURI = 'mongodb://localhost/quickfit';
    if (process.env.NODE_ENV === 'production') {
        dbURI = process.env.MONGODB_URI;
    }
    mongoose.connect(dbURI, { useNewUrlParser: true });
    ...

#### TESTING BEFORE LAUNCHING
    $ NODE_ENV=production MONGODB_URI=mongodb://<username>:<password>@<live_host_and_port>/<live_database_name> nodemon

##### (Windows 10)
    [Environment]::SetEnvironmentVariable("NODE_ENV","production"); [Environment]::SetEnvironmentVariable("MONGODB_URI","mongodb://<username>:<password>@<live_host_and_port>/<live_database_name>"); & nodemon

#### TESTING THAT HEROKU IS CONNECTING TO THE LIVE DATABASE
> ##### After pushing to heroku do the following command:

    $ heroku logs > logs.txt

>##### It outputs the latest 100 lines of Heroku logs to a text file. Search the file for a message along the lines of:

    Mongoose connected to mongodb://heroku_t0zs37gc:1k3t3pgo8sb5enosk314gj@ds159330.mlab.com:59330/heroku_t0zs37gc

>#####  If you found it, then you know that the live application on Heroku is connecting to your live database.
---
<br>
<br>

##  6.1 &nbsp; THE RULES OF A REST API

#### Table 6.2 &nbsp; Four request methods used in a REST API
| Request method | Use | Response
| ----------- | ---- | -------- |
| `POST` | Create new data in the database |  New data object as seen in the database
| `GET` | Read data from the database |  Data object answering the request
| `PUT` | Update a document in the database | Updated data object as seen in the database
| `DELETE` | Delete an object from the database | Null
<br>

#### Table 6.5 &nbsp; Most popular HTTP status codes and how they might be used to send responses to an API request
| Status code | Name | Use case |
| ----------- | ---- | -------- |
| 200         | OK | A successful `GET` or `PUT` request
| 201         | Created | A successful `POST` request
| 204         | No content | A successful `DELETE` request
| 400         | Bad request | An unsuccessful `GET`, `POST`, or `PUT` request due to invalid content
| 401         | Unauthorized | Requesting a restricted URL with incorrect credentials
| 403         | Forbidden | Making a request that isn’t allowed
| 404         | Not found | Unsuccessful request due to an incorrect parameter in the URL
| 405         | Method not allowed | Request method not allowed for the given URL
| 409         | Conflict | Unsuccessful `POST` request when another object with the same data already exists
| 500         | Internal server error | Problem with your server or the database server

#### TESTING THE API
##### To test API calls like `POST`, `PUT`, and `DELETE` download the [Postman Rest Client](https://www.postman.com/)

##### Postman enables you to test API URLs with several request methods, allowing you to specify additional query string parameters or form data.

#### MONGOOSE QUERY METHODS
##### Mongoose interacts with the database through its models. Mongoose models have several methods available to help with querying the database. Here are some of the key ones:

| Method | Breif Description |
| ----- | ----- |
| `find` | General search based on a suppplied query object
| `findById`| Looks for a specific ID
| `findOne` | Gets the first document to match the supplied query
| `exec` | Executes the query and takes a callback that'll run upon completion.
| `create` | Creates a MongoDB document based on the given object which must match the model's schema. Also takes a callback that'll run upon completion.

---
<br>
<br>

## 7.1 &nbsp; HOW TO CALL AN API FROM EXPRESS
##### Add the request module to your project.
    $ npm install --save request