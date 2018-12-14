
// function getElement(el){
//     return document.querySelector(el)
// }
function $(el){
    return document.querySelector(el)
}


var button= $('#button')
var menu=$('#menu')
var close =$('#close')



function color(){
    document.body.bgColor='green'
}

function openMenu(){

    menu.className='menu'
}


function closeMenu(){
    // console.log('got there')
    menu.className=' closed'
}




function addClick( el, action){
    return el.addEventListener('click',action )
}



// button.addEventListener('click',color)
button.addEventListener('click', openMenu)
// close.addEventListener('click', closeMenu)
addClick(close,closeMenu )



// document
// .querySelector('#button')
// .addEventListener('click', 
// function(){document.body.bgColor='green'})