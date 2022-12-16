$ ("#submit") .click(function() {
    
    var name = $ ("#name") .val() ;
    var email = $ ("#email") .val() ;
    var phone = $ ("#phone") .val() ;
    
    if (name == '' || email == '' || phone == '' ) {
        swal({
            title: "Fields Empty!!",
            text: "please check the missing fields!!",
            icon: "Warning",
            button: "ok",
        });
    }else{
        swal({
            title: "Successfully submitted",
            icon: "success",
            button: "Yess!!!",
          });
    }
});