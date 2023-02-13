
//// SOCIALS SHOW FUNCTIONS////////////////
document.getElementById('socials').addEventListener('click', ()=>{
    document.getElementById('socials').classList.add('hide');
    document.getElementById('iconsF').classList.add('show');
    document.getElementById('arrow').classList.add('show');

});
document.getElementById('arrow').addEventListener('click', ()=>{
    document.getElementById('iconsF').classList.remove('show');
    document.getElementById('arrow').classList.remove('show');
    document.getElementById('socials').classList.remove('hide');

});

//////////////////////////////// YOUTUBE DRAG/////////////////////////////////////////
const slider = document.querySelector(".brand-banner");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e)=>{
    isDown = true; 
    // console.log(e.pageX);
    slider.classList.add("grab");
    startX = e.pageX - slider.offsetLeft; //element iin gadnah zaig hasaj ugluu
    scrollLeft = slider.scrollLeft;
    // console.log(startX);
});

slider.addEventListener('mouseleave', ()=>{
    isDown = false; 
    slider.classList.remove("grab");

});

slider.addEventListener('mouseup', ()=>{
    isDown = false; 
    slider.classList.remove("active");
    slider.classList.remove('grab');
    slider.addEventListener('mousemove', (e)=>{
        if(!isDown) return;
        slider.classList.add('grab');
        e.preventDefault(); // stops selecting texts and elements inside and any other weird actions
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = (scrollLeft - walk);
        console.log('aa');
    });

});


slider.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    slider.classList.add('grab');
    e.preventDefault(); // stops selecting texts and elements inside and any other weird actions
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = (scrollLeft - walk);
});

//////////////////// ONCLICK BANNER SHOW///////////////////////
document.getElementById('brandName1').addEventListener('click', (e)=>{
    document.getElementById('intro-box1').classList.add('show1');
    document.getElementById('intro-box2').classList.remove('show1');
    document.getElementById('intro-box3').classList.remove('show1');
    document.getElementById('intro-box4').classList.remove('show1');
    document.getElementById('intro-box5').classList.remove('show1');
});
document.getElementById('brandName2').addEventListener('click', (e)=>{
    document.getElementById('intro-box1').classList.remove('show1');
    document.getElementById('intro-box2').classList.add('show1');
    document.getElementById('intro-box3').classList.remove('show1');
    document.getElementById('intro-box4').classList.remove('show1');
    document.getElementById('intro-box5').classList.remove('show1');
});
document.getElementById('brandName3').addEventListener('click', (e)=>{
    document.getElementById('intro-box1').classList.remove('show1');
    document.getElementById('intro-box2').classList.remove('show1');
    document.getElementById('intro-box3').classList.add('show1');
    document.getElementById('intro-box4').classList.remove('show1');
    document.getElementById('intro-box5').classList.remove('show1');
});
document.getElementById('brandName4').addEventListener('click', (e)=>{
    document.getElementById('intro-box1').classList.remove('show1');
    document.getElementById('intro-box2').classList.remove('show1');
    document.getElementById('intro-box3').classList.remove('show1');
    document.getElementById('intro-box4').classList.add ('show1');
    document.getElementById('intro-box5').classList.remove('show1');
});
document.getElementById('brandName5').addEventListener('click', (e)=>{
    document.getElementById('intro-box1').classList.remove('show1');
    document.getElementById('intro-box2').classList.remove('show1');
    document.getElementById('intro-box3').classList.remove('show1');
    document.getElementById('intro-box4').classList.remove ('show1');
    document.getElementById('intro-box5').classList.add('show1');
});
console.log('testing');
// ////////////////////////////////// endees ehled dooshoo yavarai/////////////////////////////
