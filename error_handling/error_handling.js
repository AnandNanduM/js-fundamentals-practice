document.addEventListener('DOMContentLoaded', function() {
    // Function to divide two numbers
    function divideBy(a, b) {
        // Check if b is zero
        if (b === 0) {
            // If b is zero, throw an error
            throw new Error("Cannot divide by zero");
        }
        // Otherwise, perform the division
        return a / b;
    }

    // Try-catch-finally block for error handling
    try {
        // Attempt the division
        const result = divideBy(10, 0); // Trying to divide by zero intentionally
        console.log('Result:', result); // This line won't be executed if an error occurs
    } catch (error) {
        // Handle the error
        console.error('An error occurred:', error.message);
    } finally {
        // This block of code will always be executed, regardless of whether an error occurred
        console.log('Finally block executed.');
    }

    // Display JavaScript code
    const jsCodeElement = document.getElementById('jsCode');
    jsCodeElement.textContent = `
        // Function to divide two numbers
        function divideBy(a, b) {
            // Check if b is zero
            if (b === 0) {
                // If b is zero, throw an error
                throw new Error("Cannot divide by zero");
            }
            // Otherwise, perform the division
            return a / b;
        }

        // Try-catch-finally block for error handling
        try {
            // Attempt the division
            const result = divideBy(10, 0); // Trying to divide by zero intentionally
            console.log('Result:', result); // This line won't be executed if an error occurs
        } catch (error) {
            // Handle the error
            console.error('An error occurred:', error.message);
        } finally {
            // This block of code will always be executed, regardless of whether an error occurred
            console.log('Finally block executed.');
        }
    `;
});
