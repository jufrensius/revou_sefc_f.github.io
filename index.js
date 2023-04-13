// links
function triangleLink() {
    // links
    const triangleLink = document.getElementById('triangleLink');
    const parallelogramLink = document.getElementById('parallelogramLink');
    
    triangleLink.classList.add('active');
    parallelogramLink.classList.remove('active');

    // sections
    const triangleSection = document.getElementById('triangleSection');
    const parallelogramSection = document.getElementById('parallelogramSection');

    triangleSection.classList.remove('hide');
    parallelogramSection.classList.add('hide');
}

function parallelogramLink() {
    // links
    const triangleLink = document.getElementById('triangleLink');
    const parallelogramLink = document.getElementById('parallelogramLink');
    
    parallelogramLink.classList.add('active');
    triangleLink.classList.remove('active');

    // sections
    const triangleSection = document.getElementById('triangleSection');
    const parallelogramSection = document.getElementById('parallelogramSection');

    triangleSection.classList.add('hide');
    parallelogramSection.classList.remove('hide');
}

// clear input fields and the result
function reset(formId, resultId) {
    // get ids
    const form = document.getElementById(formId)
    const parent = document.getElementById(resultId);
    
    // reset
    form.reset();
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// triangle formula start
function triangleArea() {
    try {
        // get values
        var base = parseFloat(document.getElementById('base').value);
        var height = parseFloat(document.getElementById('height').value);

        // check for invalid input
        if (isNaN(base) || isNaN(height)) {
            throw new Error('This field is required!')
        }

        // count
        area = 1/2 * base * height;

        // print the result
        var result = `A = 1/2 x h x b <br>
                    A = 1/2 x ${base} x ${height} <br>
                    A = ${area}`;

        const parent = document.getElementById('s1result1');
        const child = document.createElement('p');
        child.innerHTML = result;
        parent.appendChild(child);
    } catch (error) {
        alert(error.message);
    }
}

function trianglePerimeter() {
    try {
        // get the values
        var side1  = parseFloat(document.getElementById('side1').value);
        var side2  = parseFloat(document.getElementById('side2').value);
        var side3  = parseFloat(document.getElementById('side3').value);

        // check for invalid input
        if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
            throw new Error("This field is required!");
        }

        // count
        perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);

        // print the result
        var result = `P = a + b + c <br>
                    P = ${side1} + ${side2} + ${side3} <br>
                    P = ${perimeter}`;

        const parent = document.getElementById('s1result2');
        const child = document.createElement('p');
        child.innerHTML = result;
        parent.appendChild(child);
    } catch (error) {
        alert(error.message);
    }
}
// triangle formula end

// parallelogram formula start
function parallelogramArea() {
    try {
        // get the values
        var s2n1 = parseFloat(document.getElementById('s2n1').value);
        var s2n2 = parseFloat(document.getElementById('s2n2').value);

        // check for invalid input
        if (isNaN(s2n1) || isNaN(s2n2)) {
            throw new Error("This field is required!");
        }
        
        // count
        area = s2n1 * s2n2;

        // print the result
        var result = ` A = b x h <br>
                        A = ${s2n1} x ${s2n2} <br>
                        A = ${area}`;

        const parent = document.getElementById('s2result1');
        const child = document.createElement('p');
        child.innerHTML = result;
        parent.appendChild(child);
    } catch (error) {
        alert(error.message);
    }
}

function parallelogramPerimeter() {
    try {
        // get the values
        var s2n3 = document.getElementById('s2n3').value;
        var s2n4 = document.getElementById('s2n4').value;

        // check for invalid input
        if (isNaN(s2n3) || isNaN(s2n4)) {
            throw new Error("This field is required!");
        }

        // count
        perimeter = 2 * (parseInt(s2n3) + parseInt(s2n4));

        // print the result
        var result = `P = 2 x (a + b) <br>
                        P = 2 x (${s2n3} + ${s2n4}) <br>
                        P = ${perimeter}`;

        const parent = document.getElementById('s2result2');
        const child = document.createElement('p');
        child.innerHTML = result;
        parent.appendChild(child);
    } catch (error) {
        alert(error.message);
    }
}
// parallelogram formula end

