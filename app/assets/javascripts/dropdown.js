document.addEventListener('DOMContentLoaded', function () {
    
    var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown){
        var button = dropdown.querySelector('.dropdown-button');
        button.addEventListener('click', () => {
            dropdown.classList.toggle('is-active');
        })
    })
    
});