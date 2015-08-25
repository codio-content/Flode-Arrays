
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'sum.flode';

var expected = 45;

var out = testing.RunGraphWithInputs(script, [[0,1,2,3,4,5,6,7,8,9]]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0] == expected) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
