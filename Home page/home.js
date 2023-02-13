
//// SOCIALS SHOW FUNCTIONS//////////////// FOOOTER ////////////
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

// ////////////////////////////////// endees ehled dooshoo yavarai/////////////////////////////
document.getElementById('startAnimation').addEventListener('click', ()=>{
    document.querySelector('.banner-img').classList.add('show');
    document.querySelector('.brann-text').classList.add('show');
    document.querySelector('.banner-img').classList.add('flyIn')    
    document.querySelector('.brann-text').classList.add('flyIn');
    document.getElementById('startAnimation').classList.add('hide')
});

document.getElementById('brandName1').addEventListener('click', (e)=>{
    document.getElementById('banner-box1').classList.add('show1');
    document.getElementById('banner-box2').classList.remove('show1');
    document.getElementById('banner-box3').classList.remove('show1');
    document.getElementById('banner-box4').classList.remove('show1');
});
document.getElementById('brandName2').addEventListener('click', (e)=>{
    document.getElementById('banner-box1').classList.remove('show1');
    document.getElementById('banner-box2').classList.add('show1');
    document.getElementById('banner-box3').classList.remove('show1');
    document.getElementById('banner-box4').classList.remove('show1');
});         
document.getElementById('brandName3').addEventListener('click', (e)=>{
    document.getElementById('banner-box1').classList.remove('show1');
    document.getElementById('banner-box2').classList.remove('show1');
    document.getElementById('banner-box3').classList.add('show1');
    document.getElementById('banner-box4').classList.remove('show1');
});
document.getElementById('brandName4').addEventListener('click', (e)=>{
    document.getElementById('banner-box1').classList.remove('show1');
    document.getElementById('banner-box2').classList.remove('show1');
    document.getElementById('banner-box3').classList.remove('show1');
    document.getElementById('banner-box4').classList.add('show1');
});
