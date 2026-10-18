const titleElement = document.getElementById("title");
const descElement = document.querySelector(".description");
const cardElement = document.querySelector("#card");

titleElement.textContent = "updated title via java script";
descElement.textContent = "This description has been dynamically updated!";

cardElement.style.marginTop = "100px";
cardElement.classList.add("active");
