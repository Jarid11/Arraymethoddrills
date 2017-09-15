/** The .map() method applies a function to each value in an array.
 * The function can be defined within the .map() method as it is here,
 * or separately as a stand alone function that can be resused elsewhere.
*/
function squares(array) {
  return array.map(num => num**2);

}
/** Below are some alternate ways
 * to solve this problem. One is exactly like the above,
 * but with an ES5-style function; the other
 * simply uses a for loop.

 * To test them, rename them to `squares` and comment out
 * the function above.
*/

function squaresWithES5(array){
  return array.map(function(num) {
    return num**2;
  });
}

function squaresWithForLoop(array) {
  for (let i = 0; i < array.length; i ++) {
    array[i] = array[i]*array[i];

  }
  return array;
}









/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testFunctionWorks(fn, input, expected) {

  const result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  }
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  }
}

function runTests() {

  const input1 = [1, 2, 3, 4, 5];
  const result1 = [1, 4, 9, 16, 25];
  const input2 = [2, 4, 6, 8];
  const result2 = [4, 16, 36, 64];

  const testResults = [
    testFunctionWorks(squares, input1, result1),
    testFunctionWorks(squares, input2, result2),
  ];



  const numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();
