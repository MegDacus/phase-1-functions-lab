// Code your solution in this file!
function distanceFromHqInBlocks(location1) {
    return Math.abs(location1 - 42)
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end)
    if (feet < 400) {
        return 0
    }
    else if (feet <2000) {
        feet = feet - 400
        return feet * 0.02
    }
    else if (feet <2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}