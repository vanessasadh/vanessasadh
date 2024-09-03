
    const urlParams = new URLSearchParams(window.location.search);
    const amount = parseFloat(urlParams.get('amount'));
    const interest = parseFloat(urlParams.get('interest')) / 100;
    const years = parseInt(urlParams.get('years'));
    const totalInterest = amount * (1 + (interest * years));
    const monthlyPayment = totalInterest / years;

    document.getElementById('loan-amount').textContent = amount.toFixed(2);

    document.getElementById('loan-interest').textContent = (interest * 100).toFixed(2);

    document.getElementById('loan-years').textContent = years;

    document.getElementById('total-payment').textContent = totalInterest.toFixed(2);

    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
