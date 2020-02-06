
let toyota = {
  drive : function(){
    return 'Driving toyota!!';
  } 
}

let camri = {
  wifi : () => {
    return 'Using wifi!!';
  }
}

Object.setPrototypeOf(camri,toyota); //Function of toyota copied to camri.

console.log(camri.wifi()); 
console.log(camri.drive());

