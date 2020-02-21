
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array = ["dog", "cat", "squirrel"];
  array.forEach(callback);
  return array;
}
