document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('page-overlay');
    setTimeout(function() {
        overlay.style.display = 'none';
    }, 2000); // Correspond à la durée de l'animation CSS
});

window.addEventListener('beforeunload', function(event) {
    var overlay = document.getElementById('page-overlay');
    overlay.style.animation = 'fadeIn 2s ease-out forwards';
});