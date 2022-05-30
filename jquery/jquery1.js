$(document).ready(function validate(){
 
    $("#fname").change(function(){
        var fname = $("#fname").val();
        if((! fname.match(/^[a-zA-Z]+$/)) || (fname==" "))
        {
            $("#firstname").html("check first name");
            return false;
        }

        else{
            $("#firstname").html(" ");
            return true;
        }   
    });
   
    $("#btnsubmit").click(function(){
        var firstname=$("#fname").val();
        if(firstname=="")
        {
            $("#firstname").html(" The first name is required");
            return false;
        }
    });


    $("#lname").change(function(){
        var lname = $("#lname").val();
        if((! lname.match(/^[a-zA-Z]+$/)) || (lname==" "))
        {
            $("#lastname").html("check last name");
            return false;
        }

        else{
            $("#lastname").html(" ");
            return true;
        }   
    });
   

    $("#btnsubmit").click(function(){
        var lastname1=$("#lname").val();
        if(lastname1=="")
        {
            $("#lastname").html(" The last name is required");
            return false;
        }
    });

    $("#addressline1").change(function(){
        var addressline1 = $("#addressline1").val();
        if(addressline1==" ")
        {
            $("#address1").html("Enter address in address line 1");
        } 
        else
        {
            $("#address1").html(" ");

        }
    });


    $("#btnsubmit").click(function(){
        var addressline1=$("#addressline1").val();
        if(addressline1=="")
        {
            $("#address1").html("Enter address in address line 1");
            return false;
        }
        else
        {
            return true;
        }
    });

    $("#btnsubmit").click(function(){
        var addressline2=$("#addressline2").val();
        if(addressline2=="")
        {
            $("#address2").html("Enter address in address line 2");
            return false;
        }
        else
        {
            return true;
        }
    });

    $("#addressline2").change(function(){
        var addressline2 = $("#addressline2").val();
        if(addressline2==" ")
        {
            $("#address2").html("Enter address in address line 2");
            return false;
        } 
        else
        {
            $("#address2").html(" ");
            return true;
        }
    });

    $("#city").change(function(){
        var city = $("#city").val();
        if((! city.match(/^[a-zA-Z]+$/)) || (city==" "))
        {
            $("#cityname").html("Enter correct City name");
            return false;
        } 
        else
        {
            $("#cityname").html(" ");
            return true;
        }
    });    

    $("#btnsubmit").click(function(){
        var city=$("#city").val();
        if(city=="")
        {
            $("#cityname").html("Enter city name");
            return false;
        }
        else
        {
            return true;
        }
    });

    $("#state").change(function(){
        var state = $("#state").val();
        if((! state.match(/^[a-zA-Z]+$/)) || (state==" "))
        {
            $("#statename").html("Enter correct state name");
            return false;
        } 
        else
        {
            $("#statename").html(" ");
            return true;
        }
    });

    $("#btnsubmit").click(function(){
        var state=$("#state").val();
        if(state=="")
        {
            $("#statename").html("Enter state name");
            return false;
        }
        else
        {
            return true;
        }
    });

    $("#btnsubmit").click(function(){
        var feedback=$("#feedback").val();
        if(feedback=="")
        {
            $("#feedback1").html("Enter Feedback");
            return false;
        }
        else
        {
            return true;
        }
    });

    $("#feedback").change(function(){
        var feedback = $("#feedback").val();
        if(feedback==" ")
        {
            $("#feedback1").html("Enter Feedback");
            return false;
        } 
        else
        {
            $("#feedback1").html(" ");
            return true;
        }
    });
    

    $("#btnsubmit").click(function(){
        var suggestion=$("#suggestion").val();
        if(suggestion=="")
        {
            $("#suggestion1").html("Enter suggestions");
            return false;
        }
        else
        {
            return true;
        }
    });

    $("#suggestion").change(function(){
        var suggestion = $("#suggestion").val();
        if(suggestion==" ")
        {
            $("#suggestion1").html("Enter suggestion");
            return false;
        } 
        else
        {
            $("#suggestion1").html(" ");
            return true;
        }
    });
    

    $("#btnsubmit").click(function(){
        if ( ! $("#number").val().match(/^\d{10}$/) || (number==" ") )
        {
            $("#contact").html("Enter correct contact number");
            return false;
        }
    });

    $("#number").change(function(){
        var number = $("#number").val();
        if((! $("#number").val().match(/^\d{10}$/)) || (number==" "))
        {
            $("#contact").html("check contact number");
            return false;
        }

        else{
            $("#contact").html(" ");
            return true;
        }   
    });

    $("#email").change(function(){
        var email = $("#email").val();
        if(( ! email.match(/^[a-zA-Z0-9.-]+@+tntra.io*$/)) || (email==" "))
        {
            $("#mail").html("check email address");
            return false;
        }

        else{
            $("#mail").html(" ");
            return true;
        }   
    });

    $("#btnsubmit").click(function(){
        if ( ! $("#email").val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) )
        {
            $("#mail").html("Enter correct email address");
            return false;
        }
    });


    $("#info").change(function(){
        var info = $("#info").val();
        if((info == "ps" ) || (info==" "))
        {
            $("#list").html("select any one from the list");
            return false;
        }

        else{
            $("#list").html(" ");
            return true;
        }   
    });

    $("#btnsubmit").click(function(){
        var info=$("#info").val();
        if(info=="")
        {
            $("#list").html(" select any one from the list ");
            return false;
        }
    });



    // $("#checkbox1").change(function(){
    //     debugger
    //     var checkbox1 = $("#checkbox1").val();
    //     if(! $(checkbox1).prop('checked'))
    //     {
    //         $("#cb").html("Please check checkbox");
    //         return false;
    //     }

    //     else{
    //         $("#cb").html(" ");
    //         return true;
    //     }   
    // });

    // $("#btnsubmit").click(function(){
    //     var checkbox1=$("#checkbox1").val();
    //     if(checkbox1=="")
    //     {
    //         $("#cb").html(" Please check checkbox ");
    //         return false;
    //     }
    // });

    $("#btnsubmit").click(function () {

        if(male.checked==false && female.checked==false && others.checked==false )
           {
                $("#radiobtn").html(" You must select male, female or others ");
                return false;
           } 
        });  

});