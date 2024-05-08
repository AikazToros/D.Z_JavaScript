function crypto (password) {

    const split = password.split('');
    const midIndex = Math.floor (split.length / 2);
     
    const slice = split.slice(0, midIndex);
    const slice2 = split.slice(midIndex);
    const connect = slice2.concat(slice);
    const vstroku = connect.join('');
    return vstroku;    
}
  console.log(crypto('password')); 

  function check(cryptoPass, password){
    if(!cryptoPass || !password){
       return false
    }
    return password === crypto(cryptoPass);
 }


console.log(check('wordpass', 'password'))