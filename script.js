let quantité=document.getElementsByClassName("quantity")
console.log(quantité[0].innerText)
let btnplus=document.getElementsByClassName("fa-plus-circle")
let btnmoins=document.getElementsByClassName("fa-minus-circle")


for (let i = 0; i < quantité.length; i++) {
 let valeurQuantité=Number(quantité[i].innerText)
 console.log(valeurQuantité);
 function add() {
  valeurQuantité=valeurQuantité+1
  quantité[i].innerText=String(valeurQuantité)
 }
 btnplus[i].addEventListener("click",function(){
  add()
})
 function moins() {
  valeurQuantité=valeurQuantité-1
  quantité[i].innerText=String(valeurQuantité)
 }
 btnmoins[i].addEventListener("click",function(){
  moins()
})
}






 
 