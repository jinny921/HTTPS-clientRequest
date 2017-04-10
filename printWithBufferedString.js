const https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    let responseString = '';

    response.on('data', (data) => {
      responseString += data;
    });

    response.on('end', function(data) {
      console.log("Buffered data: ", responseString);
    });
  })

};

getAndPrintHTML();