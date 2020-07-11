const generate = document.querySelector("#generate")
const length = document.querySelector("#characterLength")
const upper = document.querySelector("#includeUppercase")
const lower = document.querySelector("#includeLowercase")
const numbers = document.querySelector("#includeNumbers")
const specChar = document.querySelector("#includeSpecChar")

let newPassword = document.querySelector("#password")
const upperCharCode = [65, 90];
const lowerCharCode = [97, 122];
const numCharCode = [48, 57];
const specCharCharCode = [33, 47].concat(58, 64).concat(91, 96).concat(123, 126);

generate.addEventListener("click", function(e) {
    e.preventDefault();
    const length = characterLength.value;
    const upper = includeUppercase.checked;
    const lower = includeLowercase.checked;
    const numbers = includeNumbers.checked;
    const specChar = includeSpecChar.checked;

    const arraySelector = [];
    const password = [];

    if(length < 8 || length > 128) {
      alert("Length must be between 8 and 128 characters")
    }
    if(lower===true){
      for(let i=lowerCharCode[0]; i<= lowerCharCode[1]; i++){
        arraySelector.push(i);
      }
    }
    if(upper===true){
      for(let i=upperCharCode [0]; i<= upperCharCode [1]; i++){
        arraySelector.push(i);
      }
    }
    if(numbers===true){
      for(let i=numCharCode[0]; i<= numCharCode[1]; i++){
        arraySelector.push(i);
      } 
    }
    if(specChar===true){
      for(let i=specCharCharCode[0]; i<= specCharCharCode[1]; i++){
        arraySelector.push(i);
      }
    }
    for(let i = 0; i< length; i++){
      password.push(String.fromCharCode(arraySelector[Math.floor(Math.random()*arraySelector.length)]))
    }
    newPassword.textContent = password.join("");
  })

  
      