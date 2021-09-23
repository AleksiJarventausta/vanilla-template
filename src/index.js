import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  fetch("https://dog.ceo/api/breeds/image/random").then((result) => {
    result.json().then((data) => {
      var img = document.createElement("img");
      img.setAttribute("class", "wiki-img");
      img.setAttribute("src", data.message);
      document.getElementById("img-container").appendChild(img);
    });
  });
}
