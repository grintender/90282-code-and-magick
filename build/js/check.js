"use strict";

var result;
function getMessage(a, b){

//var result;

if (typeof a === "boolean") {
      if (a) {
        result = "Я попал в " + b;
        return result;
      } else {
        result = "Я никуда не попал";
        return result;
      }

} else if (typeof a === "number") {
        result = "Я прыгнул на " + (a * 100) + " сантиметров";
        return result;

} else if (Array.isArray(a) && Array.isArray(b)) {
        var length= 0;
        a.forEach(function(item, i){
        length = item * b[i];
        });
        result = "Я прошёл " + length + " метров";
        return result;

} else if (Array.isArray(a)) {
        var sum = a.reduce(function(previousValue, currentItem) {
                return previousValue + currentItem;
        });
                result = "Я прошёл " + sum + " шагов";
                return result;
        }
};
