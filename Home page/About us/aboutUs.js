
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


//////////////////// ONCLICK BANNER SHOW///////////////////////

console.log('testing');
// ////////////////////////////////// endees ehled dooshoo yavarai/////////////////////////////
document.getElementById('dar1-1').addEventListener('click', ()=>{
    document.getElementById('dar1-1').classList.add("hide");
    document.getElementById('dar2').classList.add("show");
    document.getElementById('dar1').classList.add("hide");      
});
document.getElementById('dar2').addEventListener('click', ()=>{
    document.getElementById('dar2').classList.remove("show");
    document.getElementById('dar1').classList.remove("hide");
    document.getElementById('dar1-1').classList.remove("hide");
});


document.getElementById('darah1-1').addEventListener('click', ()=>{
    document.getElementById('darah1-1').classList.add("hide");
    document.getElementById('darah2').classList.add("show");
    document.getElementById('darah1').classList.add("hide");       
});
document.getElementById('darah2').addEventListener('click', ()=>{
    document.getElementById('darah2').classList.remove("show");
    document.getElementById('darah1').classList.remove("hide");
    document.getElementById('darah1-1').classList.remove("hide");
});


document.getElementById('daraarai1-1').addEventListener('click', ()=>{
    document.getElementById('daraarai1-1').classList.add("hide");
    document.getElementById('daraarai2').classList.add("show");
    document.getElementById('daraarai1').classList.add("hide");      
});
document.getElementById('daraarai2').addEventListener('click', ()=>{
    document.getElementById('daraarai2').classList.remove("show");
    document.getElementById('daraarai1').classList.remove("hide");
    document.getElementById('daraarai1-1').classList.remove("hide");
});


document.getElementById('daraldaa1-1').addEventListener('click', ()=>{
    document.getElementById('daraldaa1-1').classList.add("hide");
    document.getElementById('daraldaa2').classList.add("show");
    document.getElementById('daraldaa1').classList.add("hide");      
});
document.getElementById('daraldaa2').addEventListener('click', ()=>{
    document.getElementById('daraldaa2').classList.remove("show");
    document.getElementById('daraldaa1').classList.remove("hide");
    document.getElementById('daraldaa1-1').classList.remove("hide");
});