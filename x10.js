
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'x10.flode';

var random = Math.round(Math.random() * 10 + 10);
var input = [];
var m = Math.round(Math.random() * 10 + 10);
var n = Math.round(Math.random() * 5 + 2);

for(var i = 0; i < random; i ++) {
  input.push(Math.round(Math.random() * 99 + 1));
}

var out = testing.RunGraphWithInputs(script, [input, m, n]);

for(var i = 0; i < random; i ++) {
  if(i > 0 && (i + 1) % n == 0) {
    input[i] *= m;
  }
}

// console.log(m)
// console.log(n)
// console.log(input)
// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0].length == input.length) {
  for(var i = 0; i < input.length; i++) {
    if(typeof out[0][i] == 'undefined' || out[0][i] != input[i]) {
      console.log('Not quite right, make sure you are multiplying every Nth number by M.')
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
