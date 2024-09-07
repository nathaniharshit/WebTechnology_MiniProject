document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    function addToCart(event) {
        const product = event.target.closest('.product');
        const productName = product.querySelector('h3').textContent;
        alert(`${productName} has been added to your cart!`);
    }
    
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    searchButton.addEventListener('click', performSearch);
    
    function performSearch() {
        const searchTerm = searchInput.value;
        alert(`Searching for: ${searchTerm}`);
        // Here you would typically send this search term to a server
    }
});
