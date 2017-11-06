const https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    let fullData = '';
    response.on('data', function (data) {

      fullData += data;
    });

    response.on('end', function() {
      callback(fullData);
    });

  });
};

function printHTML (html) {
  console.log(html);
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);