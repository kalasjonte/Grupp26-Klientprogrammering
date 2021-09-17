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

    var intervallen = null;

    function start(){
    bildspel();
    setInterval(bildspel, 7000)
       let text = $('#nextImage').text()
       console.log(text)
    if(text == 'Starta bildspel') {
        
        bildspel();
        intervallen = setInterval(bildspel, 7000)
        $('#nextImage').text('Stoppa bildspel')
    }
    else if (text == 'Stoppa bildspel'){
        clearInterval(intervallen);
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

    $('#submit').on('click', submitForm);
    $('.inputs').click(
        function(){
            $(this).val('').css({'color': 'black'})
        });

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
        var letters = /^[A-Za-z]+$/
        if(namnfield == '') {
            $('#namn').val('Var vänlig och fyll i fältet').css({ 'color': 'red'})
        }
        else if(namnfield.length > 30) {
            $('#namn').val('Högst 30 tecken!').css({ 'color': 'red'})
        } 
        else if(!namnfield.match(letters)) {
            $('#namn').val('Endast bokstäver och mellanslag').css({ 'color': 'red'})
        }
    }

    function teleValidation() {
        let telefield = $('#tele').val();
        var letters = /^[A-Za-z]+$/

        if(telefield == '') {
            $('#tele').val('Var vänlig och fyll i fältet').css({ 'color': 'red'})
        }

        else if(telefield.match(letters)) {
            $('#tele').val('Bara nummer').css({ 'color': 'red'})
        }
        
        else if(telefield.length > 10 || telefield.length < 10 ) {
            $('#tele').val('10 tecken behövs').css({ 'color': 'red'})
        } 

    }

    function emailValidation(){
        let emailField = $('#email').val();
        var letters = /^[A-Za-z]+$/

        if(emailField == '') {
            $('#email').val('Var vänlig och fyll i fältet').css({ 'color': 'red'})
        }

        else if(emailField.match(letters)) {
            $('#email').val('Bara nummer').css({ 'color': 'red'})
        }
        
        else if(emailField.length > 10 || emailField.length < 10 ) {
            $('#email').val('10 tecken behövs').css({ 'color': 'red'})
        } 


    }

    function msgValidation(){
    
    

    }
    $('#astapel1').hover('show');
   
})

           


