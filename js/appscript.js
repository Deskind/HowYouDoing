//Function for user signing.
function signIn(){
    var country = document.getElementById('countries').value;
    var name = document.getElementById('signInName').value;
    var password = document.getElementById('signInPassword').value;
    
    if(country == '' || name == '' || password == ''){
        alert('Bro! One of fields is empty!!!');
    }else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (){
            if(xhttp.readyState == 4 & xhttp.status == 200){
                document.getElementById('response').innerHTML = xhttp.responseText;
            }
        };

        xhttp.open("GET", "signIn.php?country="+country+"&name="+name+"&password="+password, true);
        xhttp.send();
    }
}

//Function for logging.
function logIn(){
    var country = document.getElementById('countries').value;
    var name = document.getElementById('signInName').value;
    var password = document.getElementById('signInPassword').value;
    
    if(country == '' || name == '' || password == ''){
        alert('Bro! You need to fill all fields!!!');
    }else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (){
            if(xhttp.readyState == 4 & xhttp.status == 200){
                if(xhttp.responseText == 'LogIn successfuly'){
                    document.getElementById('response').innerHTML = 'Hello ' + name + ' from ' + country + '!!! How You Doing!!!???';
                    $('#credentials, #logInBtn, #signInBtn').hide();
                    $('#upDownBtns').show(200);
                    
                }else{
                    document.getElementById('response').innerHTML = xhttp.responseText;
                }       
            }
        };

        xhttp.open("GET", "logIn.php?country="+country+"&name="+name+"&password="+password, true);
        xhttp.send();
    }
}

//function for logOut
function logOut(){
    window.location.replace('index.html');
}

//Function for filling select tag with countries.
function selTest(){
    var countries = ["Belarus", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados", "Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];     
    var element = document.getElementById('countries');
    for(var i = 0; i < countries.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = countries[i];
        opt.value = countries[i];
        element.appendChild(opt);
    }
}

//Hide thumb up and thumb down images on load
 $(document).ready(function(){
   $('#upDownBtns').hide(); 
});


