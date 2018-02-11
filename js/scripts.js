// scripts.js

function getTriangleArea(a, h) {

    if ( a > 0 && h > 0) {
        alert(a * h / 2);
        return(a * h / 2);
    } else {
        alert('nieprawidłowe dane');
        return('nieprawidłowe dane');
    }
}

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(0, 0);
var triangleArea = getTriangleArea(12, 0);

