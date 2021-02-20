function expanseItem(item) {
  var btn = item.querySelector("button");
  var info = item.querySelector(".item-info");
  btn.addEventListener("click", function () {
    info.classList.toggle("open");
    item.classList.toggle("open");
  });
}

function expanseItems() {
  var expertiseItems = document.querySelectorAll(".expertise-item");
  if (!expertiseItems || !expertiseItems.length) {
    return null;
  }
  expertiseItems.forEach(expanseItem);
}

function clipBoardEmail() {
  var myEmail = document.getElementById("myEmail");
  if (!myEmail) {
    return null;
  }

  var btn = myEmail.querySelector("button");
  var email = myEmail.querySelector("p").innerHTML;

  btn.addEventListener("click", function () {
    var ghost = document.createElement("input");
    ghost.setAttribute("type", "text");
    ghost.value = email;
    ghost.style.opacity = 0;
    myEmail.appendChild(ghost);

    ghost.select();
    ghost.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
    myEmail.removeChild(ghost);
    btn.classList.add("hidden");
    btn.innerHTML = "-- email copied! --";
  });
}

function ffDomLoadedScripts() {
  expanseItems();
  clipBoardEmail();
}

document.addEventListener("DOMContentLoaded", ffDomLoadedScripts);
