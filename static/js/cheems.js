document.addEventListener('DOMContentLoaded', ()=> {

    const randomNumber= Math.floor(Math.random() * 14  ) + 1 ;
    //TODO eliminar antes de publicar el juego
    console.debug('Número aleatorio :', randomNumber);
    const imagenes = document.querySelectorAll('.cheems-card img');

    imagenes.forEach((img, index)=>{
        const id=index+1;
        img.dataset.id = id;

        img.addEventListener('click', ()=>{
            if(id==randomNumber){
                img.src=window.IMG_BAD

                    imagenes.forEach((img) =>{
                        if (img.dataset.id != randomNumber){
                            img.src=window.IMG_OK;
                        }
                    })
                //alert('perdiste, intenta de nuevo');
            } else {
                img.src=window.IMG_OK;
                //alert("te salvaste");
            }
        })
    });
});
