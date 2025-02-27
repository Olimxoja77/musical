// let audio = document.querySelector("audio")
// let musical = [
//     {name:'First',id:'1',scr: './1.mp3',title:'Qodir'},
//     {name:'Second',id:'2',scr: './3.mp3',title:'Qodirali'},
// ]
// let h1 =document.querySelector('h1')
// let h2 =document.querySelector('h2')
// let btn =document.querySelector('#btn')


// let index = 0
// function next(){
//     index = (index +1) % musical.length;
//     load(index)
// }
// function prev(){
//     index = (index - 1  + musical.length) % musical.length;
//     load(index)
// }
// function play (){
//     if(audio.paused){
//         audio.play()
//         btn.textContent = '⏸️';
//     }else{
//         audio.pause()
//         btn.textContent = '⏯️';
//     }
// }
// function load (i){
//     h1.textContent= musical[i].title
//     h2.textContent= musical[i].name
//     audio.scr = musical[i].scr
// }
// load(index)

let audio = document.querySelector("audio")
let musical = [
    {name:'First',id:'1',scr: './1.mp3',title:'Qodir'},
    {name:'Second',id:'2',scr: './3.mp3',title:'Qodirali'},
]
let h1 =document.querySelector('h1')
let h2 =document.querySelector('h2')
let btn =document.querySelector('#btn')


let index = 0
function next(){
    index = (index +1) % musical.length;
    load(index)
}
function prev(){
    index = (index - 1  + musical.length) % musical.length;
    load(index)
}
function play (){
    if(audio.paused){
        audio.play()
        btn.textContent = '⏸️';
    }else{
        audio.pause()
        btn.textContent = '⏯️';
    }
}
function load (i){
    h1.textContent= musical[i].title
    h2.textContent= musical[i].name
    audio.src = musical[i].scr // Fix the error here by using 'src' instead of 'scr'
}
load(index)

