var timeSearcher = /2[0-3]:[0-5]\d|[0-1]*\d:[0-5]\d/;

var str = 'now 09:00';
var str1 = 'time 37:98';
var str2 = 'breakfast at 25:99';
var str3 = 'breakfast at 23:99';
var str4 = 'breakfast at 9:00';
console.log('time in string: ' + str + ' is ' + str.match(timeSearcher));
console.log('time in string: ' + str1 + ' is ' + str1.match(timeSearcher));
console.log('time in string: ' + str2 + ' is ' + str2.match(timeSearcher));
console.log('time in string: ' + str3 + ' is ' + str3.match(timeSearcher));
console.log('time in string: ' + str4 + ' is ' + str4.match(timeSearcher));

var arithmeticSearcher = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

var arExp = '1 + 2';
var arExp1 = '1.2 * 3.4';
var arExp2 = '-3 / -6';
var arExp3 = '-2 - 2';
console.log('components of ' + arExp + ' are: ' + arExp.match(arithmeticSearcher));
console.log('components of ' + arExp1 + ' are: ' + arExp1.match(arithmeticSearcher));
console.log('components of ' + arExp2 + ' are: ' + arExp2.match(arithmeticSearcher));
console.log('components of ' + arExp3 + ' are: ' + arExp3.match(arithmeticSearcher));

function createURL(templateUrl, params) {
  for (var key in params) {
    templateUrl = templateUrl.replace('{' + key + '}', params[key]);
  }
  return templateUrl;
}

var url = createURL('/api/countries/{country}/regions/{region}/', { country: 'Ukraine', region: 'Kiev' });
console.log(url);
console.log(
  url === '/api/countries/Ukraine/regions/Kiev/'
);

var url1 = createURL('/api/countries/{country2}/regions/{region}/', { country2: 'Ukraine', region: 'Kiev' });
console.log(url1);
console.log(
  url1 === '/api/countries/Ukraine/regions/Kiev/'
);