var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);