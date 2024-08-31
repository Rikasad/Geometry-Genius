function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value ;
    const base = parseFloat(triangleBaseText);
    const triangleHEightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHEightInput.value ;
    const height = parseFloat(triangleHeightText);
    if (isNaN(base ) || isNaN( height)) {
        alert('Please enter valid numbers for the axes.');
        return;
    }
    const area = (0.5 * base *height);
    console.log(area);
    // return area ;
    //  display triangle Area
const triangleAreaSpan =document.getElementById('triangle-area');
triangleAreaSpan.innerText = `${area.toFixed(2)} ` ;
    
};


function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('Rectangle-width');
    const rectangleWidthText  = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    const rectangleHeightInput = document.getElementById('Rectangle-length');
    const rectangleLengthText = rectangleHeightInput.value;
    const length = parseFloat(rectangleLengthText);
    if (isNaN(length ) || isNaN( width)) {
        alert('Please enter valid numbers for the axes.');
        return;
    }
    const area = (width * length);
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText =`${area.toFixed(2)} `;




    
};

function calculateParallelogramArea() {
    // Get input values for base and height
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);

    if (isNaN(height) || isNaN(base)) {
        alert('Please enter valid numbers for the axes.');
        return;
    }
    
    
    // Calculate the area
    const area = base * height;
    
    // Display the result
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = `${area.toFixed(2)} `;
};

function calculateEllipseArea() {
    // Get input values for semi-major axis (a) and semi-minor axis (b)
    const ellipseAxisInput = document.getElementById('Ellipse-axis');
    const ellipseAxisText = ellipseAxisInput.value;
    const a = parseFloat(ellipseAxisText);
    
    const ellipseBaseInput = document.getElementById('Ellips-base');
    const ellipseBaseText = ellipseBaseInput.value;
    const b = parseFloat(ellipseBaseText);
    
    // Check if both inputs are valid numbers
    if (isNaN(a) || isNaN(b)) {
        alert('Please enter valid numbers for the axes.');
        return;
    }
    
    // Calculate the area
    const pi = 3.1416;
    const area = pi * a * b;
    
    // Display the result
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = `${area.toFixed(2)}`;
};
function calculatePentagonArea() {
    // Get input values for perimeter (p) and apothem (a)
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const p = parseFloat(pentagonPerimeterText);
    
    const pentagonApothemInput = document.getElementById('pentagon-apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const a = parseFloat(pentagonApothemText);
    
    // Check if both inputs are valid numbers
    if (isNaN(p) || isNaN(a)) {
        alert('Please enter valid numbers for the perimeter and apothem.');
        return;
    }
    
    // Calculate the area
    const area = 0.5 * p * a;
    
    // Display the result
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = `${area.toFixed(2)}`;
};
function calculateRhombusArea() {
    // Get input values for diagonals d1 and d2
    const rhombusDiagonal1Input = document.getElementById('rhombus-diagonal1');
    const rhombusDiagonal1Text = rhombusDiagonal1Input.value;
    const d1 = parseFloat(rhombusDiagonal1Text);
    
    const rhombusDiagonal2Input = document.getElementById('rhombus-diagonal2');
    const rhombusDiagonal2Text = rhombusDiagonal2Input.value;
    const d2 = parseFloat(rhombusDiagonal2Text);
    
    // Check if both inputs are valid numbers
    if (isNaN(d1) || isNaN(d2)) {
        alert('Please enter valid numbers for both diagonals.');
        return;
    }
    
    // Calculate the area
    const area = 0.5 * d1 * d2;
    
    // Display the result
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = `${area.toFixed(2)} `;
}

