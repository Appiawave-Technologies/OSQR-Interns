function showAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    console.log(age);
}

showAge(2004);