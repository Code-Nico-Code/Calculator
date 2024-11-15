const display = document.getElementById("display");

// Append text to the display at the cursor position
function appendToDisplay(input) {
    if (display.value === "Get a life...😒😒") {
        display.value = "";  // Clear the error message
    }

    const cursorPos = display.selectionStart;  // Get current cursor position
    const currentValue = display.value;
    const newValue = currentValue.slice(0, cursorPos) + input + currentValue.slice(cursorPos);
    
    if (newValue.length < 15) {  // Keep max length limit
        display.value = newValue;
        setCursorPosition(cursorPos + input.length);  // Move cursor after the new input
    }
}

// Set cursor position
function setCursorPosition(position) {
    display.setSelectionRange(position, position);  // Move cursor to the specified position
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Get a life...😒😒";
    }
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character (backspace)
function backspace() {
    const cursorPos = display.selectionStart;
    if (cursorPos > 0) {
        const currentValue = display.value;
        const newValue = currentValue.slice(0, cursorPos - 1) + currentValue.slice(cursorPos);
        display.value = newValue;
        setCursorPosition(cursorPos - 1);  // Adjust cursor position
    }
}

// Keyboard events listener
document.addEventListener("keydown", function(e) {
    e.preventDefault();
    
    // Check if numeric keys are pressed
    if (e.key >= '0' && e.key <= '9') {
        appendToDisplay(e.key);
    }

    // Check if operator keys are pressed
    if (['+', '-', '*', '/'].includes(e.key)) {
        appendToDisplay(e.key);
    }

    // Enter key for calculating the result
    if (e.key === 'Enter') {
        calculate();
    }

    // Backspace to delete last character
    if (e.key === 'Backspace') {
        backspace();
    }

    // Clear display on 'Escape' key
    if (e.key === 'Escape') {
        clearDisplay();
    }

    // Handle cursor movement with left and right arrow keys
    if (e.key === 'ArrowLeft') {
        setCursorPosition(display.selectionStart - 1);  // Move cursor to the left
    }

    if (e.key === 'ArrowRight') {
        setCursorPosition(display.selectionStart + 1);  // Move cursor to the right
    }
    if(e.key==='('){
        appendToDisplay(e.key);
    }
    if(e.key===')'){
        appendToDisplay(e.key);
    }
});
