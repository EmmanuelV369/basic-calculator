"use strict"
const input = document.querySelector('#display')
const number = document.querySelectorAll('.numbers')
const operands = document.querySelectorAll('.orange')

const btnNumbers = [...number]
const btnOperands = [...operands]

let dynamic = input.value = 0

console.log(btnNumbers);

btnNumbers.forEach((item) => {

item.addEventListener("click", () => {
JSON.stringify(item)
let dynamic = item.textContent

console.log(dynamic);
}

)

})





btnOperands.forEach((item) => {
  item.addEventListener("click", () => {
    const value = input.setAttribute('value', `${item.innerHTML}`)
    return value

  })
  });
