
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'populate.flode';

var random = Math.round(Math.random() * 20);
var expected = []

for(var i = 0; i < random; i ++) {
  expected.push(i*10)
}

var out = testing.RunGraphWithInputs(script, [random]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0].length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[0][i] == 'undefined' || out[0][i] != expected[i]) {
      console.log('Not quite right, make sure you are multiplying by 10.')
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}


console.log('Not quite right.')
process.exit(1)
