function triangleArea(side1, side2, side3) {
    let halfPerimeter = (side1 + side2 + side3) / 2;
    let triangleArea = Math.sqrt(halfPerimeter * (halfPerimeter - side1) * (halfPerimeter - side2) * (halfPerimeter - side3));
    console.log(triangleArea);
}
triangleArea(3, 5.5, 4);