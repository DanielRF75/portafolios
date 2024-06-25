document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.barra-lateral li');
    const iframe = document.querySelector('.contenido-principal');

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Eliminar la clase 'selected' de todos los elementos
            items.forEach(i => i.classList.remove('selected'));
            // Agregar la clase 'selected' al elemento clicado
            this.classList.add('selected');
            // Cambiar el src del iframe
            iframe.src = this.getAttribute('data-src');
        });
    });
});