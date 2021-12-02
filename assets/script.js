// First, tell us your name
let yourName = "Jorge Gonzalez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" (all)
//gb "+" btn
let plusButton = document.querySelector('.add-gb')
document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

  //chocolate "+" btn
  let plusButtonCc = document.querySelector('.add-cc')
  document.getElementById('add-cc').addEventListener('click', function() {
      cc += 1;
      console.log(cc)
      document.getElementById('qty-cc').textContent = cc;
      document.getElementById('qty-total').textContent = gb + cc + sugar 
    })

//sugar "=" btn
let plusButtonSugar = document.querySelector('.add-sugar')
  document.getElementById('add-sugar').addEventListener('click', function() {
      sugar += 1;
      document.getElementById('qty-sugar').textContent = sugar;
      document.getElementById('qty-total').textContent = gb + cc + sugar 
    })

//Event Listeners for "-"
//gb "-" btn
let minusButton = document.querySelector('.minus-gb')
document.getElementById('minus-gb').addEventListener('click', function() {
   if ( gb > 0) {
    gb -= 1;
    document.getElementById('qty-total').textContent = gb + cc + sugar 
   }
    document.getElementById('qty-gb').textContent = gb;
})

//chocolate "-" btn
let minusButtonCc = document.querySelector('.minus-cc')
document.getElementById('minus-cc').addEventListener('click', function() {
    if ( cc > 0) {
    cc -= 1;
    document.getElementById('qty-total').textContent = gb + cc + sugar 
}
    document.getElementById('qty-cc').textContent = cc;
})

//sugar "-" btn
let minusButtonSugar = document.querySelector('.minus-sugar')
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
    sugar -= 1;
    document.getElementById('qty-total').textContent = gb + cc + sugar 
    }
    document.getElementById('qty-sugar').textContent = sugar;
})