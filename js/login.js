const studentBtn =
document.getElementById("studentBtn");

const facultyBtn =
document.getElementById("facultyBtn");

studentBtn.addEventListener("click", () => {

    studentBtn.classList.add("active");
    facultyBtn.classList.remove("active");

});

facultyBtn.addEventListener("click", () => {

    facultyBtn.classList.add("active");
    studentBtn.classList.remove("active");

});