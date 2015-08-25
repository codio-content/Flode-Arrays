
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'strarray.flode';

var expected = ['AAA', 'BBB', 'CCC']
var out = testing.RunGraphWithInputs(script, []);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0].length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[0][i] == 'undefined' || out[0][i] != expected[i]) {
      console.log('Not quite right.')
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}


console.log('Not quite right.')
process.exit(1)
