"use strict";

//Task

import storage from "./storage.js";

const postInStorage = storage.get("post");

if (postInStorage) {
  console.log("from storage");
  console.log(postInStorage);
} else {
  console.log("first init");
  fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => storage.set("post", post))
    .catch((error) => console.error(error));
}

storage.set("theme", "light");
setTimeout(() => {
  storage.remove("theme");
}, 5000);

import isValidDateFormat from "./date.js";

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false
