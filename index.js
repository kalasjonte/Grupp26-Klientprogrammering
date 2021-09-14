$( document ).ready(function() {

    var pics = ["images/1.jpg", "images/2.webp", "images/3.jpg", "images/4.jpg"]

    function setBilder() {
    $('#bild1').attr('src', pics[0])
    $('#bild2').attr('src', pics[1])
    $('#bild3').attr('src', pics[2])
    $('#bild4').attr('src', pics[3]) 
    }
    setBilder()
    $('#test').on('click', bildspel)
    var index = 0;
    
    function bildspel(e){
        if( index == 0){
        $('.bildspel').fadeOut(3000)
        $('#bild1').attr('src', pics[index + 1])
        $('#bild2').attr('src', pics[(index + 2)])
        $('#bild3').attr('src', pics[index + 3])
        $('#bild4').attr('src', pics[index]) 
        $('.bildspel').fadeIn(3000)
        }
        index++;
        }
        

    
})