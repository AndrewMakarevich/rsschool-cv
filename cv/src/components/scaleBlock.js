export function scaleBlock(className) {
    const block = document.querySelector(`.${className}`);

    if (block.style.marginTop === `-${block.clientHeight}px`) {
        block.style.marginTop = '0';
    } else {
        block.style.marginTop = `-${block.clientHeight}px`;
    }
    console.log(block.clientHeight);
}
export function startPos(className) {
    const block = document.querySelector(`.${className}`);
    window.addEventListener('resize', () => {
        block.style.marginTop = `-${block.clientHeight}px`;
    });
    block.style.marginTop = `-${block.clientHeight}px`;
}