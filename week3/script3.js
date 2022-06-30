for (let i = 0; i < 10 ; i++){
    var newH1 = document.createElement('h1')
    newH1.textContent = 'Hello World'
    document.body.appendChild(newH1)
    newH1.style.fontFamily = "Impact, Charcoal, sans-serif"; 
}



//Create a new array 

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

var namesList = document.getElementById("names");

for (var i = 0; i < names.length; i++) {
    var newName = document.createElement('li')
    newName.textContent = names[i]
    namesList.append(newName)
}
