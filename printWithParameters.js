const https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function(response) {

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

var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step3.html'
    };

getAndPrintHTML(requestOptions);