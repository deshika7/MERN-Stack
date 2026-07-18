function calculateAge() {

    let birthYear = document.getElementById("birthYear").value;

    if (birthYear == "") {
        document.getElementById("result").innerHTML =
        "Please enter a birth year";
        return;
    }

    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;

    document.getElementById("result").innerHTML =
    "Your Age is: " + age;
}