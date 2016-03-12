$().ready(function() {
    $("#register").validate({
        
        rules: {
            full_name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 10,
                pwcheck: true
            },
            confirm_password: {
                required: true,
                minlength: 10,
                equalTo: "#password"
            }
        },
        messages: {
            full_name: {
                required: "Please enter your full name",
                minlength: "Full Name must contain more than 2 characters"
            },
            email: {
                required: "Please enter your email",
                minlength: "Full Name must contain more than 5 characters"
            },
            password: {
                required: "Please enter your password",
                minlength: "Password must contain more than 10 characters",
                pwcheck: "Password must include a number"
            },
            confirm_password: {
                required: "Please enter your password",
                minlength: "Password must contain more than 10 characters",
                equalTo: "This field must match the password field"
            }
        }
    })
    
    $.validator.addMethod("pwcheck", function(value) {
   return /\d/.test(value) // has a digit
});
    
    $("#register").on('submit', function(e) {
        e.preventDefault();
         
        var full_name = $("#full_name").val();
        var email = $("#email").val();
        var fav_color = $("input:radio[name=color]:checked").val();
        
        if (!$("input[name='color']").is(':checked')) {
            $("#error-color").append("Please choose your favorite color");
            
        }
        else {
           if ($("#register").valid()) {
                $("body").css("background-color", fav_color);
                $("#form_output").append("<div class=\"output\"><div><span class=\"title\"> Full Name </span>" + "<span class=\"result\">" + full_name + "</span></div>" + "<div><span class=\"title\"> Email </span>" + "<span class=\"result\">" + email + "</span></div>" + "<div><span class=\"title\">Favorite Color</span>" + "<span class=\"result\">" + fav_color + "</span></div></div>");
            }
        }
        
        
        
    })
});