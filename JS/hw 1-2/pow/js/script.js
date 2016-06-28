'use strict';
function pow(x, n) {
    var result = x;
    
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    
  return result;
}

var x = prompt ("Number?", '');
var n = prompt ("Degree?", '');

if (n <=1) {
    ('Degree ' + n + ' does not supported. Enter degree bigger than 1'); 
} else {
    alert (pow(x, n));
}