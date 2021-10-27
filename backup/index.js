const imgHolder = document.querySelector('.img-holder');
const allImages = document.querySelectorAll('img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let count = 1; 


prevBtn.addEventListener('click', ()=> {

  

    if(count === 0){return};


    imgHolder.style.transition = '.5s';
    count--;
    imgHolder.style.transform = `translateX(${count*-100}%)`



});

nextBtn.addEventListener('click', ()=> {
    

    if(count === allImages.length - 1){return};

    imgHolder.style.transition = '.5s';
    count++;
    imgHolder.style.transform = `translateX(${count*-100}%)`

})

imgHolder.addEventListener('transitionend', ()=> {
    
    if(count === 0){
        imgHolder.style.transition = 'none';
        count = allImages.length - 2;
        imgHolder.style.transform = `translateX(${count*-100}%)`
    }

    if(count === allImages.length - 1){
        imgHolder.style.transition = 'none';
        count = 1;
        imgHolder.style.transform = `translateX(${count*-100}%)`
    }


})