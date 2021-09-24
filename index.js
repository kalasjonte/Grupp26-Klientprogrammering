$( document ).ready(function() {

    var title = document.title;
    console.log(title)

    if(title == 'Första sidan' ){
        fyllIKontakt();
    }
    
    var pics = ["jonte.jpg", "images/amanda.jpg", "mv.jpg", "images/raket.webp"]

    $('#nextImage').on('click', start)
    var index = 0;
    
    function bildspel(){
        if (index > pics.length) {
            index = 0;
        }
        if( index == 0){
        $('.bildspel').fadeOut(3000 , function() {   
        $('#bild4').attr('src', pics[2]) 
        $('.bildspel').fadeIn(3000)
        })
        index++;

        
        } 
        else if ( index == 1){
         
            $('.bildspel').fadeOut(3000 , function() {
            $('#bild4').attr('src', pics[1]) 
            $('.bildspel').fadeIn(3000)
            })
            index++;
            
            }
            else if ( index == 2){
         
                $('.bildspel').fadeOut(3000 , function() {
                $('#bild4').attr('src', pics[0]) 
                $('.bildspel').fadeIn(3000)
                })
                index++;
                
                }    
            else if ( index == 3){
                    $('.bildspel').fadeOut(3000 , function() {
                    $('#bild4').attr('src', pics[3]) 
                    $('.bildspel').fadeIn(3000)
                    })
                    index= 0;
                    
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

    
    // $(".animate").hover(function(event){
    //     showPic(event)
    // })
    // // $("#vLink").hover(showPic, hidePic);
    // // $("#jLink").hover(showPic, hidePic);

    // function showPic(event){
    //     console.log(event.currentTarget.firstChild.text)
    //     if(event.currentTarget.firstChild.text == "Amanda Mathisen"){
    //         $("#aBild").fadeIn(2000);
    //         $("#vBild").fadeOut(0);
    //         $("#jBild").fadeOut(0);
    //     }  
    //     if(event.currentTarget.firstChild.text == "Vilma Ottner"){
    //         $("#vBild").fadeIn(2000);
    //         $("#aBild").fadeOut(0);
    //         $("#jBild").fadeOut(0);
    //     }
    //     if(event.currentTarget.firstChild.text == "Jonathan fucking åmål Gabrielsson"){
    //         $("#jBild").fadeIn(2000);
    //         $("#aBild").fadeOut(0);
    //         $("#vBild").fadeOut(0);
    //     }
    //     }
        

        // if(event.currentTarget == $("#vBild")){
        //     $("#aBild").fadeIn(2000);
        // }
        // if(event.currentTarget == $("#jBild")){
        //     $("#aBild").fadeIn(2000);
        // }
    //}

    // function hidePic(e){
    //     if(e.currentTarget == $("#aBild")){
    //         $("#aBild").fadeOut(1000);
    //     }
    //     if(e.currentTarget == $("#vBild")){
    //         $("#vBild").fadeOut(1000);
    //     }
    //     if(e.currentTarget == $("#jBild")){
    //         $("#jBild").fadeOut(1000);
    //     }
        
       
    // }
    
    // function vBild1(){
    //     $("#vBild").fadeIn(2000);
    // }
    // function vbild2(){
    //     $("#vBild").fadeOut(1000);
    // }

    // function jBild1(){
    //     $("#jBild").fadeIn(2000);
    // }
    // function jbild2(){
    //     $("#jBild").fadeOut(1000);
    // }

  
    $('.inputs').keyup(function(){
        namnValidation()
        teleValidation()
        emailValidation()
        msgValidation()

    })
    

    function validation() {
        namnValidation()
        teleValidation()
        emailValidation()
        msgValidation()
       if(namnValidation() && teleValidation() && emailValidation() && msgValidation()) {
        storeData()
        window.alert('Tack för ditt meddellande <3')
       } 

       else {
           window.alert('Kontrollera fälten')
       }
        
    }

    function namnValidation() {
        let namnfield = $('#namn').val();
        var letters = /^(?![\s.]+$)[a-zA-ZäöåÄÖÅ ]+$/
        var mellanslag = /^[\s.]+$/
        if(namnfield == '') {
            $('#namnERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
            return false;
        }
        else if(namnfield.length > 30 || namnfield.length < 3) {
            $('#namnERR').text('Minst 3 och högst 30 tecken!').css({ 'color': 'red'})
            return false;
        } 

        else if (namnfield.match(mellanslag)) {
            $('#namnERR').text('Mellanslag är inget namn').css({ 'color': 'red'})
            return false;
        }
        
        else if(!namnfield.match(letters)) {
            $('#namnERR').text('Endast bokstäver och mellanslag').css({ 'color': 'red'})
            return false;
        }

        else {
            $('#namnERR').text('')
            return true;
        }
        

    }

    function teleValidation() {
        let telefield = $('#tele').val();
        var letters = /^(?![\s.]+$)[a-zA-ZäöåÄÖÅ ]+$/
        var mellanslag = /^[\s.]+$/

        if(telefield == '') {
            $('#teleERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
            return false;
        }

        else if(telefield.match(letters) || telefield.match(mellanslag) ) {
            $('#teleERR').text('Bara nummer här!').css({ 'color': 'red'})
            return false;
        }
        
        else if(telefield.length != 10 ) {
            $('#teleERR').text('10 tecken behövs').css({ 'color': 'red'})
            return false;
        } 

        else if(telefield.match(mellanslag))
        {
            $('#teleERR').text('Kontrollera formatet').css({ 'color': 'red'})
            return false;
        }

        else {
            $('#teleERR').text('')
            return true;
        }

        

    }

    function emailValidation(){
        let emailField = $('#email').val();
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(emailField == '') {
            $('#emailERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
            return false;
        }

        else if(!emailField.match(mailFormat)) {
            $('#emailERR').text('Kontrollera email format').css({ 'color': 'red'})
            return false;
        }
        else {
            $('#emailERR').text('')
            return true;
        }
        
    }

    function msgValidation(){
        let msg = $('#textfield').val();
        if(msg == '') {
            $('#textERR').text('Var vänlig och fyll i fältet').css({ 'color': 'red'})
            return false;
        }

        else {
            $('#textERR').text('')
            return true;
        }
    

    }

     $("#submit").click(function(event){
         event.preventDefault();
         validation();
     })

        function storeData(){
         window.localStorage.setItem('name',$('#namn').val())
         window.localStorage.setItem('phone',$('#tele').val())
         window.localStorage.setItem('email',$('#email').val())
         window.localStorage.setItem('msg',$('#textfield').val())
        }
     

     function fyllIKontakt(){
       let namn=  window.localStorage.getItem('name')
       let tele = window.localStorage.getItem('phone')
       let email =  window.localStorage.getItem('email')
       let msg =  window.localStorage.getItem('msg')
       $('#namn').val(namn)
       $('#tele').val(tele)
       $('#email').val(email)
       $('#textfield').val(msg)
       namnValidation()
       teleValidation()
       msgValidation()
       emailValidation()
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
           