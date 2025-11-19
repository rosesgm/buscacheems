document.addEventListener('DOMContentLoaded', ()=> {

    const randomNumber= Math.floor(Math.random() * 14  ) + 1 ;
    //TODO eliminar antes de publicar el juego
    console.debug('Número aleatorio :', randomNumber);
    const imagenes = document.querySelectorAll('.cheems-card img');

    const clickCards= new Set();

    imagenes.forEach((img, index)=>{
        const id=index + 1;
        img.dataset.id = id;

        img.addEventListener('click', ()=>{
            if(!clickCards.has(id)){
             clickCards.add(id);

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
                
                if (clickCards.size === 14){
                    const modal= new bootstrap.Modal(document.getElementById('modal-winner'));
                    modal.show();
                    //alert('Ganaste, felicidades');
                }
            }}
        })
    });
});
