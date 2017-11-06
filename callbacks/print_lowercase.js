var getHTML = require('./http-functions');

function printLowercase (html) {
  console.log(html.toLowerCase());
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printLowercase);