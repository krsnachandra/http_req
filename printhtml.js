const https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    let fullData = '';
    response.on('data', function (data) {

      fullData += data;
    });

    response.on('end', function() {
      console.log(fullData);
    });

  });
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);