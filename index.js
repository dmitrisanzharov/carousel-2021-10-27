const imgHolder=document.querySelector(".img-holder"),allImages=document.querySelectorAll("img"),prevBtn=document.querySelector(".prev"),nextBtn=document.querySelector(".next");let count=1;prevBtn.addEventListener("click",()=>{0!==count&&(imgHolder.style.transition=".5s",count--,imgHolder.style.transform=`translateX(${-100*count}%)`)}),nextBtn.addEventListener("click",()=>{count!==allImages.length-1&&(imgHolder.style.transition=".5s",count++,imgHolder.style.transform=`translateX(${-100*count}%)`)}),imgHolder.addEventListener("transitionend",()=>{0===count&&(imgHolder.style.transition="none",count=allImages.length-2,imgHolder.style.transform=`translateX(${-100*count}%)`),count===allImages.length-1&&(imgHolder.style.transition="none",count=1,imgHolder.style.transform=`translateX(${-100*count}%)`)});