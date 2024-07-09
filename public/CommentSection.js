// Función para manejar el envío del formulario de comentarios
function handleCommentSubmit(event) {
    event.preventDefault(); // Evita la recarga de la página por defecto
    var commentText = document.getElementById('commentInput').value;
    if (commentText.trim() !== '') {
        // Envía el comentario al componente React
        window.postMessage({ type: 'addComment', comment: commentText });
        document.getElementById('commentInput').value = ''; // Limpia el campo de comentario
    }
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Captura el evento de envío del formulario y llama a la función handleCommentSubmit
    document.getElementById('commentForm').addEventListener('submit', handleCommentSubmit);

    

    // Escucha los mensajes posteados desde el HTML
    window.addEventListener('message', function(event) {
        const { type, comment } = event.data;
        if (type === 'addComment' && typeof comment === 'string') {
            // Agrega el comentario recibido
            window.addComment(comment);
        }
    });
});
