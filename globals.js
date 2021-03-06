const getPort = () => normalizePort(process.env.PORT || '3000');

const getServer = () => {
  // If the application is running in production mode, use the live URL.
  if (process.env.NODE_ENV === 'production')
    return 'https://quickfit.herokuapp.com';

  // Otherwise use the default server URL for the local development.
  return `http://localhost:${getPort()}`;
};

const showError = (req, res, status) => {
  let title = '';
  let content = '';

  if (status === 404) {
    title = '404, page not found';
    content = "Oh dear. Looks like you can't find this page. Sorry.";
    console.log(res.body);
  } else {
    title = `${status}, something's gone wrong`;
    content = 'Something, somewhere, has gone just a little bit wrong.';
  }

  res.status(status);
  res.render('generic-text.pug', {
    title,
    content
  });
};

/*------------------------------------------------------------------------------
    Normalize a port into a number, string, or false.
------------------------------------------------------------------------------*/
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) return val; // named pipe
  if (port >= 0) return port; // port number
  return false;
}

module.exports = {
  getServer,
  getPort,
  showError
};
