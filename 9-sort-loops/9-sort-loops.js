let arr = [40, 1, -5, 10, 0]          

 function comparison (firstGroup, secondGroup) {
    return firstGroup < secondGroup
 }
  
 function sort  (array)  {
   const length = [...array]
  
   for(let i = 0; i < length.length; i++){
       
       for(let j = 0; j < length.length; j++){

        const Exchange = comparison(length[i], length[j])
     
         if (Exchange) {
 
            [length[i], length[j]] = [length[j], length[i]]
         }
       }
     }
         
   return length;
 }
  console.log(sort(arr));  
  console.log(arr); 
