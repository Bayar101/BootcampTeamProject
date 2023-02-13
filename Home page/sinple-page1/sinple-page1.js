
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
document.getElementById('zoom').addEventListener("mouseover", ()=>{
    document.getElementById('zoom1').classList.add('show');
});
document.getElementById('zoom').addEventListener("mouseleave", ()=>{
    document.getElementById('zoom1').classList.remove('show');
});