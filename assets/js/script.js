let changeColor = function colorChange() {
    document.querySelector(`body`).classList.toggle(`dark-mode`);
    // document.querySelector(`.navbar`).classList.toggle(`navbar-dark`);
};

let addPic = function picChange() {
    return document.querySelector(`#picture`).classList.toggle(`show`);
};
