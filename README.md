# QuickFit

### Installation

First, the repository will need to be cloned onto your machine. You'll need to install a git client to do so.

If you want a git client with a nice gui check out <a href="https://desktop.github.com/">GitHub Desktop</a>

If you want a command-line git client on Windows, check out <a href="https://gitforwindows.org/">Git BASH</a>. You can alternatively use Windows Subsytem for Linux.

If you're on Linux, git is probably pre-installed.

<hr/>

### Setting up the Development Environment

<ol>
    <li>Install <a href="https://nodejs.org/en/">Node</a>.</li>
    <li>Clone the repository using the following:</li>
        <pre>$ git clone https://github.com/vespaill/QuickFit.git</pre>
    <li>cd into the QuickFit folder and run the below to install the project's dependencies:</li>
        <pre>$ npm install</pre>
</ol>
<hr/>

### Environment variables
<pre>
SESSION_SECRET
DEBUG
PORT
</pre>

Our app makes use of these environment variables. You can modify their values by creating a `.env` file at the root of the directory and typing in values. For example:

    SESSION_SECRET=secretvalue
    DEBUG=app:*,app-svr:*,app-api:*
    PORT=3000
<hr/>

### Automatically Restarting the App with Nodemon
Install nodemon globably

    $ npm i -g nodemon

Run it

    $ nodemon

Now the app should be up and running. Go to `localhost:3000` to check.
