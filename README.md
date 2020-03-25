# COMMANDS USED #

#### CREATING AN EXPRESS PROJECT ####
`$ express --view=pug --git`

###### install the dependencies. ######
`$ npm install`

#### TRYING IT OUT (Windows 10)
`[Environment]::SetEnvironmentVariable("DEBUG","quickfit:*"); & npm start`

#### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON ####
`$ npm install -g nodemon`

`$ nodemon`
###### You should see a few extra lines output to terminal, confirming that nodemon is running and that it has started node ./bin/www  ######

#### ADDING AN ENGINES SECTION TO package.json ####
`"engines": {`
    `"node": ">=11.0.0",`
    `"npm": ">=6.4.0"`
`},`
###### Adds an engines section to package.json to tell Heroku which platform your application is on and which version to use ######

#### CREATING A PROCFILE ####
###### * create a file called Procfile ######
###### * Enter the following line in the Procfile: ######
`web: npm start`

#### TESTING IT LOCALLY WITH HEROKU LOCAL ####
`$ heroku local`
###### Starts the application running on localhost again, but this time on a different port: 5000 ######

#### STORING THE APPLICATION IN GIT ####
`$ git init`
`$ git add --all`
`$ git commit -m "First commit"`

#### CREATING THE HEROKU APPLICATION ####
`$ heroku create`

#### DEPLOYING THE APPLICATION TO HEROKU ####
`$ git push heroku master`

#### VIEWING THE APPLICATION ON A LIVE URL ####
`$ heroku open`

#### A SIMPLE UPDATE PROCESS ####
`$ git add --all`
`$ git commit -m "Commit message here"`
`$ git push heroku master`