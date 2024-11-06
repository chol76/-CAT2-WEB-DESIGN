function calculatePay() {  
    // Get input values  
    const employeeName = document.getElementById('employeeName').value;  
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);  
    const ratePerHour = parseFloat(document.getElementById('ratePerHour').value);  
    
    // Calculate basic pay  
    const basicPay = hoursWorked * ratePerHour;  

    // Calculate tax  
    let tax = 0;  
    if (basicPay > 50000) {  
        tax = basicPay * 0.20; // 20% tax  
    } else if (basicPay >= 20000) {  
        tax = basicPay * 0.10; // 10% tax  
    } // No tax if basic pay is below 20000  

    // Calculate net pay  
    const netPay = basicPay - tax;  

    // Display the result  
    const resultDiv = document.getElementById('result');  
    resultDiv.innerHTML = `  
        <h2>Result</h2>  
        <p><strong>Employee Name:</strong> ${employeeName}</p>  
        <p><strong>Basic Pay:</strong> $${basicPay.toFixed(2)}</p>  
        <p><strong>Tax:</strong> $${tax.toFixed(2)}</p>  
        <p><strong>Net Pay:</strong> $${netPay.toFixed(2)}</p>  
    `;  
}  