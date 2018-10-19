function flatten(array_stack)
{
  let final_array = [];

  for (let index of array_stack)
  {

    final_array = final_array.concat(index);

  }

return final_array;

}


let arr1 = [0,1,2,3];
let arr2 = [4,5,6,7];
let arr3 = [8,9];
let arr4 = [9];

console.log(flatten([arr1, arr2, arr3, arr4]));
