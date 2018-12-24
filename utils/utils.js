var today = () =>{

    var now = new Date();
    var dd = now.getDate();
    var mm = now.getMonth()+1; //January is 0!
    var yyyy = now.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    return  mm + '-' + dd + '-' + yyyy;
};

var log = (msg) =>{
    var now = new Date(); 
    console.log(`${now}: ${msg}`);
};


module.exports ={
    today,
    log
}