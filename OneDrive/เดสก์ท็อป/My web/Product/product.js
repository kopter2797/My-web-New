document.querySelectorAll('.show-details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.product-item').querySelector('.modal');
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.close-details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Optional: Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
