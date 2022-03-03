const modal = document.querySelector('#modal');
const modalContainer = document.querySelector('.modal-container');
const modalImg = document.querySelector('.modal-img');
const works = document.querySelectorAll('.work');
const closeBtn = document.querySelector('.close-btn');

works.forEach((work) => {
    // let img = modalImg.getAttribute('src');
    // img = tempImg;
    let tempImg;
    work.addEventListener('click', () => {
        tempImg = work.firstElementChild.getAttribute('src');
        console.log(work);
        console.log(work.firstElementChild.getAttribute('src'));
        modal.classList.add('active');
        document.querySelector('.modal-img').src = tempImg;
    })
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
})

window.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === modalContainer) {
        console.log(e.target);
        modal.classList.remove('active');
    }
});