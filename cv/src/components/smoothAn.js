export function smoothAppearence(className) {
    console.log('script');
    let block = document.querySelector(className);
    block.style.transition = '0s';
    block.style.opacity = '0';
    setTimeout(() => {
        block.style.transition = '.3s';
        block.style.opacity = '1'
    }, 100);

}
