const Prime_Check = (N) => 
{
  if (N ===1)
  {
    return "NO"
  }
  else
  {
    for(let i=2; i<=N; i++)
    {
      if (N % i ===0)
      {
        return "NO"
        break;
      }
    }
  }

};
