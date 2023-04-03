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

// clear input fields and the result
function reset(formId, resultId) {
    // const inputList = document.querySelectorAll('input');
    // inputList.forEach(input => {
    //     input.value = ""
    // });
    const form = document.getElementById(formId)
    const parent = document.getElementById(resultId);
    form.reset();
    parent.removeChild(parent.firstChild);
}

// triangle formula start
function triangleArea() {
    // get values
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;

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
}

function trianglePerimeter() {
    // get the values
    var side1  = document.getElementById('side1').value;
    var side2  = document.getElementById('side2').value;
    var side3  = document.getElementById('side3').value;

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
}
// triangle formula end

// parallelogram formula start
function parallelogramArea() {
    // get the values
    var s2n1 = document.getElementById('s2n1').value;
    var s2n2 = document.getElementById('s2n2').value;

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
}

function parallelogramPerimeter() {
    // get the values
    var s2n3 = document.getElementById('s2n3').value;
    var s2n4 = document.getElementById('s2n4').value;

    // count
    area = 2 * (s2n3 + s2n4);

    // print the result
    var result = `P = 2(a + b) <br>
                    P = (${s2n3} + ${s2n4}) <br>
                    P = ${area}`;

    const parent = document.getElementById('s2result2');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}
// parallelogram formula end

