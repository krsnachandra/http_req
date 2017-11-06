var getHTML = require('./http-functions');

function printUppercase (html) {
  console.log(html.toUpperCase());
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printUppercase);