function alternarSubmenu(item, mostrar) {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
        submenu.style.display = mostrar ? "block" : "none";
    }
}

// selecionar todos os cabecalho__lista-item

document.querySelectorAll(".cabecalho__lista-item").forEach(item => {

    // adicionar um ouvinte de evento mouseover
    item.addEventListener("mouseover", () => alternarSubmenu(item, true));

    // adicionar um ouvinte de evento mouseout
    item.addEventListener("mouseout", () => alternarSubmenu(item, false));

    // adiocnar um ouvinte de evento de onclick
    item.addEventListener("click", () => {

       const submenu = item.querySelector('.submenu');
       
       const isDisplayed = submenu.style.display === "block";

       alternarSubmenu(item, !isDisplayed) 

    })

    

});

