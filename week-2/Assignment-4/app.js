console.log('JavaScript loaded...');

/* ==================================
    Request 1: Click to Change Text.
============= ======================= */

const welcomeMsg  = document.querySelector('#welcome-msg');

welcomeMsg.addEventListener('click', () => {
  welcomeMsg.innerHTML = "Have a Good Time!";
});


/* ======================================
    Request 2: Click to Show/Close Menu.
========================================= */

const checkBtn = document.querySelector('.checkbtn');
const closeBtn = document.querySelector('.close-btn');
const ul = document.querySelector('ul');

checkBtn.addEventListener('click', () => {
  ul.style.display = 'inline';
  closeBtn.style.display = 'static';
});

closeBtn.addEventListener('click', () => {
  ul.style.display = 'none';
});


/* =============================================
    Request 3: Click to Show More Content Boxes.
================================================ */

const CTA = document.querySelector('.CTA');
const hiddenBox = document.querySelector('.hidden-box');

CTA.addEventListener('click', () => {
  hiddenBox.style.display = 'block';
});
