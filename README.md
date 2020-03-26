# COMMANDS USED #

##### Install the dependencies. #####
    $ npm install

#### TRYING IT OUT
    $ DEBUG=quickfit:* npm start
##### (Windows 10) #####
    $ [Environment]::SetEnvironmentVariable("DEBUG","quickfit:*"); & npm start


#### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON ####
##### Installing nodemon globably #####
    $ npm install -g nodemon

##### Running it #####
    $ nodemon
<p> You should see a few extra lines output to terminal, confirming that nodemon is running and that it has started node ./bin/www  </p>

go to &nbsp;`localhost:3000`

</br>

--------------------------------------------------------------------------------
### The following commands may not be that relevant to you. They're kept here as future reference for myself. ###
--------------------------------------------------------------------------------
#### CREATING AN EXPRESS PROJECT ####
    $ express --view=pug --git
<p> Creates an Express project with the Pug template engine.</br>

#### ADDING AN ENGINES SECTION TO package.json ####
    "engines": {`
        "node": ">=11.0.0",`
        "npm": ">=6.4.0"`
    },
<p> Adds an engines section to package.json to tell Heroku which platform your application is on and which version to use </p>

#### CREATING A PROCFILE (for heroku to work) ####
Create a file called **Procfile**
<p> Enter the following line in the Procfile:</p>

    web: npm start

#### TESTING IT LOCALLY WITH HEROKU LOCAL ####
    $ heroku local
<p> Starts the application running on localhost again, but this time on a different port: 5000 </p>

#### STORING THE APPLICATION IN GIT ####
    $ git init
    $ git add --all
    $ git commit -m "First commit"

#### CREATING THE HEROKU APPLICATION ####
    $ heroku create

#### DEPLOYING THE APPLICATION TO HEROKU ####
    $ git push heroku master

#### VIEWING THE APPLICATION ON A LIVE URL ####
    $ heroku open

#### A SIMPLE UPDATE PROCESS ####
    $ git add --all
    $ git commit -m "Commit message here"
    $ git push heroku master

---

## Making the application use the right database (local vs. live) ##
#### TESTING, AFTER SETTING THE DATABASE URI BASED ON THE ENVIRONMENT ####
    $ NODE_ENV=production MONGODB_URI=mongodb://<username>:<password>@<hostname>:<port>/<database> nodemon
##### (Windows 10) #####
    [Environment]::SetEnvironmentVariable("NODE_ENV","production"); [Environment]::SetEnvironmentVariable("MONGODB_URI","mongodb://<username>:<password>@<hostname>:<port>/<database>"); & nodemon

#### TESTING THAT HEROKU IS CONNECTING TO THE LIVE DATABASE ####
After pushing to heroku do the following command

    $ heroku logs > logs.txt

This command outputs the latest 100 lines of Heroku logs to a text file. Search the file for the a message along the lines of:

    Mongoose connected to mongodb://heroku_t0zs37gc:1k3t3pgo8sb5enosk314gj@ds159330.mlab.com:59330/heroku_t0zs37gc

If you found it, then you know that the live application on Heroku is connecting to your live database.