## Projects Related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## project 2

```Javascript
const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const bmi =  (weight / ((height*height)/10000)).toFixed(2)
  if(height === ""|| height <0|| isNaN(height) ){
    results.innerHTML = `Please give a Valid height
    ${height}`;
  }else if(weight === ""|| weight <0|| isNaN(weight) ){
    results.innerHTML = `Please give a Valid weight
    ${weight}`;
  }else{
    const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>` 
  }  
  let category = ""
  if(bmi<18.6){
    category= "Under Weight"
  }else if(bmi<24.9 && bmi>18.6) {
    category = "Normal Weight"
  }else{
    category= "Overweight"
  }
  
  results.innerHTML = `<span>Your BMI is ${bmi}, which is considered <strong>${category}</strong>.</span>`;
});
```

## Project3


```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```

## project 4

```javascript
let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const  userInput= document.querySelector('#guessField')
const  guessSlot= document.querySelector('.guesses')
const  remaining= document.querySelector('.lastResult')
const  loworHi= document.querySelector('.lowOrHi')
const  startOver= document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}


function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid Number')
   }else if(guess<1){
    alert('Please enter a valid Number more than 1')
   }else if(guess>100){
    alert('Please enter a Number less than 100')
   }else{
     prevGuess.push(guess)
     if(numGuesses === 11){
      displayGuess(guess)
      displayMessage(`Game Over,Random no. was ${randomNumber}`)
      endGame()
     }else{
       displayGuess(guess)
       checkGuess(guess)
     }
   } 
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it Right`)
    endGame()
  }else if (guess<randomNumber){
    displayMessage(`Number is too low`)
  }else if (guess>randomNumber){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},  `
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(message){
  userInput.value = '';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame(message){
  const newGame = document.querySelector('#newGame')
  newGame.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playGame=true
  })
}
```

## Project 5
```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
insert.innerHTML =`
<div class="color">
<table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
</div>`
})
```

## Project 6
```javascript
const randomColor = function(){
const hex = '0123456789ABCDEF'
let color = '#';
for(let i = 0;i<6; i++ ){
  color += hex[Math.floor(Math.random()*16)]
  }
return color;
}

let intervalid;
const startChangingCOlor = function(){
  if (!intervalid) {
  intervalid = setInterval(changeBgcolor,1000);
  }

function changeBgcolor(){
  document.body.style.backgroundColor = randomColor();
};
}

const stopChangeColor = function () {
  clearInterval(intervalid);
  intervalid = null;
}


document.querySelector('#start').addEventListener('click', startChangingCOlor);

document.querySelector('#stop').addEventListener('click', stopChangeColor);
```