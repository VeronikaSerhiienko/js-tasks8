var timeSearcher = /2[0-3]|[0-1]\d:[0-5]\d/;

var str = 'now 09:00';
var str1 = 'time 37:98';
var str2 = 'breakfast at 25:99';
console.log('time in string: ' + str + ' is ' + str.match(timeSearcher));
console.log('time in string: ' + str1 + ' is ' + str1.match(timeSearcher));
console.log('time in string: ' + str2+ ' is ' + str2.match(timeSearcher));

var arithmeticSearcher = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

var arExp = '1 + 2';
var arExp1 = '1.2 * 3.4';
var arExp2 = '-3 / -6';
var arExp3 = '-2 - 2';
console.log('components of ' + arExp + ' are: ' + arExp.match(arithmeticSearcher));
console.log('components of ' + arExp1 + ' are: ' + arExp1.match(arithmeticSearcher));
console.log('components of ' + arExp2 + ' are: ' + arExp2.match(arithmeticSearcher));
console.log('components of ' + arExp3 + ' are: ' + arExp3.match(arithmeticSearcher));

var urlSearcher = /\{(\w+)\}/i;

function createURL(templateUrl, params) {
  templateUrl = templateUrl.replace(urlSearcher, params.country);
  templateUrl = templateUrl.replace(urlSearcher, params.region);
  return templateUrl;
}

var url = createURL('/api/countries/{country}/regions/{region}/', { country: 'Ukraine', region: 'Kiev' });

console.log(
  url === '/api/countries/Ukraine/regions/Kiev/'
);