let arr = [40, 1, -5, 10, 0]          

function sort  (a)  {
  let length = a.length - 1
 
  
  for(let i = 0; i < length; i++)
      
      for(var j = 0; j < length - i; j++)
    
        if (a[j] > a[j + 1]) {

        [a[j], a[j + 1]] = [a[j + 1], a[j]]
        }
       
        
  return a;
}
 console.log(sort(arr));   