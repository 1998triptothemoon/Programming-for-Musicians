function int_array_average(test_array)
{
  let total = 0;
  let result = 0;

//  Traditionl For Loop
/*
for (let counter = 0; counter < test_array.length; counter ++)
{
  total += test_array[counter];
}

*/
// For of loop

for (let counter of test_array)
{
  total += counter;
}



result = (total / test_array.length);

return result;

}

let my_array = [4,4,4,4,5];

console.log(int_array_average(my_array));
