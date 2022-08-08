
const Number_Sum = (N) => 
{
	let sum=0;
	while(N > 0)
	{
	  let rem=N%10;
	  sum=sum+rem;
	  N=parseInt(N/10);
	}
	return sum;
};
