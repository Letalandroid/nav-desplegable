const menu = document.getElementById("clickAqui");
const items = document.getElementsByTagName("ul")[0];

const desplegarMenu = () => {

    if (!items.classList.contains("active")) {

        items.className = "active";

    } else if (items.classList.contains("active")) {

        items.removeAttribute("class");

    }

}

menu.addEventListener("click", desplegarMenu);