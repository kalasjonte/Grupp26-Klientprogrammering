$( document ).ready(function() {

    var pics = ["images/1.jpg", "images/2.webp", "images/3.jpg", "images/4.jpg"]

    function setBilder() {
    $('#bild1').attr('src', pics[0])
    $('#bild2').attr('src', pics[1])
    $('#bild3').attr('src', pics[2])
    $('#bild4').attr('src', pics[3]) 
    }
    setBilder()

    $('#nextImage').on('click', start)
    var index = 0;
    
    function bildspel(e){
        console.log(index)
        let width = window.innerWidth;
        if(width> 768) {
            // var img1 = $("<img></img>");
            // img1.attr('id', 'bild1')
            // img1.addClass('bildspel')
            // setBilder();
            // $("#bilder").append(img1);
        if (index > pics.length) {
            index = 0;
        }
        if( index == 0){
        $('.bildspel').fadeOut(3000 , function() {   
        $('#bild1').attr('src', pics[3])
        $('#bild2').attr('src', pics[0])
        $('#bild3').attr('src', pics[1])
        $('#bild4').attr('src', pics[2]) 
        $('.bildspel').fadeIn(3000)
        })
        index++;

        
        } 
        else if ( index == 1){
         
            $('.bildspel').fadeOut(3000 , function() {
            $('#bild1').attr('src', pics[2])
            $('#bild2').attr('src', pics[3])
            $('#bild3').attr('src', pics[0])
            $('#bild4').attr('src', pics[1]) 
            $('.bildspel').fadeIn(3000)
            })
            index++;
            
            }
            else if ( index == 2){
         
                $('.bildspel').fadeOut(3000 , function() {
                $('#bild1').attr('src', pics[1])
                $('#bild2').attr('src', pics[2])
                $('#bild3').attr('src', pics[3])
                $('#bild4').attr('src', pics[0]) 
                $('.bildspel').fadeIn(3000)
                })
                index++;
                
                }    
            else if ( index == 3){
                    $('.bildspel').fadeOut(3000 , function() {
                    $('#bild1').attr('src', pics[0])
                    $('#bild2').attr('src', pics[1])
                    $('#bild3').attr('src', pics[2])
                    $('#bild4').attr('src', pics[3]) 
                    $('.bildspel').fadeIn(3000)
                    })
                    index= 0;
                    
                    }    
                }
        else if (width < 768) {
            console.log('else if')
            if (index > pics.length) {
                index = 0;
            }
            if( index == 0){
            $('#bild4').fadeOut(3000 , function() {   
            $('#bild4').attr('src', pics[0])
            $('#bild4').fadeIn(3000)
            })
            index++;
    
            
            } 
            else if ( index == 1){
             
                $('#bild4').fadeOut(3000 , function() {
                $('#bild4').attr('src', pics[1])
                $('#bild4').fadeIn(3000)
                })
                index++;
                
                }
                else if ( index == 2){
             
                    $('#bild4').fadeOut(3000 , function() {
                    $('#bild4').attr('src', pics[2])
                    $('#bild4').fadeIn(3000)
                    })
                    index++;
                    
                    }    
                else if ( index == 3){
                        $('#bild4').fadeOut(3000 , function() {
                        $('#bild4').attr('src', pics[3])
                        $('#bild4').fadeIn(3000)
                        })
                        index= 0;
                        
                        }
        }
    }

    var interval = null;

    function start(){
       let text = $('#nextImage').text()
    if(text == 'Starta bildspel') {
        console.log('if')
        bildspel();
        interval = setInterval(bildspel, 7000)
        $('#nextImage').text('Stoppa bildspel')
    }
    else if (text == 'Stoppa bildspel'){
        console.log('else if')
        clearInterval(interval);
        $('#nextImage').text('Starta bildspel')
        
    }
    }

    $('#test').on('click', visa);

    function visa(e){
        document.getElementById('myLinks').classList.toggle('show')
    }

    
    $("#aLink").hover(test1, test2);

    function test1(){
        $("#aBild").fadeIn(2000);
    }
    function test2(){
        $("#aBild").fadeOut(1000);
    }

    $("#vLink").hover(vBild1, vbild2);

    function vBild1(){
        $("#vBild").fadeIn(2000);
    }
    function vbild2(){
        $("#vBild").fadeOut(1000);
    }

    $("#jLink").hover(jBild1, jbild2);

    function jBild1(){
        $("#jBild").fadeIn(2000);
    }
    function jbild2(){
        $("#jBild").fadeOut(1000);
    }

  
    $('.inputs').keyup(function(){
        namnValidation()
        teleValidation()
        emailValidation()
        msgValidation()

    })
    
    // $('.inputs').click(
    //     function(){
    //         $(this).val('').css({'color': 'black'})
    //     });

    function submitForm(e) {
        e.preventDefault();
        validation();
    }

    function validation() {
        let namnfield = $('#namn').val();
        let telefon = $('#tele').val();
        let email = $('#email').val();
        let msg = $('#textfield').val();
        namnValidation();
        teleValidation();
        emailValidation(),
        msgValidation();
    }

    function namnValidation() {
        let namnfield = $('#namn').val();
        var letters = /^(?![\s.]+$)[a-zA-ZäöåÄÖÅ ]+$/
        var mellanslag = /^[\s.]+$/
        if(namnfield == '') {
            $('#namnERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
        }
        else if(namnfield.length > 30 || namnfield.length < 3) {
            $('#namnERR').text('Minst 3 och högst 30 tecken!').css({ 'color': 'red'})
        } 

        else if (namnfield.match(mellanslag)) {
            $('#namnERR').text('Mellanslag är inget namn').css({ 'color': 'red'})
        }
        
        else if(!namnfield.match(letters)) {
            $('#namnERR').text('Endast bokstäver och mellanslag').css({ 'color': 'red'})
        }

        else {
            $('#namnERR').text('')
        }
        

    }

    function teleValidation() {
        let telefield = $('#tele').val();
        var letters = /^(?![\s.]+$)[a-zA-ZäöåÄÖÅ ]+$/
        var mellanslag = /^[\s.]+$/

        if(telefield == '') {
            $('#teleERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
        }

        else if(telefield.match(letters) || telefield.match(mellanslag) ) {
            $('#teleERR').text('Bara nummer här!').css({ 'color': 'red'})
        }
        
        else if(telefield.length != 10 ) {
            $('#teleERR').text('10 tecken behövs').css({ 'color': 'red'})
        } 

        else if(telefield.match(mellanslag))
        {
            $('#teleERR').text('Kontrollera formatet').css({ 'color': 'red'})
        }

        else {
            $('#teleERR').text('')
        }

        

    }

    function emailValidation(){
        let emailField = $('#email').val();
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(emailField == '') {
            $('#emailERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
        }

        else if(!emailField.match(mailFormat)) {
            $('#emailERR').text('Kontrollera email format').css({ 'color': 'red'})
        }
        else {
            $('#emailERR').text('')
        }
        
    }

    function msgValidation(){
        let msg = $('#textfield').val();
        if(msg == '') {
            $('#textERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
        }

        else {
            $('#textERR').text('')
        }
    

    }
    
    
   
})
document.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        showFullScreen();
    }
    else {
        console.log("nej");
    }
})

function showFullScreen(){
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    }
    else{
        document.exitFullscreen();
    }
}

// import fs from "fs"
// const fs = require("fs");

let obj = {
    name: $('#namn').value(),
    phone: $('#tele').value(),
    email: $('#email').val(),
    msg: $('#textfield').val()
}

const jsonString = JSON.stringify(obj);



// fs.writeFile('form')

// function storeData(){
//     fs.writeFile("form.json", JSON.stringify(obj)), function(err){
//         if (err) throw err;
//         console.log('complete');
// }

// $("#submit").addEventListener("klick", storeData);


// }
           