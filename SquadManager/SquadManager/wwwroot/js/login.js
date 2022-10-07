$('form').on('submit',function (event) {
    alert("Handler for .submit() called.");
    event.preventDefault();

    login();
});

function login(){
    var formData = {
        email: $('#email').val(),
        password: $('#password').val()
    }

    console.log("Post por ajax " + JSON.stringify(formData));

    $.ajax({
        type: "POST",
        URL: "https://localhost:7191/api/User",
        dataType: "json",
        data: formData,
        success: function (result) {
            console.log("Foi" + result)
        },
        error: function (error) {
            console.log("Não foi " + error)
        }
    });
}