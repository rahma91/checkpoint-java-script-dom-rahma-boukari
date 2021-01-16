let favs = Array.from(document.querySelectorAll(".fa-heart"))
let btndeletes= Array.from(document.querySelectorAll(".fa-trash-alt"))
let cards = Array.from(document.querySelectorAll(".card"))
let plusbtns= Array.from(document.querySelectorAll(".fa-plus-circle"))
let minusBtns= Array.from(document.querySelectorAll(".fa-minus-circle"))
 let qtes = Array.from(document.querySelectorAll(".qte"))
 



// console.log(favs)

// btn favorate

            for (let fav of favs) {
                            fav.addEventListener("click", function () {
                                fav.style.color === 'red' ? fav.style.color = '#212529' : fav.style.color = 'red'
                            })
                        }

                        
// btn delete

// for(let i in btndeletes){


for (let i in btndeletes) {
    btndeletes[i].addEventListener("click", function () {
        cards[i].remove()
      
    })
}

//add qte
for(let i in plusbtns){



   
    plusbtns[i].addEventListener("click",function() {
        qtes[i].innerHTML=Number(qtes[i].innerHTML)+1;
        totatprice()
   })
      
}



// Minus qte
for(let i in minusBtns){

   
    minusBtns[i].addEventListener("click",function() {

    // minusBtns[i].innerHTML > 0 ? qtes[i].innerHTML=Number(qtes[i].innerHTML)-1 : null ;
    // if(qtes[i].innerHTML > 0)
    // {
    //     qtes[i].innerHTML=Number(qtes[i].innerHTML)-1;
    // }
    // qtes[i].innerHTML=Number(qtes[i].innerHTML)-1;
    // minusBtns[i].previousElementSibling.innerHTML > 0 ? minusBtns[i].previousElementSibling.innerHTML-- : null;
        
     qtes[i].innerHTML >0 ? qtes[i].innerHTML=Number(qtes[i].innerHTML)-1 : null ;
    totatprice()
        
   })
      
}
function mouseupover(plusbtns)
{
    
        plusbtns.style.color = rgb(233, 156, 226)
       
}


//totalprice
let totalprice = document.querySelector(".total-price")   


function totatprice(){

        let uniteprices= Array.from(document.querySelectorAll(".unite-price"))
        let qtes = Array.from(document.querySelectorAll(".qte"))     
        
        let s=0;
        for(let i in uniteprices)
        {
            s= Number(uniteprices[i].innerHTML) * Number(qtes[i].innerHTML) + s;
        
                       
            
        }
        console.log(s)

        totalprice.innerHTML=s
        console.log(totalprice.innerHTML)
            return totalprice.innerHTML
           
        
}