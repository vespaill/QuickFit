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
### The following may not be relevant to you. It's here to serve as future reference for myself.
---
---
---
<br>
<br>
<br>

## CREATING AN EXPRESS PROJECT

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
> #####  Creates an Express project with the Pug template engine. Basically, this command creates a bunch of folders and files that form the basis of your application.
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



#### CREATING A PROCFILE (in order for heroku to work)
> ##### Create a file called **Procfile**
> ##### Enter the following line in the Procfile:
    web: npm start
---
<br>
<br>

## Getting Heroku set up

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

## Adding Mongoose to your application
#### Install
    $ npm i mongoose
#### In `app_server/models`:
    const mongoose = require('mongoose');
#### In `app.js`:
    require('./app_server/models/db');

---
</br>
</br>


## Using the MongoDB shell to create a MongoDB database and add data ##

#### STARTING THE MONGODB SHELL
    $ mongo

#### LISTING ALL LOCAL DATABASES
    > show dbs

#### USING A SPECIFIC DATABASE
    > use <database_name>

#### LISTING THE COLLECTIONS IN A DATABASE
    > show collections

#### SEEING THE CONTENTS OF A COLLECTION
    > db.startup_log.find( <optional_query_object> )

> ##### Prettify the output so that you can read it.

    > db.locations.find().pretty()

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

## GETTING YOUR DATABASE LIVE ##

#### ADDING THE MLAB ADD-ON TO HEROKU (in order to create a live database)
    $ heroku addons:create mongolab

 > ##### Now you have a MongoDB database ready and waiting for you in the cloud. To see for yourself, open a web interface to your live database:
    $ heroku addons:open mongolab

#### PUSHING DATA FROM LOCAL TO LIVE DATABASE

##### Get the database URI
    $ heroku config:get MONGODB_URI

> ###### It will return something of this form:
    mongodb://<username>:<password>@<live_host_and_port>/<live_database_name>

##### Dump the data from your local database into a directory
    $ mongodump -h localhost:27017 -d <database_name>

##### Upload the dumped data to your live database
    $ mongorestore -h <live_host_and_port> -d <live_database_name> -u <username> -p <password> <dump_folder>

#### TESTING THE LIVE DATABASE
    $ mongo <live_host_and_port>/<live_database_name> -u <username> -p <password>

> ##### This command connects you to your live database through the MongoDB shell. Test the live database with some commands.

    > show collections
    > db.exercises.find().pretty()
---
<br>
<br>

## MAKING THE APPLICATION USE THE RIGHT DATABASE (local vs. live)

#### SETTING THE DATABASE URI BASED ON THE ENVIRONMENT
> In `app_server/models`:

    let dbURI = 'mongodb://localhost/Loc8r';
    if (process.env.NODE_ENV === 'production') {
        dbURI = process.env.MONGODB_URI;
    }
    mongoose.connect(dbURI, { useNewUrlParser: true });

#### TESTING BEFORE LAUNCHING
    $ NODE_ENV=production MONGODB_URI=mongodb://<username>:<password>@<live_host_and_port>/<live_database_name> nodemon

##### (Windows 10)
    [Environment]::SetEnvironmentVariable("NODE_ENV","production"); [Environment]::SetEnvironmentVariable("MONGODB_URI","mongodb://<username>:<password>@<live_host_and_port>/<live_database_name>"); & nodemon

#### TESTING THAT HEROKU IS CONNECTING TO THE LIVE DATABASE
After pushing to heroku do the following command

    $ heroku logs > logs.txt

This command outputs the latest 100 lines of Heroku logs to a text file. Search the file for the a message along the lines of:

    Mongoose connected to mongodb://heroku_t0zs37gc:1k3t3pgo8sb5enosk314gj@ds159330.mlab.com:59330/heroku_t0zs37gc

If you found it, then you know that the live application on Heroku is connecting to your live database.

