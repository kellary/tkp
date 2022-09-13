document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.list-container').classList.toggle('active');
});
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnup").style.display = "block";
    } else {
        document.getElementById("btnup").style.display = "none";
    }
}
function btnUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}