# COMMANDS USED #

#### CREATING AN EXPRESS PROJECT ####
`$ express --view=pug --git`
<p> Create an Express project with the Pug template engine.</br>

##### Install the dependencies. #####
`$ npm install`

#### TRYING IT OUT (Windows 10)
`[Environment]::SetEnvironmentVariable("DEBUG","quickfit:*"); & npm start`

#### AUTOMATICALLY RESTARTING THE APPLICATION WITH NODEMON ####
`$ npm install -g nodemon`

`$ nodemon`
<p> You should see a few extra lines output to terminal, confirming that nodemon is running and that it has started node ./bin/www  </p>

#### ADDING AN ENGINES SECTION TO package.json ####
`"engines": {`</br>
`    "node": ">=11.0.0",`</br>
`    "npm": ">=6.4.0"`</br>
`},`
<p> Adds an engines section to package.json to tell Heroku which platform your application is on and which version to use </p>

#### CREATING A PROCFILE ####
<p> create a file called Procfile </p>
<p> Enter the following line in the Procfile: </p>
`web: npm start`

#### TESTING IT LOCALLY WITH HEROKU LOCAL ####
`$ heroku local`
<p> Starts the application running on localhost again, but this time on a different port: 5000 </p>

#### STORING THE APPLICATION IN GIT ####
`$ git init`</br>
`$ git add --all`</br>
`$ git commit -m "First commit"`

#### CREATING THE HEROKU APPLICATION ####
`$ heroku create`

#### DEPLOYING THE APPLICATION TO HEROKU ####
`$ git push heroku master`

#### VIEWING THE APPLICATION ON A LIVE URL ####
`$ heroku open`

#### A SIMPLE UPDATE PROCESS ####
`$ git add --all`</br>
`$ git commit -m "Commit message here"`</br>
`$ git push heroku master`