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
$('#btnStudentViewFeedback').on('click',function(){
    $('#frmStudentView').slideUp('slow',function(){ 
        $('#frmStudentViewFeedback').slideDown('fast')
    }   )
})
$('#btnSwapStudentFeedbackToHome').on('click',function(){
    $('#frmStudentViewFeedback').slideUp('slow',function(){ 
        $('#frmStudentView').slideDown('fast')
    }   )
})
$('#btnJoinCourse').on('click',function(){
    $('#frmStudentView').slideUp('slow',function(){ 
        $('#frmStudentJoinCourse').slideDown('fast')
    }   )
})
$('#btnJoinCourseToStudentView').on('click',function(){
    $('#frmStudentJoinCourse').slideUp('slow',function(){ 
        $('#frmStudentView').slideDown('fast')
    }   )
})
$('#btnStudentReviewView').on('click',function(){
    $('#frmStudentView').slideUp('slow',function(){
        $('#frmStudentReviewView').slideDown('fast')
    })
})
$('#btnStudentReviewToStudentView').on('click',function(){
    $('#frmStudentReviewView').slideUp('slow',function(){
        $('#frmStudentView').slideDown('fast')
    })
}) 
$('#btnInstructorViewFeedback').on('click',function(){
    $('#frmInstructorView').slideUp('slow',function(){
        $('#frmInstructorViewFeedback').slideDown('fast')
    })
})
$('#btnInstructorVeedbackToInstructorView').on('click',function(){
    $('#frmInstructorViewFeedback').slideUp('slow',function(){
        $('#frmInstructorView').slideDown('fast')
    })
})
$('#btnCreateCourse').on('click',function(){
    $('#frmInstructorView').slideUp('slow',function(){
        $('#frmCreateCourse').slideDown('fast')
    })
})
$('#btnCreateCourseToInstructorView').on('click',function(){
    $('#frmCreateCourse').slideUp('slow',function(){
        $('#frmInstructorView').slideDown('fast')
    })
})
$('#btnCreateFeedback').on('click',function(){
    $('#frmInstructorView').slideUp('slow',function(){
        $('#frmCreateFeedback').slideDown('fast')
    })
})
()
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
//add event listener here to remove the auth token and return them to the landng page after either log out button is pushed, will wait on backend logic to do this
//logic needed for following:
//- inserting into mentioned tables in the html files on swapping to that page
//making forms
//ping pong with backend for all of this