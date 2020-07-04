const length = document.querySelector("#characterLength")
const upper = document.querySelector("#includeUppercase")
const lower = document.querySelector("#includeLowercase")
const numbers = document.querySelector("#includeNumbers")
const specChar = document.querySelector("#includeSpecChar")

let newPassword = document.getElementById('password')
const UNInum =[48,57];
const UNIupper = [65,90];
const UNIlower = [97,122];
const UNIspecChar = [33,47];

document.querySelector("#generate").addEventListener('click', function(e) {
    e.preventDefault();
    const length = characterLength.value;
    const upper = includeUppercase.checked;
    const lower = includeLowercase.checked;
    const numbers = includeNumbers.checked;
    const specChar = includeSpecChar.checked;

    const randSelector = [];
    const password = [];
   
    if(upper===true){
      for(let i=UNIupper[0]; i<= UNIupper[1]; i++){
        randSelector.push(i);
      }
    }
    if(numbers===true){
      for(let i=UNInum[0]; i<= UNInum[1]; i++){
        randSelector.push(i);
      }
    }
    if(specChar===true){
      for(let i=UNIspecChar[0]; i<= UNIspecChar[1]; i++){
        randSelector.push(i);
      }
    }
    if(lower===true){
      for(let i=UNIlower[0]; i<= UNIlower[1]; i++){
        randSelector.push(i);
      }
    }
    
    for(let i = 0; i< length; i++){
      password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
    }
    newPassword.textContent = password.join("");
  })
