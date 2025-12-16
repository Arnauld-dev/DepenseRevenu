

const btn=document.getElementById("button")
   
const list1=document.createElement("ul")
list1.classList.add("list1")

const list2=document.createElement("ul")
list2.classList.add("list2")
let totalRevenus=0

let totalDepense=0


btn.addEventListener("click",(e)=>{
   e.preventDefault()
   const revenus=document.getElementById("input_income").value
   const depense=document.getElementById("input_expense").value
   const produit=document.getElementById("input_produit").value

   if(produit==""|| produit==typeof(!String)){
      const erreurProduit=document.querySelector('.erreurProduit')
      
      
   }

   //revenus
   if(revenus!==""&&typeof(Number)){
      const montant=parseFloat(revenus)
      totalRevenus+=montant
      const list=document.createElement("li")
      list.classList.add("list")
      list.textContent=`${produit}:${montant}`
      list.setAttribute("style","font-size:20px")

      const del=document.createElement("button")
      del.classList.add("delete")
      del.textContent="delete"
      list.appendChild(del)
      
      list1.appendChild(list)
     document.querySelector(".income_list").appendChild(list1)
     
     del.addEventListener("click",()=>{
         
         totalRevenus-=montant
     
         totalrevenus.textContent=`Revenus:${totalRevenus}`
         list.remove()

      })
   }

   //depense 
   if(depense!==""&&depense!==typeof(Number)){
      const montant=parseFloat(depense)
      totalDepense+=montant
      const li=document.createElement("li")
      li.textContent=`${produit}:-${montant}`
      li.classList.add("list")
      li.setAttribute("style","font-size:20px")
      const del=document.createElement("button")
      del.classList.add("delete")
      del.textContent="delete"
      
      li.appendChild(del)
      list2.appendChild(li)

      document.querySelector(".expenses_list").appendChild(list2)
        del.addEventListener("click",()=>{
         li.remove()
            totalDepense-=montant
            totaldepense.textContent=`Depenses:${totalDepense}`
           
      
      })
}
 
const totalrevenus=document.querySelector(".totalRevenus")
totalrevenus.textContent=`Revenus:${totalRevenus}`
const totaldepense=document.querySelector(".totalDepenses")
     totaldepense.textContent=`Depenses:${totalDepense}`


document.getElementById("input_income").value=""
document.getElementById("input_expense").value=""
document.getElementById("input_produit").value=""
})
    
   
    
    




