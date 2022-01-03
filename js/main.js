// function toggleDark() {
//     var body = document.body;
//     body.classList.toggle("dark-mode");
// }

$(".dark-switch").on("click", () => {
    $("body").toggleClass("dark-mode");
});