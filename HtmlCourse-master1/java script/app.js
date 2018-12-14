
// console.log('it is working')
document.write('hi u r in javaScipt')
var title= document.querySelector('#main')
title.innerHTML='new Text'
var button=document.querySelector('#button')


// button.addEventListener('click', console.log('clicked') ) not work console fn
function click()
{
    console.log('clicked')
}
// button.addEventListener('click',click)
document
.querySelector('#button')
.addEventListener('click',function(){
    console.log('clicked')
})/*short method 3 steps in 1*/
