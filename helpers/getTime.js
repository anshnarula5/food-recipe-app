const time = new Date().getHours()

let meal = ""

if (time >= 6 && time < 11) {
    meal = "breakfast"
}
else if (time >= 11 && time < 16) {
    meal = "lunch"
}
else if (time >= 16 && time < 18) {
    meal = "teatime"
}
else if (time >= 18 && time < 22) {
    meal = "dinner"
}
else {
    meal = "snack"
}

export default meal