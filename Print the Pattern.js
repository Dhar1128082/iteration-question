const Print_pattern = (N) => 
{
  let pattern=""
 for(let i=1; i<=N; i++)
 {
   for(let j=1; j<=i; j++)
   {
     pattern=pattern + "*";
   }
    pattern=pattern + "\n";
 }
 console.log(pattern);
};