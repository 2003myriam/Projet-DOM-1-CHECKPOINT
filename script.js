let quantité=document.getElementsByClassName("quantity")
console.log(quantité[0].innerText)
let btnplus=document.getElementsByClassName("fa-plus-circle")
let btnmoins=document.getElementsByClassName("fa-minus-circle")
/* _____step 2_________ */
let btnsupprimer=document.getElementsByClassName("fa-trash-alt")
let produit=document.getElementsByClassName("card-body")

/* ____step 3________ */
let  btncœur=document.getElementsByClassName("fa-heart")


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
/* __step 2_____ */
function delet() {
  produit[i].remove()
}
btnsupprimer[i].addEventListener("click",function(){
  delet()
})
/* ____step 3________ */
function like() {
  btncœur[i].style.color="red";
}
btncœur[i].addEventListener("click",function(){
  like()
})
}






 
 