const slides = document.querySelectorAll('.img');
slides[0].classList.add('selected');
const imgs = document.querySelectorAll('img');
imgs[0].classList.add('selected');

function changeImg(index){
    imgs.forEach(img =>{
        img.classList.remove('selected');
    })
    imgs[index].classList.add('selected');
}

['touchstart', 'click'].forEach(userEvent =>{
    slides.forEach((slide, index) =>{
        slide.addEventListener(userEvent, () =>{
            slides.forEach(item =>{
                item.classList.remove('selected');
            })
            slides[index].classList.add('selected');
            changeImg(index);
        });
    })
})