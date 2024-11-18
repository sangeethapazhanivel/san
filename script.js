function showPrices() {
    const region = document.getElementById('region').value;
    const productType = document.getElementById('productType').value;
    const outputDiv = document.querySelector('.output');
    const priceList = document.getElementById('priceList');

    // Check if both selections are made
    if (!region || !productType) {
        alert('Please select both region and product type.');
        return;
    }

    // Display the output div
    outputDiv.style.display = 'block';

    // Clear previous data
    priceList.innerHTML = '';

    try {
        // Retrieve and display prices for the selected region and product type
        const products = marketData[region][productType];
        for (const product in products) {
            if (products.hasOwnProperty(product)) {
                const li = document.createElement('li');
                li.textContent = ${product.charAt(0).toUpperCase() + product.slice(1)}: ${products[product]} /per kg;
                priceList.appendChild(li);
            }
        }
    } catch (error) {
        console.error("Error fetching market data:", error);
        alert('Sorry, an error occurred while fetching the market data. Please try again later.');
    }
}