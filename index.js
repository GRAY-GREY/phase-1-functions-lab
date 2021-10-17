function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet(block1, block2) {
    return Math.abs(block1-block2)*264;
}

function calculatesFarePrice(start, destination) {
    return distanceTravelledInFeet(start, destination) < 401? 0: distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2001? .02*(distanceTravelledInFeet(start, destination)-400): distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2501? 25: 'cannot travel that far';
}