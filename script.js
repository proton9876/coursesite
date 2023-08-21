const cross=document.getElementById('cross');
const headcontainer=document.querySelector('.header');
cross.addEventListener('click',()=>{
    console.log("clicke");
    headcontainer.style.display='none';
})

const movecard = document.querySelector('.slider-wrapper');




let scrollAmount = 300;
let rightbutton=document.getElementById('rightbutton');
let leftbutton=document.getElementById('leftbutton');


function draggg(e){
  
  movecard.scrollLeft=e.pageX;
}
movecard.addEventListener('mousemove',draggg);

rightbutton.addEventListener('click',(e)=>{
  
    movecard.scrollLeft+=scrollAmount;
    console.log('button clicked')

})

leftbutton.addEventListener('click',(e)=>{
  movecard.scrollLeft+=(-scrollAmount);
})
