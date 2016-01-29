
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'numsearch.flode';

var random = Math.round(Math.random() * 20);
var input = [];
var old = 0;
var index = Math.round(Math.random() * random);

for(var i = 0; i < random; i ++) {
  var old = old + Math.round(Math.random() * 20);
  input.push(old)
}

var out1 = testing.RunGraphWithInputs(script, [input, input[index]]);
var out2 = testing.RunGraphWithInputs(script, [input, 9999]);

// console.log(out)

if(out1.length == 0 || out2.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out1[0] == index && out2[0] == -1) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
