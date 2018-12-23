const express = require('express');

var app = new express();

const port = 3000;

app.get('', () =>{
    console.log('this is get');
})

app.listen(port, () => {
    console.log(`findfriend listening at port ${port} `);
})