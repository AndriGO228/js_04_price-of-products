function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	const ricePrice = Math.round(saltBeefPrice / 3 * 100) / 100;
	const totalRicePrice = riceRequest * ricePrice;
	const totalSaltBeefPrice = saltBeefPrice * saltBeefRequest;
	return totalRicePrice + totalSaltBeefPrice;
}

module.exports = priceOfProducts;