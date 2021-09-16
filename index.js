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

    function start(){
    bildspel();
    setInterval(bildspel, 7000)
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

   
   
})

           


