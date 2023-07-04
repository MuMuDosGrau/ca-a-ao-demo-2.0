const form = document.querySelector('form');
const textoNome = document.getElementById('nome');
const textoDesc = document.getElementById('desc');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target)

    const codigo = inputs.get('codigo')
    

    if (codigo == 28) {
        textoNome.textContent = `Birigui`
        textoDesc.textContent = `Et bilu`
        
    }else{
        nome.textContent = `erro`
        desc.textContent =`erro`
    }

    return false

}