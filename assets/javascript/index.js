function age() {
    var birthday = document.getElementById("day").value;
    var birthMonth = document.getElementById("month").value;
    var yearOfBirth = document.getElementById("year").value;

    var date = new Date();
    var day = date.getDate();
    var month = 1 + date.getMonth();
    var year = date.getFullYear();

    var daysInTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthday > day) {
        day = day + daysInTheMonth[month - 1];
        month = month - 1;
    }

    if (birthMonth > month) {
        month = month + 12;
        year = year - 1;
    }

    var ageInDays = day - birthday;
    var ageInMonths = month - birthMonth;
    var ageInYears = year - yearOfBirth;

    document.getElementById("age").innerHTML = "Sua idade é de " + ageInYears +
    " Anos " + ageInMonths + " Meses e " + ageInDays + " Dias";
}