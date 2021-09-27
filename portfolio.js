$( document ).ready(function() {
    //Skapar 3 variabler : En xmlrequest, en tom 'xmlfil', tom'arbeten ' för att spara de utanför functionen load
    var xhr = new XMLHttpRequest();
    var xmlFil
    var arbete
    xhr.onload = function() {

        //Sparar xmlrequestens RESPONSXML, aka är servern online och vi får godkänt får vi här en xmlfil i variabeln
        //Sparar elementen med taggen ('arbete) från xml i variabeln arbete
        xmlFil = xhr.responseXML;
        arbete = xmlFil.getElementsByTagName('arbete')
        laddaData();
    }

    //Här loopar vi alla element i arbete taggen, gör variabel för VARJE element som ska in i html documentet
    function laddaData () {
        for (let index = 0; index < arbete.length; index++) {
            var div
            var img
            var title
            var customer
            var start
            var done
            var description;
            div = document.createElement('div')
            div.className = 'arbeten'

            //skapar ett img element, sätter dess attribut till vad som finns inom IMAGE taggen i xml (namnet på bilden + path) för det indexet loopen är i (0-4)
            //appendar sedan img till den div vi skapade över denna kommentar
            img = document.createElement('img')
            img.setAttribute('src', getXmlValue(arbete[index], 'image'));
            img.className='contentIMG';
            div.appendChild(img);

            //title,customer,start,done,description fungerar likadant
            //vi skapar ett element, (h5,p,i) hämtar sedan det som finns i xml taggen för variabeln
            //skapar en textnode på det element vi skapat som håller det vi hämtat, title får alltså childen en textnode, som består av det vi hämtat i XML filen
            title = document.createElement('h5')
            title.appendChild(document.createTextNode(getXmlValue(arbete[index], 'title')));
            div.appendChild(title);


            customer = document.createElement('i');
            customer.appendChild(document.createTextNode(getXmlValue(arbete[index], 'customer')));
            div.appendChild(customer);

            start = document.createElement('p');
            start.appendChild(document.createTextNode(getXmlValue(arbete[index], 'start')));
            div.appendChild(start);

            done = document.createElement('p');
            done.appendChild(document.createTextNode(getXmlValue(arbete[index], 'done')));
            div.appendChild(done);

            description = document.createElement('p');
            description.appendChild(document.createTextNode(getXmlValue(arbete[index], 'description')));
            div.appendChild(description);
            
            //Redan skapad div i html med id 'xml' får diven och dess children i documentet.
            document.getElementById('xml').appendChild(div)

            
        }
    }

    //Function för att hämta element i xml filen. Parametrar av objekt (arbete arrayen) samt taggen vi vill hämta info om
    //på objektet vi skickar med letar vi efter taggen vi skickar med, på indexen vi är inne i
    //på denna taggen letar vi efter dess barn (text, det som är emellan taggen) och hämtar den
    function getXmlValue(obj, tag) {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }

    // specifierar vad vi vill göra (GET), från vad (vår xml fil), om det ska ske i async(inte samtidigt) eller samtidigt. Async == true, sync == false
    xhr.open('GET', 'portfolio.xml', true)
    //vi vill inte skicka något, därav GET methoden. Därför skickar vi också null. Utan denna function kör inte get något. Måste specificeras
    xhr.send(null)
})