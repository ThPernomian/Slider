const controles = document.querySelectorAll(".controle")
let currentItem = 0
const item = document.querySelectorAll(".item")

const maxItems = item.length

controles.forEach(control => {
    control.addEventListener("click", () =>{
        const esquerda = control.classList.contains("setaEsquerda")

        if(esquerda){
            currentItem -= 1
        }else{
            currentItem += 1
        }

        if(currentItem >= maxItems){
            currentItem = 0
        }

        if(currentItem < 0){
            currentItem = maxItems - 1
        }

        item.forEach(itens => itens.classList.remove("currentItem"))

        item[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

        item[currentItem].classList.add("currentItem")
    })
});