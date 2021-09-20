export function burgerMenuScript() {
    const buttonsBlock = document.querySelector('.navBar__buttonsBlock');
    const burgerIconLines = document.querySelectorAll('.navBar__burgerIcon span');
    burgerIconLines.forEach((line, i) => {
        if (i === 0) {
            line.classList.toggle('rotate');
        } else if (i === 1) {
            line.classList.toggle('invisible');
        } else {
            line.classList.toggle('reverseRotate');
        }
    });
    buttonsBlock.classList.toggle('openMobileBar');
}