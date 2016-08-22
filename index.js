var http = require('http');
var Twitter = require('twitter');

var options = {
  host: 'api.openweathermap.org',
  path: '/data/2.5/weather?q=Lagos&APPID=fb590f22e8f07753f22605e572027a7a'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();



var client = new Twitter({
  consumer_key: 'G5Lzb2yFz9rj0iFiR1qJJ7Nv0',
  consumer_secret: '93WeKQJyYlthgJ6feXmbKZBH5CCBli42Oa64SHe9fItqEP2DJs',
  access_token_key: '265708217-srlkW67zk2kqFMYSLTerjL1OPYAL1QooJsRixUrC',
  access_token_secret: 'JtcbOuPdbI0Kr2boAw9Kxmx3SZWiseuYA4pTlbyBELFyY'
});

console.log("Welcome to the weather forecast app.");

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}