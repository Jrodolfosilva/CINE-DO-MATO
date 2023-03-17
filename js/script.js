



/*Variavéis Universais*/

const BodyPage = document.querySelector("body")
const Drop =  document.querySelector("#drop");
const Menu = document.querySelector("#menu")

/**************************************/


/* Funções */

function MenuMobileShow(){
    BodyPage.style.overflow='hidden'
    Menu.classList.toggle("menu-ativo")
}




/* Funções */








/*CallBacks*/


Drop.addEventListener("click",MenuMobileShow)