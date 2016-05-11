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
            $(document).ready(function(){
                $("#signInForm").hide();
            });
        }
        };

        xhttp.open("GET", "signIn.php?country="+country+"&name="+name+"&password="+password, true);
        xhttp.send();
    }

    
}




