function sortFruits(fruits) {
    return fruits.sort();
}
function getElementInTheMiddle(list) {
    return list[Math.floor(list.length / 2)];
}
function adminLogin(user) {
    if (user === "ADMIN" || user === "DEV") {
        return true;
    } else {
        return false;
    }
}
