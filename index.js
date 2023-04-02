// links
function triangleLink() {
    // links
    // const triangleLink = document.getElementById('triangleLink');
    // const parallelogramLink = document.getElementById('parallelogramLink');

    // parallelogramLink.classList.remove('active');
    // triangleLink.classList.add('active');

    // sections
    const triangleSection = document.getElementById('triangleSection');
    const parallelogramSection = document.getElementById('parallelogramSection');

    triangleSection.classList.remove('hide');
    parallelogramSection.classList.add('hide');
}

function parallelogramLink() {
    // links
    // const triangleLink = document.getElementById('triangleLink');
    // const parallelogramLink = document.getElementById('parallelogramLink');

    // sections
    const triangleSection = document.getElementById('triangleSection');
    const parallelogramSection = document.getElementById('parallelogramSection');

    // triangleLink.classList.remove('active');
    // parallelogramLink.classList.add('active');

    triangleSection.classList.add('hide');
    parallelogramSection.classList.remove('hide');
}

// clear form
function reset() {
    const inputList = document.querySelectorAll('input');
    inputList.forEach(input => {
        input.value = ""
    });    
}

// triangle formula start
function triangleArea() {
    // get values
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;

    // count
    area = 1/2 * base * height;
    var result = "L = 1/2 x " + base + " x " + height + "\nL = " + area;

    // print the result
    document.getElementById('result').value = result;
}

function trianglePerimeter() {
    // get the values
    var side1  = document.getElementById('side1').value;
    var side2  = document.getElementById('side2').value;
    var side3  = document.getElementById('side3').value;

    // count
    perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);

    // print the result
    var result = `K = ${side1} + ${side2} + ${side3} = ${perimeter}`;
    document.getElementById('trianglePerimeterResult').value = result;
}
// triangle formula end

// parallelogram formula start
function parallelogramArea() {
    // get the values
    var s2n1 = document.getElementById('s2n1').value;
    var s2n2 = document.getElementById('s2n2').value;

    // count
    area = s2n1 * s2n2;
    var result = `L = ${s2n1} x ${s2n2} = ${area}`;

    // print the result
    document.getElementById('s2result1').value = result;
}

function parallelogramPerimeter() {
    // get the values
    var s2n3 = document.getElementById('s2n3').value;
    var s2n4 = document.getElementById('s2n4').value;

    // count
    area = 2 * (s2n3 + s2n4);
    var result = `K = (${s2n3} + ${s2n4}) = ${area}`;

    // print the result
    document.getElementById('s2result2').value = result;
}
// parallelogram formula end

