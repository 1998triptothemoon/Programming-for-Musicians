function reverse_Array(test_array)
{
  let reversed = [];

  //let counter = test_array.length;
  for (let contents of test_array)
  {
    console.log("looping");
  reversed.unshift(contents);
  }
return reversed;

}
let myarray = [1,2,3,4,5];
console.log(reverse_Array(myarray));
