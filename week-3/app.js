/* =========================================
       Assignment 1: Your First Web Server
============================================ */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});


/* ===================================================
       Assignment 2: Build Backend API for Front-End
====================================================== */
//add positive numbers
function addNum(number){
    let sumNum = 0;
    for(let i = 1; i <= number; i++){
        sumNum += i;
    }
    return sumNum;
}

function isNormalInteger(str) {
    return /^([1-9]\d*)$/.test(str);
}


app.get('/getData', (req, res) => {
    let parameter = req.query.number;

    if (!parameter) {
        res.send('<h1>Lack Parameter</h1>');
    } else if (isNormalInteger(parameter)) {
        res.send(`<h1>Result: ${addNum(Number(parameter))}</h1>`);
    } else {
        res.send('<h1>Wrong Parameter</h1>');
    }
});



/* ===================================================
       Assignment 3: Connect to Backend API by AJAX
====================================================== */
app.use(express.static('public'));


/* ===============================
       Assignment 4: HTTP Cookie
================================= */

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/myName', (req, res) => {
    
    if (req.cookies.username) {
        res.send(`<h1>${req.cookies.username}</h1>`);
    } else {
        res.sendFile(__dirname + '/public/user-form.html');
    }
});

app.get('/trackName', (req, res)=>{
    let name = req.query.name
    res.cookie('username', name);
    res.redirect('/myName');
});

app.get('/removeCookie', (req, res)=>{
    res.clearCookie('username');
    res.send('Cookie removed');
});



