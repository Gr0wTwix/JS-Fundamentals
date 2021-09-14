function solve (string) {
    let halfCounter = string.length / 2;
    let firstHalf = string.slice(0, halfCounter);
    let secondHalf = string.slice(halfCounter, string.length);

    console.log(`${reverse(firstHalf)} \r\n${reverse(secondHalf)}`);

    function reverse(str){
        let reversed = "";    
        for (let i = str.length - 1; i >= 0; i--) {        
          reversed += str[i];
        }    
        return reversed;
      }
}
solve ('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');