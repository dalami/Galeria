document.addEventListener("keyup", e =>{
   if(e.target.matches("#buscador")){

    document.querySelectorAll(".fotos").forEach(elemento =>{

        elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?elemento.classList.remove("filtro")
        :elemento.classList.add("filtro")
   } )
   }
})