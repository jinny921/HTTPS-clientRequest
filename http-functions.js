const https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    https.get(options, function(response) {

    response.setEncoding('utf8');

    let responseString = '';

    response.on('data', (data) => {
      responseString += data;
    });

    response.on('end', function() {
      callback(responseString);
    });
  });
};