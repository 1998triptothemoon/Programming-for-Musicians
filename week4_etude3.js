let person1 =
{
  firstname: 'Lebron',
  lastname: 'James'
};

let person2 =
{
  firstname: 'Lonzo',
  lastname: 'Ball'
};

let person3 =
{
  firstname: 'Dave',
  lastname: 'James'
};

let team = [person1, person2, person3];


let sorted = team.sort(function(a,b)
{
  if (a.lastname == b.lastname)
  {
      if (a.firstname < b.firstname) return -1;
      return 1;
  }
  else
  {
     if (a.lastname < b.lastname) return -1;
     return 1;
  }

});

console.log(sorted);
