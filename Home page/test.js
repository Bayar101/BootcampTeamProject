//////////////////////////////////////////////// move item on 2 directions on scroll
// var count = 0
// var count1 = 0
// var c = 0;
// window.onscroll = () => {
//     if(this.oldScroll > this.scrollY){
//         count++
//         document.getElementById('aaa').style.translate = count*5 + "px";
//         // c = count;
//         if(count == 1000){
//             count = 0;
//         }
//         console.log('deesheee amraa bitgii dugar')
        
//     }else{
//         // document.getElementById('aaa').style.translate = c + "px";
//         count1++
//         document.getElementById('aaa').style.translate = (count)*10 - count1*10 + "px";
//         console.log(count);
//         if(count1 == 1000){
//             count1 = count;
//         }
//     }
//     this.oldScroll = this.scrollY;
// }

document.getElementById('darah').addEventListener('click', ()=>{
    document.getElementById('lll').classList.add('flyIn');
});



/////////////////////////////////////////////////////// drag to one direction////////////////////////////////////////////////////////////////
// var count = 0;

// document.getElementById('test').ondrag = () =>{
//     count++;
//     console.log(count)
//     document.getElementById('test').scrollTo(100, 0);
//     document.getElementById('test') = bas
//     console.log(this.scrollX)
    
// };


///////////////////////////////////////////////////////// drag to both directions FROM YT /////////////////////////////////

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e)=>{
    isDown = true; 
    slider.classList.add("active");
    console.log(e.pageX);
    startX = e.pageX - slider.offsetLeft; //element iin gadnah zaig hasaj ugluu
    scrollLeft = slider.scrollLeft;
    // console.log(startX);
});

slider.addEventListener('mouseleave', ()=>{
    isDown = false; 
    slider.classList.remove("active");

});

slider.addEventListener('mouseup', ()=>{
    isDown = false; 
    slider.classList.remove("active");

});

slider.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault(); // stops selecting texts and elements inside and any other weird actions
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = (scrollLeft - walk) * 1.5;
});

document.getElementsByTagName('body').addEventListener('load', anime())

anime({
    targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
  });

