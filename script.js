window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2500);
};

document.getElementById("startBtn").addEventListener("click", function(){

document.querySelector(".hero").style.display="none";

document.getElementById("letterSection").classList.remove("hidden");

});
