//document.getElementById("count-el").innerText = 5


//change the count-el on the HTML to reflect 
 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 console.log(countEl)

 let passengerCount = 0

  function increment() {
     
    passengerCount += 1
     countEl.textContent = passengerCount
  }

  function save() {
    let count = passengerCount + " - "
     saveEl.textContent += count
     countEl.textContent = 0
     passengerCount = 0
  }
  
  

