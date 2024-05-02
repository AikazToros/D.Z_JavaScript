function crypto (password) {

    const split = password.split('');
    console.log(split.length / 2);
     
    const slice = split.slice(0, 4);
    const slice2 = split.slice(4);
    const connect = slice2.concat(slice);
    const vstroku = connect.join('');
    return vstroku;    
}
  console.log(crypto('password'));

 function check (crypto2, password ) { 
    if(password === crypto(crypto2)) {
        return true;
    
    }
    return false;
       
}
 console.log(check('wordpass', 'password'));