const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const dropListBtnFirst = document.querySelector('.drop-list-btn-1');
const firstList = document.querySelector('.first-list');
const dropListBtnSecond = document.querySelector('.drop-list-btn-2');
const secondList = document.querySelector('.second-list');


navToggle.addEventListener('click', () =>{
    nav.classList.toggle('nav--visible');
    navToggle.classList.toggle('nav-toggle-active');
    firstList.classList.remove('first-list--visible');
    secondList.classList.remove('second-list--visible');
    dropListBtnFirst.classList.remove('drop-list-btn-active');
    dropListBtnSecond.classList.remove('drop-list-btn-active');
});


dropListBtnFirst.addEventListener('click', () =>{
    firstList.classList.toggle('first-list--visible');
    dropListBtnFirst.classList.toggle('drop-list-btn-active');
});

dropListBtnSecond.addEventListener('click', () =>{
    secondList.classList.toggle('second-list--visible');
    dropListBtnSecond.classList.toggle('drop-list-btn-active');
});
    
    




