const https = require('https');

module.exports = function getHTML (options, callback) {

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