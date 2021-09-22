$( document ).ready(function() {
    var xhr = new XMLHttpRequest();
    var xmlFil
    var arbete
    xhr.onload = function() {
        if(xhr.status === 200)
        xmlFil = xhr.responseXML;
        arbete = xmlFil.getElementsByTagName('arbete')
        laddaData();
    }

    function laddaData () {
        for (let index = 0; index < arbete.length; index++) {
            var container, img, title , customer, start, done, description, hr;
            container = document.createElement('div')
            container.className = 'arbeten'

            img = document.createElement('img')
            img.setAttribute('src', getXmlValue(arbete[index], 'image'));
            img.className='contentIMG'
            img.appendChild(document.createTextNode(getXmlValue(arbete[index], 'image')));
            container.appendChild(img);

            title = document.createElement('h5')
            title.appendChild(document.createTextNode(getXmlValue(arbete[index], 'title')));
            container.appendChild(title);


            customer = document.createElement('i');
            customer.appendChild(document.createTextNode(getXmlValue(arbete[index], 'customer')));
            container.appendChild(customer);

            start = document.createElement('p');
            start.appendChild(document.createTextNode(getXmlValue(arbete[index], 'start')));
            container.appendChild(start);

            done = document.createElement('p');
            done.appendChild(document.createTextNode(getXmlValue(arbete[index], 'done')));
            container.appendChild(done);

            description = document.createElement('p');
            description.appendChild(document.createTextNode(getXmlValue(arbete[index], 'description')));
            container.appendChild(description);

            document.getElementById('xml').appendChild(container)

            
        }
    }

    function getXmlValue(obj, tag) {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }



    xhr.open('GET', 'portfolio.xml', true)
    xhr.send(null)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // let xmlFil = function(path,callback){
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', path);
    //     xhr.setRequestHeader('Content-Type', 'text/xml')
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState == 4 && xhr.status == 200){
    //             callback(xhr.responseXML);
    //         }
    //     };
    //     xhr.send();
    // };
    // xmlFil('portfolio.xml', function(xml) {
    //     xmlFil.
    //     // let parser = new DOMParser();
    //     // xml = parser.parseFromString('portfolio.xml', 'text/xml')
    //     // console.log(xml.getElementsByTagName('arbete'))
    // }); 
})