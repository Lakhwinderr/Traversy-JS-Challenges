function calculateTotalSalesWithTax(arr, tax) {
    const sales = arr.map(obj => obj.price * obj.quantity).reduce((sum, sale) => sum+=sale, 0);
    return sales + sales*tax/100;
}

module.exports = calculateTotalSalesWithTax;
