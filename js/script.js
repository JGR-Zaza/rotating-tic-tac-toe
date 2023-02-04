//                              //
// Weekday or Weekend Evaluator //
//                              //
// From https://youtu.be/_A20kVsaqIk?list=PLBf-QcbaigsJysJ-KFZvLGJvvW-3sfk1S


// Checks if the entered day is a weekday or weekend

document.querySelector('#day-check-btt').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  // Adding "toLowerCase" circumvents case sensitivity by returning string as all-lowercase, thus matching the values added below

if (day === "monday") {
  // console.log("It's a weekday!")
  document.querySelector('#day-result').innerText = ("It's a weekday!")
  document.querySelector('#day-result').style.fontSize = '1em';
  document.querySelector('#day-result').style.color = 'rgb(145, 162, 255)';
  document.querySelector('#day-result').style.textShadow = 'var(--text--shadow1)';
  
} else if(day === "tuesday")  {
  // console.log("It's a weekday!!")
  document.querySelector('#day-result').innerText = ("It's a weekday!!")
  document.querySelector('#day-result').style.fontSize = '1.1em';
  document.querySelector('#day-result').style.color = 'rgb(108, 154, 255)';
  document.querySelector('#day-result').style.textShadow = 'var(--text--shadow1)';
  
} else if(day === "wednesday")  {
  // console.log("It's a weekday!!!")
  document.querySelector('#day-result').innerText = ("It's a weekday!!!")
  document.querySelector('#day-result').style.fontSize = '1.25em';
  document.querySelector('#day-result').style.color = 'rgb(79, 185, 255)';
  document.querySelector('#day-result').style.textShadow = 'var(--text--shadow1)';
  
} else if(day === "thursday")  {
  // console.log("It's a weekday!!!!")
  document.querySelector('#day-result').innerText = ("It's a weekday!!!!")
  document.querySelector('#day-result').style.fontSize = '1.5em';
  document.querySelector('#day-result').style.color = 'rgb(88, 202, 255)';
  document.querySelector('#day-result').style.textShadow = 'var(--text--shadow1)';
  
} else if(day === "friday")  {
  // console.log("It's a weekday!!!!!")
  document.querySelector('#day-result').innerText = ("It's a weekday!!!!!")
  document.querySelector('#day-result').style.fontSize = '1.75em';
  document.querySelector('#day-result').style.color = 'rgb(71, 255, 246)';
  document.querySelector('#day-result').style.textShadow = 'var(--text--shadow1)';
  
} else if(day === "saturday" || day === "sunday")  {
  // console.log("It's a weekend!!!!!")
  document.querySelector('#day-result').innerText = ("It's the weekend!!!!!")
  document.querySelector('#day-result').style.color = 'transparent';
  document.querySelector('#day-result').style.backgroundImage = 'linear-gradient(90deg, #1b69ff 0%, #ff7b1b 20%, #ff2cca 50%)';
  document.querySelector('#day-result').style.backgroundClip = 'text';
  document.querySelector('#day-result').style.textShadow = 'var(--text--shadownull)';
  document.querySelector('#day-result').style.fontSize = '2.35em';
  
} else {
  // console.log("(check for entry typo!)")
  document.querySelector('#day-result').innerText = ("(check for entry typo!)")
  document.querySelector('#day-result').style.color = 'rgb(255,100,160)';
  document.querySelector('#day-result').style.fontSize = '1em';

}

document.querySelector('#day-reset-btt').addEventListener('click', reset)

function reset() {
  document.querySelector('#day-result').innerText = "";
  document.querySelector('#day').value = "";
}

}


// 
// Weekend/Weekday Button-press Day String Inserter
// 

document.getElementById('mon-daycheck-btt').addEventListener('click', addMon)
function addMon() {
  let checkBox = document.getElementById("day-check-auto");
  if (checkBox.checked == true) {
    document.querySelector('#day').value = ("Monday");
    check();
  } else {
    document.querySelector('#day').value = ("Monday");
  }
}


document.getElementById('tues-daycheck-btt').addEventListener('click', addTues)
function addTues() {
  let checkBox = document.getElementById("day-check-auto");
  if (checkBox.checked == true) {
    document.querySelector('#day').value = ("Tuesday");
    check();
  } else {
    document.querySelector('#day').value = ("Tuesday");
  }
}


document.getElementById('wed-daycheck-btt').addEventListener('click', addWed)
function addWed() {
  let checkBox = document.getElementById("day-check-auto");
  if (checkBox.checked == true) {
    document.querySelector('#day').value = ("Wednesday");
    check();
  } else {
    document.querySelector('#day').value = ("Wednesday");
  }
}


document.getElementById('thur-daycheck-btt').addEventListener('click', addThur)
function addThur() {
  let checkBox = document.getElementById("day-check-auto");
  if (checkBox.checked == true) {
    document.querySelector('#day').value = ("Thursday");
    check();
  } else {
    document.querySelector('#day').value = ("Thursday");
  }
}


document.getElementById('fri-daycheck-btt').addEventListener('click', addFri)
function addFri() {
  let checkBox = document.getElementById("day-check-auto");
  if (checkBox.checked == true) {
    document.querySelector('#day').value = ("Friday");
    check();
  } else {
    document.querySelector('#day').value = ("Friday");
  }
}


document.getElementById('sat-daycheck-btt').addEventListener('click', addSat)
function addSat() {
  let checkBox = document.getElementById("day-check-auto");
  if (checkBox.checked == true) {
    document.querySelector('#day').value = ("Saturday");
    check();
  } else {
    document.querySelector('#day').value = ("Saturday");
  }
}


document.getElementById('sun-daycheck-btt').addEventListener('click', addSun)
function addSun() {
  let checkBox = document.getElementById("day-check-auto");
  if (checkBox.checked == true) {
    document.querySelector('#day').value = ("Sunday");
    check();
  } else {
    document.querySelector('#day').value = ("Sunday");
  }
}


// ////////////////////////////////////////
// Celcius-Fahrenheit Converter
// ////////////////////////////////////////

document.querySelector('#celcius').addEventListener('keyup', celToFah)
document.querySelector('#celcius').addEventListener('change', celToFah)
// (VERY SCRAPPY CODE!! FIND OUT HOW TO ADD MULTIPLE LISTENERS )

function celToFah() {
  // Value in C
  let cTemp = document.querySelector('#celcius').value
  // Convert
  cTemp = cTemp * 9 / 5 + 32
  // Round to 2 digits
  let roundCelTemp = cTemp.toFixed(2)
  // Display text at target ID
  // document.getElementById('output-c').innerHTML = roundCelTemp

  // Display text in Fahrenheit form
  document.getElementById("fahrenheit").value = roundCelTemp
}


document.querySelector('#fahrenheit').addEventListener('keyup', fahToCel)
document.querySelector('#fahrenheit').addEventListener('change', fahToCel)

function fahToCel() {
  // Value in F
  let fTemp = document.querySelector('#fahrenheit').value
  // Convert
  fTemp = (fTemp - 32) * 5 / 9
  // Round to 2 digits
  let roundFahTemp = fTemp.toFixed(2)
  // Display text at target ID
  // document.getElementById('output-f').innerHTML = roundFahTemp

  // Display text in Celcius form
  document.getElementById("celcius").value = roundFahTemp
}



// ////////////////////////////////////////
// Image Exercise - Click Hide
// ////////////////////////////////////////

// Task 1: Clicking header removes Tanuki & Tengu

// Reset button -- works, not the best
document.querySelector('#image-bring-back').addEventListener('click', bringBack)

function bringBack() {
  document.querySelector('#gen-tengu').style.opacity = "1";
  document.querySelector('#gen-fox').style.opacity = "1";
  document.querySelector('#gen-tanuki').style.opacity = "1";
  // document.querySelector('#gen-tengu').style.display = "block";
  // document.querySelector('#gen-fox').style.display = "block";
  // document.querySelector('#gen-tanuki').style.display = "block";
}

// Attempt 1 of Header Click - Works, not the best
document.querySelector('#title-click-hide').addEventListener('click', keepFox)

function keepFox () {
  document.querySelector('#gen-tengu').style.opacity = '0';
  document.querySelector('#gen-tanuki').style.opacity = '0';
  // document.querySelector('#gen-tengu').style.display = 'none';
  // document.querySelector('#gen-tanuki').style.display = 'none';
  // document.querySelector('#gen-tengu').remove();
  // document.querySelector('#gen-tanuki').remove();
}

// Attempt 2 of Header Click- aim is to remove all images EXCEPT FOX
  // (Haven't figured out how tho)


// Task 2: Clicking image removes image

// Select element
document.getElementById("chide").addEventListener('click', function(imageBanish) {

  // Targets elements in chide with "img" (therefore, images)
  if (imageBanish.target.tagName === "IMG") {

    // Removes targetted elements
    imageBanish.target.style.opacity = "0";
    // imageBanish.target.style.display = "none";
    // imageBanish.target.remove();
  }
})



// ////////////////////////////////////////
// Image Exercise - Click Show
// ////////////////////////////////////////

// Objective: Click heading >> image appears

// Cons to solution: blank canvas when re-clicking

// Target headings
document.querySelector('#title-click-show').addEventListener('click', imgexTitle)
document.querySelector('#cshow-amber').addEventListener('click', imgexAmber)
document.querySelector('#cshow-lumine').addEventListener('click', imgexLumine)
document.querySelector('#cshow-keqing').addEventListener('click', imgexKeqing)

let cshowAmber = document.querySelector('#selfieAmber')
let cshowLumine = document.querySelector('#selfieLumine')
let cshowKeqing = document.querySelector('#selfieKeqing')
let cshowQiqi = document.querySelector('#selfieQiqi')

function imgexTitle (){
  cshowAmber.classList.add('cshow-hidden')
  cshowLumine.classList.add('cshow-hidden')
  cshowKeqing.classList.add('cshow-hidden')
  cshowQiqi.classList.toggle('cshow-hidden')
}
function imgexAmber () {
  cshowAmber.classList.toggle('cshow-hidden')
  cshowLumine.classList.add('cshow-hidden')
  cshowKeqing.classList.add('cshow-hidden')
  cshowQiqi.classList.add('cshow-hidden')
}

function imgexLumine () {
  cshowAmber.classList.add('cshow-hidden')
  cshowLumine.classList.toggle('cshow-hidden')
  cshowKeqing.classList.add('cshow-hidden')
  cshowQiqi.classList.add('cshow-hidden')
}

function imgexKeqing () {
  cshowAmber.classList.add('cshow-hidden')
  cshowLumine.classList.add('cshow-hidden')
  cshowKeqing.classList.toggle('cshow-hidden')
  cshowQiqi.classList.add('cshow-hidden')
  document.querySelector('img[src="img/Genshin Selfie - Keqing.jpg"]').style.height = '500px';
  document.querySelector('img[src="img/Genshin Selfie - Keqing.jpg"]').style.maxWidth = 'unset';
}


// ////////////////////////////////////////
// Rotating Tic Tac Toe Project
// ////////////////////////////////////////


// Place character into cell

// SEE KYLE FOR PARTIAL SOLUTION
// const cellElements = document.querySelectorAll('[data-cell]')

// cellElements.forEach(cell => {
//   cell.addEventListener('click', markCell)
// })

// Super Brute Force Method

document.querySelector('#ttt-title').addEventListener('click', resetXo)

// #region Board clear
function resetXo () {
  document.getElementById('xo-bei1').classList.add('xo-hidden');
  document.getElementById('xo-kag1').classList.add('xo-hidden');
  document.getElementById('xo-zho1').classList.add('xo-hidden');
  document.getElementById('xo-qiqi1').classList.add('xo-hidden');
  
  document.getElementById('xo-bei2').classList.add('xo-hidden');
  document.getElementById('xo-kag2').classList.add('xo-hidden');
  document.getElementById('xo-zho2').classList.add('xo-hidden');
  document.getElementById('xo-qiqi2').classList.add('xo-hidden');
    
  document.getElementById('xo-bei3').classList.add('xo-hidden');
  document.getElementById('xo-kag3').classList.add('xo-hidden');
  document.getElementById('xo-zho3').classList.add('xo-hidden');
  document.getElementById('xo-qiqi3').classList.add('xo-hidden');
    
  document.getElementById('xo-bei4').classList.add('xo-hidden');
  document.getElementById('xo-kag4').classList.add('xo-hidden');
  document.getElementById('xo-zho4').classList.add('xo-hidden');
  document.getElementById('xo-qiqi4').classList.add('xo-hidden');
    
  document.getElementById('xo-bei5').classList.add('xo-hidden');
  document.getElementById('xo-kag5').classList.add('xo-hidden');
  document.getElementById('xo-zho5').classList.add('xo-hidden');
  document.getElementById('xo-qiqi5').classList.add('xo-hidden');
    
  document.getElementById('xo-bei6').classList.add('xo-hidden');
  document.getElementById('xo-kag6').classList.add('xo-hidden');
  document.getElementById('xo-zho6').classList.add('xo-hidden');
  document.getElementById('xo-qiqi6').classList.add('xo-hidden');
    
  document.getElementById('xo-bei7').classList.add('xo-hidden');
  document.getElementById('xo-kag7').classList.add('xo-hidden');
  document.getElementById('xo-zho7').classList.add('xo-hidden');
  document.getElementById('xo-qiqi7').classList.add('xo-hidden');
    
  document.getElementById('xo-bei8').classList.add('xo-hidden');
  document.getElementById('xo-kag8').classList.add('xo-hidden');
  document.getElementById('xo-zho8').classList.add('xo-hidden');
  document.getElementById('xo-qiqi8').classList.add('xo-hidden');
    
  document.getElementById('xo-bei9').classList.add('xo-hidden');
  document.getElementById('xo-kag9').classList.add('xo-hidden');
  document.getElementById('xo-zho9').classList.add('xo-hidden');
  document.getElementById('xo-qiqi9').classList.add('xo-hidden');
    
  document.getElementById('xo-bei10').classList.add('xo-hidden');
  document.getElementById('xo-kag10').classList.add('xo-hidden');
  document.getElementById('xo-zho10').classList.add('xo-hidden');
  document.getElementById('xo-qiqi10').classList.add('xo-hidden');
    
  document.getElementById('xo-bei11').classList.add('xo-hidden');
  document.getElementById('xo-kag11').classList.add('xo-hidden');
  document.getElementById('xo-zho11').classList.add('xo-hidden');
  document.getElementById('xo-qiqi11').classList.add('xo-hidden');
    
  document.getElementById('xo-bei12').classList.add('xo-hidden');
  document.getElementById('xo-kag12').classList.add('xo-hidden');
  document.getElementById('xo-zho12').classList.add('xo-hidden');
  document.getElementById('xo-qiqi12').classList.add('xo-hidden');
    
  document.getElementById('xo-bei13').classList.add('xo-hidden');
  document.getElementById('xo-kag13').classList.add('xo-hidden');
  document.getElementById('xo-zho13').classList.add('xo-hidden');
  document.getElementById('xo-qiqi13').classList.add('xo-hidden');
    
  document.getElementById('xo-bei14').classList.add('xo-hidden');
  document.getElementById('xo-kag14').classList.add('xo-hidden');
  document.getElementById('xo-zho14').classList.add('xo-hidden');
  document.getElementById('xo-qiqi14').classList.add('xo-hidden');
    
  document.getElementById('xo-bei15').classList.add('xo-hidden');
  document.getElementById('xo-kag15').classList.add('xo-hidden');
  document.getElementById('xo-zho15').classList.add('xo-hidden');
  document.getElementById('xo-qiqi15').classList.add('xo-hidden');
    
  document.getElementById('xo-bei16').classList.add('xo-hidden');
  document.getElementById('xo-kag16').classList.add('xo-hidden');
  document.getElementById('xo-zho16').classList.add('xo-hidden');
  document.getElementById('xo-qiqi16').classList.add('xo-hidden');
}
// #endregion Board clear

const beidou = document.getElementById('radio-tttchar1')
const kage = document.getElementById('radio-tttchar2')
const zhong = document.getElementById('radio-tttchar3')
const qiqi = document.getElementById('radio-tttchar4')

// #region Mark Cell
document.querySelector('#xo1').addEventListener('click', markCell1)
function markCell1 () {
  if (beidou.checked) {
    document.getElementById('xo-bei1').classList.toggle('xo-hidden');
    document.getElementById('xo-kag1').classList.add('xo-hidden');
    document.getElementById('xo-zho1').classList.add('xo-hidden');
    document.getElementById('xo-qiqi1').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei1').classList.add('xo-hidden');
    document.getElementById('xo-kag1').classList.toggle('xo-hidden');
    document.getElementById('xo-zho1').classList.add('xo-hidden');
    document.getElementById('xo-qiqi1').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei1').classList.add('xo-hidden');
    document.getElementById('xo-kag1').classList.add('xo-hidden');
    document.getElementById('xo-zho1').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi1').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei1').classList.add('xo-hidden');
    document.getElementById('xo-kag1').classList.add('xo-hidden');
    document.getElementById('xo-zho1').classList.add('xo-hidden');
    document.getElementById('xo-qiqi1').classList.toggle('xo-hidden');
}}

document.querySelector('#xo2').addEventListener('click', markCell2)
function markCell2 () {
  if (beidou.checked) {
    document.getElementById('xo-bei2').classList.toggle('xo-hidden');
    document.getElementById('xo-kag2').classList.add('xo-hidden');
    document.getElementById('xo-zho2').classList.add('xo-hidden');
    document.getElementById('xo-qiqi2').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei2').classList.add('xo-hidden');
    document.getElementById('xo-kag2').classList.toggle('xo-hidden');
    document.getElementById('xo-zho2').classList.add('xo-hidden');
    document.getElementById('xo-qiqi2').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei2').classList.add('xo-hidden');
    document.getElementById('xo-kag2').classList.add('xo-hidden');
    document.getElementById('xo-zho2').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi2').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei2').classList.add('xo-hidden');
    document.getElementById('xo-kag2').classList.add('xo-hidden');
    document.getElementById('xo-zho2').classList.add('xo-hidden');
    document.getElementById('xo-qiqi2').classList.toggle('xo-hidden');
}}

document.querySelector('#xo3').addEventListener('click', markCell3)
function markCell3 () {
  if (beidou.checked) {
    document.getElementById('xo-bei3').classList.toggle('xo-hidden');
    document.getElementById('xo-kag3').classList.add('xo-hidden');
    document.getElementById('xo-zho3').classList.add('xo-hidden');
    document.getElementById('xo-qiqi3').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei3').classList.add('xo-hidden');
    document.getElementById('xo-kag3').classList.toggle('xo-hidden');
    document.getElementById('xo-zho3').classList.add('xo-hidden');
    document.getElementById('xo-qiqi3').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei3').classList.add('xo-hidden');
    document.getElementById('xo-kag3').classList.add('xo-hidden');
    document.getElementById('xo-zho3').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi3').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei3').classList.add('xo-hidden');
    document.getElementById('xo-kag3').classList.add('xo-hidden');
    document.getElementById('xo-zho3').classList.add('xo-hidden');
    document.getElementById('xo-qiqi3').classList.toggle('xo-hidden');
}}

document.querySelector('#xo4').addEventListener('click', markCell4)
function markCell4 () {
  if (beidou.checked) {
    document.getElementById('xo-bei4').classList.toggle('xo-hidden');
    document.getElementById('xo-kag4').classList.add('xo-hidden');
    document.getElementById('xo-zho4').classList.add('xo-hidden');
    document.getElementById('xo-qiqi4').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei4').classList.add('xo-hidden');
    document.getElementById('xo-kag4').classList.toggle('xo-hidden');
    document.getElementById('xo-zho4').classList.add('xo-hidden');
    document.getElementById('xo-qiqi4').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei4').classList.add('xo-hidden');
    document.getElementById('xo-kag4').classList.add('xo-hidden');
    document.getElementById('xo-zho4').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi4').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei4').classList.add('xo-hidden');
    document.getElementById('xo-kag4').classList.add('xo-hidden');
    document.getElementById('xo-zho4').classList.add('xo-hidden');
    document.getElementById('xo-qiqi4').classList.toggle('xo-hidden');
}}

document.querySelector('#xo5').addEventListener('click', markCell5)
function markCell5 () {
  if (beidou.checked) {
    document.getElementById('xo-bei5').classList.toggle('xo-hidden');
    document.getElementById('xo-kag5').classList.add('xo-hidden');
    document.getElementById('xo-zho5').classList.add('xo-hidden');
    document.getElementById('xo-qiqi5').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei5').classList.add('xo-hidden');
    document.getElementById('xo-kag5').classList.toggle('xo-hidden');
    document.getElementById('xo-zho5').classList.add('xo-hidden');
    document.getElementById('xo-qiqi5').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei5').classList.add('xo-hidden');
    document.getElementById('xo-kag5').classList.add('xo-hidden');
    document.getElementById('xo-zho5').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi5').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei5').classList.add('xo-hidden');
    document.getElementById('xo-kag5').classList.add('xo-hidden');
    document.getElementById('xo-zho5').classList.add('xo-hidden');
    document.getElementById('xo-qiqi5').classList.toggle('xo-hidden');
}}

document.querySelector('#xo6').addEventListener('click', markCell6)
function markCell6 () {
  if (beidou.checked) {
    document.getElementById('xo-bei6').classList.toggle('xo-hidden');
    document.getElementById('xo-kag6').classList.add('xo-hidden');
    document.getElementById('xo-zho6').classList.add('xo-hidden');
    document.getElementById('xo-qiqi6').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei6').classList.add('xo-hidden');
    document.getElementById('xo-kag6').classList.toggle('xo-hidden');
    document.getElementById('xo-zho6').classList.add('xo-hidden');
    document.getElementById('xo-qiqi6').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei6').classList.add('xo-hidden');
    document.getElementById('xo-kag6').classList.add('xo-hidden');
    document.getElementById('xo-zho6').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi6').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei6').classList.add('xo-hidden');
    document.getElementById('xo-kag6').classList.add('xo-hidden');
    document.getElementById('xo-zho6').classList.add('xo-hidden');
    document.getElementById('xo-qiqi6').classList.toggle('xo-hidden');
}}

document.querySelector('#xo7').addEventListener('click', markCell7)
function markCell7 () {
  if (beidou.checked) {
    document.getElementById('xo-bei7').classList.toggle('xo-hidden');
    document.getElementById('xo-kag7').classList.add('xo-hidden');
    document.getElementById('xo-zho7').classList.add('xo-hidden');
    document.getElementById('xo-qiqi7').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei7').classList.add('xo-hidden');
    document.getElementById('xo-kag7').classList.toggle('xo-hidden');
    document.getElementById('xo-zho7').classList.add('xo-hidden');
    document.getElementById('xo-qiqi7').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei7').classList.add('xo-hidden');
    document.getElementById('xo-kag7').classList.add('xo-hidden');
    document.getElementById('xo-zho7').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi7').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei7').classList.add('xo-hidden');
    document.getElementById('xo-kag7').classList.add('xo-hidden');
    document.getElementById('xo-zho7').classList.add('xo-hidden');
    document.getElementById('xo-qiqi7').classList.toggle('xo-hidden');
}}

document.querySelector('#xo8').addEventListener('click', markCell8)
function markCell8 () {
  if (beidou.checked) {
    document.getElementById('xo-bei8').classList.toggle('xo-hidden');
    document.getElementById('xo-kag8').classList.add('xo-hidden');
    document.getElementById('xo-zho8').classList.add('xo-hidden');
    document.getElementById('xo-qiqi8').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei8').classList.add('xo-hidden');
    document.getElementById('xo-kag8').classList.toggle('xo-hidden');
    document.getElementById('xo-zho8').classList.add('xo-hidden');
    document.getElementById('xo-qiqi8').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei8').classList.add('xo-hidden');
    document.getElementById('xo-kag8').classList.add('xo-hidden');
    document.getElementById('xo-zho8').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi8').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei8').classList.add('xo-hidden');
    document.getElementById('xo-kag8').classList.add('xo-hidden');
    document.getElementById('xo-zho8').classList.add('xo-hidden');
    document.getElementById('xo-qiqi8').classList.toggle('xo-hidden');
}}

document.querySelector('#xo9').addEventListener('click', markCell9)
function markCell9 () {
  if (beidou.checked) {
    document.getElementById('xo-bei9').classList.toggle('xo-hidden');
    document.getElementById('xo-kag9').classList.add('xo-hidden');
    document.getElementById('xo-zho9').classList.add('xo-hidden');
    document.getElementById('xo-qiqi9').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei9').classList.add('xo-hidden');
    document.getElementById('xo-kag9').classList.toggle('xo-hidden');
    document.getElementById('xo-zho9').classList.add('xo-hidden');
    document.getElementById('xo-qiqi9').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei9').classList.add('xo-hidden');
    document.getElementById('xo-kag9').classList.add('xo-hidden');
    document.getElementById('xo-zho9').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi9').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei9').classList.add('xo-hidden');
    document.getElementById('xo-kag9').classList.add('xo-hidden');
    document.getElementById('xo-zho9').classList.add('xo-hidden');
    document.getElementById('xo-qiqi9').classList.toggle('xo-hidden');
}}

document.querySelector('#xo10').addEventListener('click', markCell10)
function markCell10 () {
  if (beidou.checked) {
    document.getElementById('xo-bei10').classList.toggle('xo-hidden');
    document.getElementById('xo-kag10').classList.add('xo-hidden');
    document.getElementById('xo-zho10').classList.add('xo-hidden');
    document.getElementById('xo-qiqi10').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei10').classList.add('xo-hidden');
    document.getElementById('xo-kag10').classList.toggle('xo-hidden');
    document.getElementById('xo-zho10').classList.add('xo-hidden');
    document.getElementById('xo-qiqi10').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei10').classList.add('xo-hidden');
    document.getElementById('xo-kag10').classList.add('xo-hidden');
    document.getElementById('xo-zho10').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi10').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei10').classList.add('xo-hidden');
    document.getElementById('xo-kag10').classList.add('xo-hidden');
    document.getElementById('xo-zho10').classList.add('xo-hidden');
    document.getElementById('xo-qiqi10').classList.toggle('xo-hidden');
}}

document.querySelector('#xo11').addEventListener('click', markCell11)
function markCell11 () {
  if (beidou.checked) {
    document.getElementById('xo-bei11').classList.toggle('xo-hidden');
    document.getElementById('xo-kag11').classList.add('xo-hidden');
    document.getElementById('xo-zho11').classList.add('xo-hidden');
    document.getElementById('xo-qiqi11').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei11').classList.add('xo-hidden');
    document.getElementById('xo-kag11').classList.toggle('xo-hidden');
    document.getElementById('xo-zho11').classList.add('xo-hidden');
    document.getElementById('xo-qiqi11').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei11').classList.add('xo-hidden');
    document.getElementById('xo-kag11').classList.add('xo-hidden');
    document.getElementById('xo-zho11').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi11').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei11').classList.add('xo-hidden');
    document.getElementById('xo-kag11').classList.add('xo-hidden');
    document.getElementById('xo-zho11').classList.add('xo-hidden');
    document.getElementById('xo-qiqi11').classList.toggle('xo-hidden');
}}

document.querySelector('#xo12').addEventListener('click', markCell12)
function markCell12 () {
  if (beidou.checked) {
    document.getElementById('xo-bei12').classList.toggle('xo-hidden');
    document.getElementById('xo-kag12').classList.add('xo-hidden');
    document.getElementById('xo-zho12').classList.add('xo-hidden');
    document.getElementById('xo-qiqi12').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei12').classList.add('xo-hidden');
    document.getElementById('xo-kag12').classList.toggle('xo-hidden');
    document.getElementById('xo-zho12').classList.add('xo-hidden');
    document.getElementById('xo-qiqi12').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei12').classList.add('xo-hidden');
    document.getElementById('xo-kag12').classList.add('xo-hidden');
    document.getElementById('xo-zho12').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi12').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei12').classList.add('xo-hidden');
    document.getElementById('xo-kag12').classList.add('xo-hidden');
    document.getElementById('xo-zho12').classList.add('xo-hidden');
    document.getElementById('xo-qiqi12').classList.toggle('xo-hidden');
}}

document.querySelector('#xo13').addEventListener('click', markCell13)
function markCell13 () {
  if (beidou.checked) {
    document.getElementById('xo-bei13').classList.toggle('xo-hidden');
    document.getElementById('xo-kag13').classList.add('xo-hidden');
    document.getElementById('xo-zho13').classList.add('xo-hidden');
    document.getElementById('xo-qiqi13').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei13').classList.add('xo-hidden');
    document.getElementById('xo-kag13').classList.toggle('xo-hidden');
    document.getElementById('xo-zho13').classList.add('xo-hidden');
    document.getElementById('xo-qiqi13').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei13').classList.add('xo-hidden');
    document.getElementById('xo-kag13').classList.add('xo-hidden');
    document.getElementById('xo-zho13').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi13').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei13').classList.add('xo-hidden');
    document.getElementById('xo-kag13').classList.add('xo-hidden');
    document.getElementById('xo-zho13').classList.add('xo-hidden');
    document.getElementById('xo-qiqi13').classList.toggle('xo-hidden');
}}

document.querySelector('#xo14').addEventListener('click', markCell14)
function markCell14 () {
  if (beidou.checked) {
    document.getElementById('xo-bei14').classList.toggle('xo-hidden');
    document.getElementById('xo-kag14').classList.add('xo-hidden');
    document.getElementById('xo-zho14').classList.add('xo-hidden');
    document.getElementById('xo-qiqi14').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei14').classList.add('xo-hidden');
    document.getElementById('xo-kag14').classList.toggle('xo-hidden');
    document.getElementById('xo-zho14').classList.add('xo-hidden');
    document.getElementById('xo-qiqi14').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei14').classList.add('xo-hidden');
    document.getElementById('xo-kag14').classList.add('xo-hidden');
    document.getElementById('xo-zho14').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi14').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei14').classList.add('xo-hidden');
    document.getElementById('xo-kag14').classList.add('xo-hidden');
    document.getElementById('xo-zho14').classList.add('xo-hidden');
    document.getElementById('xo-qiqi14').classList.toggle('xo-hidden');
}}

document.querySelector('#xo15').addEventListener('click', markCell15)
function markCell15 () {
  if (beidou.checked) {
    document.getElementById('xo-bei15').classList.toggle('xo-hidden');
    document.getElementById('xo-kag15').classList.add('xo-hidden');
    document.getElementById('xo-zho15').classList.add('xo-hidden');
    document.getElementById('xo-qiqi15').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei15').classList.add('xo-hidden');
    document.getElementById('xo-kag15').classList.toggle('xo-hidden');
    document.getElementById('xo-zho15').classList.add('xo-hidden');
    document.getElementById('xo-qiqi15').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei15').classList.add('xo-hidden');
    document.getElementById('xo-kag15').classList.add('xo-hidden');
    document.getElementById('xo-zho15').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi15').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei15').classList.add('xo-hidden');
    document.getElementById('xo-kag15').classList.add('xo-hidden');
    document.getElementById('xo-zho15').classList.add('xo-hidden');
    document.getElementById('xo-qiqi15').classList.toggle('xo-hidden');
}}

document.querySelector('#xo16').addEventListener('click', markCell16)
function markCell16 () {
  if (beidou.checked) {
    document.getElementById('xo-bei16').classList.toggle('xo-hidden');
    document.getElementById('xo-kag16').classList.add('xo-hidden');
    document.getElementById('xo-zho16').classList.add('xo-hidden');
    document.getElementById('xo-qiqi16').classList.add('xo-hidden');
  } else if (kage.checked) {
    document.getElementById('xo-bei16').classList.add('xo-hidden');
    document.getElementById('xo-kag16').classList.toggle('xo-hidden');
    document.getElementById('xo-zho16').classList.add('xo-hidden');
    document.getElementById('xo-qiqi16').classList.add('xo-hidden');
  } else if (zhong.checked) {
    document.getElementById('xo-bei16').classList.add('xo-hidden');
    document.getElementById('xo-kag16').classList.add('xo-hidden');
    document.getElementById('xo-zho16').classList.toggle('xo-hidden');
    document.getElementById('xo-qiqi16').classList.add('xo-hidden');
  }  else if (qiqi.checked) {
    document.getElementById('xo-bei16').classList.add('xo-hidden');
    document.getElementById('xo-kag16').classList.add('xo-hidden');
    document.getElementById('xo-zho16').classList.add('xo-hidden');
    document.getElementById('xo-qiqi16').classList.toggle('xo-hidden');
}}
// #endregion Mark Cell



// #region Rotate Quadrants

const cell1 = document.getElementById("xo1")
const cell2 = document.getElementById("xo2")
const cell3 = document.getElementById("xo3")
const cell4 = document.getElementById("xo4")
const cell5 = document.getElementById("xo5")
const cell6 = document.getElementById("xo6")
const cell7 = document.getElementById("xo7")
const cell8 = document.getElementById("xo8")
const cell9 = document.getElementById("xo9")
const cell10 = document.getElementById("xo10")
const cell11 = document.getElementById("xo11")
const cell12 = document.getElementById("xo12")
const cell13 = document.getElementById("xo13")
const cell14 = document.getElementById("xo14")
const cell15 = document.getElementById("xo15")
const cell16 = document.getElementById("xo16")

document.getElementById('tl-u').addEventListener('click', tlRotRight)

function tlRotRight () {
  // To that the code is right
  // document.getElementById('ttt-title').innerHTML = 'wow';
  // document.getElementById("xo1").style.background = 'green';

  // This also works
  // cell1.style.transform = 'translateX(10rem)';
  // cell2.style.transform = 'translateY(10rem)';
  // cell6.style.transform = 'translateX(-10rem)';
  // cell5.style.transform = 'translateY(-10rem)';

// if (cell1.style.transform === 'translateX(0rem)'
//  && cell2.style.transform === 'translateY(0rem)'
//  && cell6.style.transform === 'translateX(0rem)'
//  && cell5.style.transform === 'translateY(0rem)')


// Not working...
// Possible (but EVEN MORE) tedious fix: using classes to move boxes around. Add + remove classes accordingly.
if (cell1.style.transform === 'translateX(0rem)') {

    cell1.style.transform = 'translateX(10rem)';
    cell2.style.transform = 'translateY(10rem)';
    cell6.style.transform = 'translateX(-10rem)';
    cell5.style.transform = 'translateY(-10rem)';
  } else {
    cell1.style.background = 'green';
    cell2.style.background = 'green';
    cell6.style.background = 'green';
    cell5.style.background = 'green';
  }
}



// #endregion Rotate Quadrants

// Rotate Characters