var newH1 = document.createElement('h1')
newH1.textContent = 'Welcome to my JS Site'
document.body.appendChild(newH1)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with Javascript!'
document.body.appendChild(newP)

var newOl = document.createElement('ol')

var firstListItem = document.createElement('li')
firstListItem.textContent = 'I have created a list'
newOl.appendChild(firstListItem)

var secondListItem = document.createElement('li')
secondListItem.textContent = 'My list has three items'
newOl.appendChild(secondListItem)

var thirdListItem = document.createElement('li')
thirdListItem.textContent = 'This is the third item.'
newOl.appendChild(thirdListItem)

document.body.appendChild(newOl)