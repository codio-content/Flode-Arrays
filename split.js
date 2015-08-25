
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'split.flode';

var random = Math.round(Math.random() * 10 + 10);
var input = [];
var odd = [];
var even = [];

for(var i = 0; i < random; i ++) {
  input.push(Math.round(Math.random() * 99 + 1));
  
  if(input[i] % 2 == 0) {
    even.push(input[i]);
  }
  else {
    odd.push(input[i]);
  }
}

var out = testing.RunGraphWithInputs(script, [input]);

// console.log(input)
// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0].length == odd.length) {
  for(var i = 0; i < odd.length; i++) {
    if(typeof out[0][i] == 'undefined' || out[0][i] != odd[i]) {
      console.log('Not quite right, make sure you are outputting the odd numbers array first.')
      process.exit(1)
    }
  } 
}

if(out[1].length == even.length) {
  for(var i = 0; i < even.length; i++) {
    if(typeof out[1][i] == 'undefined' || out[1][i] != even[i]) {
      console.log('Not quite right, make sure you are outputting the even numbers array last.')
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}


console.log('Not quite right.')
process.exit(1)
