function cone(coneRadius, coneHeight) {
    let coneVolume = Math.PI * Math.pow(coneRadius, 2) * coneHeight / 3;
    console.log(`volume = ${coneVolume.toFixed(4)}`);
    let formingTheCone = Math.sqrt(Math.pow(coneRadius, 2) + Math.pow(coneHeight, 2));
    let coneArea = Math.PI * coneRadius * (coneRadius + formingTheCone);
    console.log(`area = ${coneArea.toFixed(4)}`);
}

cone(3.3, 7.8);