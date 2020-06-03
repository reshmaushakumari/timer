const args = process.argv.slice(2);
var inputNumbersArray = [];
for (let i = 0; i < args.length; i++)
  inputNumbersArray.push(args[i]);

// Sorting
inputNumbersArray.sort(function (a, b) {
  return a - b;
});

const timer = function (sortedArray, printnl) {
  for(t=0; t < sortedArray.length; t++) {
    printnl(sortedArray[t]);
  }
}

const printNewLine = function (arrayValue) {
  var waitTime = arrayValue * 1000;
  setTimeout(() => {
    process.stdout.write('\x07')
  }, waitTime)
}

timer(inputNumbersArray, printNewLine);