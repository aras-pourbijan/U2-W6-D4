let changeColor = function colorChange() {
    document.querySelector(`body`).classList.toggle(`dark-mode`);
    document.querySelector(`.navbar`).classList.toggle(`navbar-dark`);
    document.querySelector(`.navbar`).classList.toggle(`bg-light`);
};

let addPic = function picChange() {
    return document.querySelector(`#picture`).classList.toggle(`show`);
};
