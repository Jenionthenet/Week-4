const dishesUl = document.getElementById("menuItems")
const starterMenuBtn = document.getElementById("course1")
const entreeMenuBtn = document.getElementById("course2")
const dessertMenuBtn = document.getElementById("course3")

/*for(let i = 0; i < dishes.length; i ++) {
    const dish = dishes[i]

    const dishItem = `
    <li> 
        <div><img src="${dish.imageURL}"/></div>
        <h1>${dish.title}</h1>
        <h2>${dish.description}</h2>
        <h3>$${dish.price}.00</h3>
        
    </li>
    `    
    dishesUl.insertAdjacentHTML("beforeend", dishItem)
}*/

let starters = dishes.filter(function(dish) {
    return dish.course == "Starters"
    
})

starterMenuBtn.addEventListener("click",function() {
    dishesUl.innerHTML= ""
    starters.map(function(starter) {
        const starterContent = `
    <li> 
        <div><img src="${starter.imageURL}"/></div>
        <h1>${starter.title}</h1>
        <h2>${starter.description}</h2>
        <h3>$${starter.price}.00</h3>
        
    </li>
        `
    dishesUl.insertAdjacentHTML("beforeend", starterContent)
        
    })
})




//starterMenu.insertAdjacentHTML("beforeend", starters)

let entrees = dishes.filter(function(dish) {
    return dish.course == "Entrees"
    
})


entreeMenuBtn.addEventListener("click",function() {
    dishesUl.innerHTML= ""
    entrees.map(function(entree) {
        const entreeContent = `
    <li> 
        <div><img src="${entree.imageURL}"/></div>
        <h1>${entree.title}</h1>
        <h2>${entree.description}</h2>
        <h3>$${entree.price}.00</h3>
        
    </li>
        `
    dishesUl.insertAdjacentHTML("beforeend", entreeContent)
        
    })
})

let desserts = dishes.filter(function(dish) {
    return dish.course == "Desserts"
    
})

dessertMenuBtn.addEventListener("click",function() {
    dishesUl.innerHTML= ""
    desserts.map(function(dessert) {
        const dessertContent = `
    <li> 
        <div><img src="${dessert.imageURL}"/></div>
        <h1>${dessert.title}</h1>
        <h2>${dessert.description}</h2>
        <h3>$${dessert.price}.00</h3>
        
    </li>
        `
    dishesUl.insertAdjacentHTML("beforeend", dessertContent)
        
    })
})