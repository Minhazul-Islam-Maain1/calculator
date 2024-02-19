function calculateTax() {
    const numberInput = document.getElementById("number");
    const number = parseFloat(numberInput.value);

    // Correct tax rate and formatted output
    const taxRate = 0.13;
    const formattedNumber = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const taxAmount = number * taxRate;
    const totalWithTax = number + taxAmount;
    const formattedTotal = totalWithTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `If you add 13% tax to ${formattedNumber}, it would be ${formattedTotal}.`;
}
