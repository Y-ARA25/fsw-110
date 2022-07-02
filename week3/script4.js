for (let i = 0; i < 5 ; i++){
    var newH2 = document.createElement('h2')
    newH2.textContent = 'Style Me!'
    document.body.append(newH2)
    newH2.style.color = "cornflowerblue"
    newH2.style.fontSize = "20px"
    newH2.style.fontWeight = "lighter"
    newH2.style.fontFamily = "sans-serif"
    const list = newH2.classList;
    list.add("border");
}

//const list = newH2.classList;
//list.add("border");