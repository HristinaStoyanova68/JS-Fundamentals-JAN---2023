function solve(x1, y1, x2, y2) {
    
    let a = x2 - x1;
    let b = y1 - y2;
    
    let distance = Math.sqrt((a * a) + (b * b));
    console.log(distance);



}

solve(2.34, 15.66, -13.55, -2.9985);