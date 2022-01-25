// 1: Get the node with the main title

console.log(document.querySelector("h1"))

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

console.log(document.querySelector("h1").innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

console.log(document.getElementsByClassName("fruit-item"))

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

document.querySelectorAll(".veggie-item").forEach(element=>console.log(element.innerText))

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

console.log(document.querySelector(".list-veggies h2").innerText)

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

console.log(document.querySelector(".list-fruits h2").id="fruit-title")

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

document.querySelectorAll(".fruit-item")[2].classList.add("best-fruit")

document.getElementsByClassName("fruit-item")[0].classList.add("best-fruit")

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

document.querySelector(".veggies").classList.remove("veggies")

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

document.querySelectorAll(".list-veggies").forEach(element=>element.classList.add("veggie-love"))

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'
 
document.querySelectorAll(".veggie-item")[3].classList.remove("veggie-item")

// => ... <li class="veggie-love">Spinach</li>