
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'max.flode';

var random = Math.round(Math.random() * 10 + 10);
var input = [];
var index = 0;

for(var i = 0; i < random; i ++) {
  input.push(Math.round(Math.random() * 1000));
  
  if(input[i] > input[index]) {
    index = i;
  }
}

var out = testing.RunGraphWithInputs(script, [input]);

// console.log(input)
// console.log(index)
// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == 1 && out[0] == index) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
