let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-conatiner');
let FormBtn = document.querySelector('#user-btn');
let loginForm = document.querySelector('.login-form-container');
let FormClose = document.querySelector('#form-close');
let Menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let loader = document.getElementById('preloader');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    Menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

Menu.addEventListener('click', () =>{
    Menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

FormBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
FormClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
        // you can put any JS code here
        alert('Your Attendance is Recorded by organization - Thankyou | A.S. Developers - Askand Singh')
    });
});
window.addEventListener('load', ()=> {
    loader.style.display = 'none';
});