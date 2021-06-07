/* Sets up variables named 'aInput' 'bInput' 'hInput' and 'area' and assigns the number 0 to each of them */
let aInput = 0
let bInput = 0
let hInput = 0
let area = 0
/* Establishes a command that waits for a click on the 'area-calculate' button, where it then triggers the 'calculate' function. */
document.getElementById('area-calculate').addEventListener('click', calculate)
/* The function will assign whatever value/number was entered into the input boxes to the variables and translate them into integers to work with once it is activated. The assigned values of those variables will be run through the area of a trapezoid formula, with the result getting assigned to the 'area' variable. This will disable the input boxes, making it impossible to change anything at all in them, and this will display the final result in a new box with the id 'result-section', along with all the calculation and numbers used. Lastly, the code will substitute the previous calculate button with a new one with the id 'recalculate', allowing users to do another calculation.*/
function calculate () {
  aInput = document.getElementById('a-input').value
  aInput = parseInt(aInput)
  bInput = document.getElementById('b-input').value
  bInput = parseInt(bInput)
  hInput = document.getElementById('h-input').value
  hInput = parseInt(hInput)
  area = (aInput + bInput) / 2 * hInput
  document.getElementById('a-input').disabled = true
  document.getElementById('b-input').disabled = true
  document.getElementById('h-input').disabled = true
  document.getElementById('area-calculate').style.display = 'none'
  document.getElementById('retry').style.display = 'block'
  document.getElementById('result-box').style.display = 'block'
  document.getElementById('a-result').innerHTML = aInput
  document.getElementById('b-result').innerHTML = bInput
  document.getElementById('h-result').innerHTML = hInput
  document.getElementById('area-result').innerHTML = area
}
/* Establishes a command that checks for a click from the 'recalculate' button and then initiates the 'newCalculation' function. */
document.getElementById('retry').addEventListener('click', newCalculation)
/* Once the function is activated, it will clear any numbers which were previously selected into the region known and re-enable them so the user can enter new numbers. The 'recalculate' button will vanish, and the 'calculate' button will reappear. Therefore, until the user clicks the 'calculate' option again to display the result, the box that displays the result will be hidden. */
function newCalculation () {
  onclick = document.getElementById('a-input').value = ''
  onclick = document.getElementById('b-input').value = ''
  onclick = document.getElementById('h-input').value = ''
  document.getElementById('area-calculate').style.display = 'block'
  document.getElementById('retry').style.display = 'none'
  document.getElementById('result-box').style.display = 'none'
  document.getElementById('a-input').disabled = false
  document.getElementById('b-input').disabled = false
  document.getElementById('h-input').disabled = false
}
