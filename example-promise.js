/*
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Topeka').then(function(temp){
  console.log('Promise success', temp);
}, function(err) {
  console.log('promise error', err)
});
*/

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a !== 'number' || typeof b !== 'number'){
      reject('One or both of these is not a number');
    } else {
      resolve(a+b);
    }
  });
}

addPromise(2, 8).then(function(sum){
  console.log('The sum of your two numbers is:', sum);
}, function(err){
  console.log('Promise error', err);
});
