//Navbar
var homeA = document.createElement('a')
var homeText = document.createTextNode('Home')
homeA.appendChild(homeText)
homeA.href = 'https://example.com'
document.body.appendChild(homeA)

var aboutA = document.createElement('a')
var aboutText = document.createTextNode(' About Us ')
aboutA.appendChild(aboutText)
aboutA.href = 'https://example.com'
document.body.appendChild(aboutA)

var contactA = document.createElement('a')
var contactText = document.createTextNode(' Contact Us ')
contactA.appendChild(contactText)
contactA.href = 'https://example.com'
document.body.appendChild(contactA)


//H1 element
var newH1 = document.createElement('h1')
newH1.textContent = 'Hello. This is a basic site'
document.body.appendChild(newH1)

//Paragraph
var paragraph = document.createElement('p')
paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
document.body.appendChild(paragraph)

//Unordered List
var newUl = document.createElement('ul')

//Unordered List Items
var firstListItem = document.createElement('li')
firstListItem.textContent = 'My site has a list'
newUl.appendChild(firstListItem)

var secondListItem = document.createElement('li')
secondListItem.textContent = 'It has three items'
newUl.appendChild(secondListItem)

var thirdListItem = document.createElement('li')
thirdListItem.textContent = 'Here is the third item'
newUl.appendChild(thirdListItem)

document.body.appendChild(newUl)

//Footer
var footer = document.createElement('footer')
footer.textContent = 'This is a footer'
document.body.appendChild(footer)