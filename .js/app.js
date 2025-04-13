$('#btnSwapLogin').on('click',function(){
    $('#frmLogin').slideUp('slow',function(){
        $('#frmRegister').slideDown('fast')
    })
})
$('#btnSwapRegister').on('click',function(){
    $('#frmRegister').slideUp('fast',function(){
        $('#frmLogin').slideDown('slow')
    })
})
$('#btnSwapLandingToLogin').on('click',function(){
    $('#frmLandingPage').slideUp('slow',function(){ 
        $('#frmLogin').slideDown('fast')
    }   )
})
$('#btnSwapLandingToRegister').on('click',function(){
    $('#frmLandingPage').slideUp('slow',function(){ 
        $('#frmRegister').slideDown('fast')
    }   )
})
//reserving space ahead of time for the following
//:transition from the login page to the dashboard, dashboard will feature
// -- a student/teacher view
// -- teacher view will have the ability to have classes, classes will split into groups that will be made up of clumps of student ids. teachers will be able to make some system to make random groups after a code is entered to be put into a group
// studnet view will see any feedback requested. and fill out
// teacher view can also view feedback results and share them anonmously with students. no ids will be shown, instead names
// logic for these boards will not be fully fleshed out yet, as most of it will depend on stuff being returned from the backend and will depend on the format of the backend.

document.querySelector("#btnLogin").addEventListener("click",(e) => {
    //alert("Test");
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/
    let strUsername = document.querySelector("#txtLoginEmail").value
    const strPassword = $('#txtLoginpassword').val()
    strUsername = strUsername.toLowerCase()
    let blnError = false
    let strMessage = ''

    if(!regEmail.test(strUsername)){
        blnError = true
        strMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
    }

    // if(strUsername.trim().length < 6 || !strUsername.includes('@') || !strUsername.includes('.')){
    //     blnError = true
    //     strMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
    // }
    
    if(strPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password Cannot Be Blank</p>'
    }
    if(!blnError){
        Swal.fire({
            title: "Login Successful",
            text: "proceeding",
            icon: "success"
        });
    }
    else{
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    }


})
document.querySelector('#btnRegistration').addEventListener('click',(e)=>{
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/
    const regPhoneNumber = /^\+?[1-9][0-9]{7,14}$/
    let strUsername = document.querySelector("#txtRegistrationEmail").value
    const strPassword = $('#txtRegistrationPassword').val()
    strUsername = strUsername.toLowerCase()
    let blnError = false
    let strMessage=''
    let strPhoneNumber = $('#txtPhoneNumber').val()
    let strDiscord = document.querySelector('#txtDiscord').value
    let strTeamsName = document.querySelector('#txtTeamsName').value

    if(!regEmail.test(strUsername)){
        blnError = true
        strMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
    }

    if(strPassword.length < 15 || strPassword.length >=64){
        blnError = true
        strMessage += "<p class ='mb-0 mt-0'>Password must be greater then 15 characters and less then 64</p>"
    }

    if(!regPhoneNumber.test(strPhoneNumber)){
        blnError = true
        strMessage += "<p class = 'mb-0 mt-0'> Please enter a valid phone number </p>"
    }
    if(strDiscord.length < 1){
        blnError = true
        strMessage += "<p class ='mb-0 mt-0'>Discord cannot be blank</p>"
    }
    if(strTeamsName.length < 1){
        blnError = true
        strMessage += "<p class ='mb-0 mt-0'>Teams name cannot be blank</p>"
    }
    if(!blnError){
        Swal.fire({
            title: "Login Successful",
            text: "proceeding",
            icon: "success"
        });
    }
    else{
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    }

})