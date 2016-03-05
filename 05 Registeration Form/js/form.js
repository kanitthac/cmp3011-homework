function checkForm() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var is_checked = false;
    var color = document.getElementsByName('color');
    var output;
    
    output = "<div class=\"output\"><div><span class=\"title\"> Fullname </span>" + "<span class=\"result\">" + name + "</span></div>"  + "<div><span class=\"title\"> Email </span>" + "<span class=\"result\">" + email + "</span></div>" + "<div><span class=\"title\"> Password </span>" + "<span class=\"result\">" + password1 + "</span></div></div>";
    
    
    if (name.length < 2) {
        alert ("Full Name must contain more than 2 characters");
        document.getElementById('name').classList.add('error');     
    }
    
    else {
        document.getElementById('name').classList.remove('error');
        
        if (email.length < 5) {
            alert ("Email must contain more than 5 characters");
            document.getElementById('email').classList.add('error'); 
        }
        
        else {
            document.getElementById('email').classList.remove('error');
            
            if (password1.length < 10) {
                alert ("Password must contain more than 10 characters");
                document.getElementById('password1').classList.add('error'); 
            }
            
            else if (password1.search(/\d/) == -1) {
                alert ("Password must include a number");
            }
            
            else {
                document.getElementById('password1').classList.remove('error');
                
                if(password1 != password2) {
                    alert ("This field must match the password field");
                    document.getElementById('password2').classList.add('error'); 
                }
                
                else {
                    document.getElementById('password2').classList.remove('error');
                    
                    if(document.getElementById('color1').checked) {
                        document.body.style.backgroundColor = "#E0E0E0";
                        document.getElementById("form_output").innerHTML = output;
                    }
                    
                    else if(document.getElementById('color2').checked) {
                        document.body.style.backgroundColor = "#FFCCCC";
                        document.getElementById("form_output").innerHTML = output;
                    }
                    
                    else if(document.getElementById('color3').checked) {
                        document.body.style.backgroundColor = "#FFFFCC";
                        document.getElementById("form_output").innerHTML = output;
                    }
                    
                    else if(document.getElementById('color4').checked) {
                        document.body.style.backgroundColor = "#CCFFFF";
                        document.getElementById("form_output").innerHTML = output;
                    }
                    
                    else {
                        alert("Please select your favorite color");
                    }
                    
                }
            }
        }
    }    
    
}
                

