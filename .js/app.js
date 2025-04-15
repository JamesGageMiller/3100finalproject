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
$('#btnInstructorReviewGroupsToInstructorViewFeedback').on('click',function(){
    $('#frmInstructorCourseFeedback').slideUp('slow',function(){
        $('#frmInstructorViewFeedback').slideDown('fast')
    })
})
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
    //placeholder for auth, will ping right here then decide to send alert, for now this will ALWAYS go through if you follow the above
    if(!blnError){
        Swal.fire({
            title: "Login Successful",
            text: "proceeding",
            icon: "success"
        });
        $('#frmLogin').slideUp('slow',function(){
            $('#frmStudentView').slideDown('fast')
        })
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
    //auth will go here
    if(!blnError){
        Swal.fire({
            title: "Login Successful",
            text: "proceeding",
            icon: "success"
        });
        $('#frmRegister').slideUp('slow',function(){
            $('#frmStudentView').slideDown('fast')
        })
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
document.querySelector('#btnJoinCourse').addEventListener('click',(e)=>{
    let strCourseCode = document.querySelector('#txtCourseCode').value
    let strMessage = ''
    //code spot for verifying course code with a fetch

    /*if valid
        sweet alert for success
        slide this page up and student view back down
    else
        sweel alert for invalid course code, stay on page

    }*/
})

document.querySelector('#btnCreateCourse').addEventListener('click',(e)=>{
    let strCourseName = document.querySelector('#txtCourseName').value
    let intGroupSize = document.querySelector('#txtGroupSize').value

    let blnError=false

    if(strCourseName.length < 1){
        blnError = true
        strMessage += "<p class ='mb-0 mt-0'>Course name cannot be blank</p>"
    }
    if(intGroupSize < 1){
        blnError = true
        strMessage += "<p class ='mb-0 mt-0'>Group size must be greater then 1</p>"
    }
    // will do a post fetch, swal for success with the course code then a slide up and down to go back to instructor view
    //only error that should come up is if something is blank, in which case a swal will come up and they will stay on the same page
})

document.querySelector('#btnCreateFeedback').addEventListener('click',(e)=>{
    //fetch here to get data
    //then 
    //then
    // will add in items to the list with the following format
    //<li>
    //  <span class='listName'> ${courseName} </span>
    //  <button class='btn btn-primary btn-sm'>Select</button>
    //</li>
})
jQuery(function($) {
    var fbTemplate = document.getElementById('frmCreateFeedbackForm')
    var options= {
        onSave:function(evt,formData){
            let jsonFormData = JSON.stringify(formData)
            //fetch here to save form data to backend, will find a way to add a courseid here

        }
    }
    $(fbTemplate).formBuilder(options);
})
jQuery(function($){
    var fbRenderTemplate = document.getElementById('frmStudentSubmitFeedback')
    let fbRender='formdata'
    //fetch right here for form data/

    var formRenderInstance = $(fbRenderTemplate).formRender({fbRender})
    document.querySelector('#btnSubmitFeedback').addEventListener('click',(e)=>{
        let strResponses=fbRender.userData
        let jsonUserData = JSON.parse(strResponses)
        let arrUserResponses=[]
        let arrValuesChecked = []
        jsonUserData.forEach((item)=>{
            if (item.type=='text'){
                arrUserResponses.push(item.userData)
            }
            else if(item.type=='checkbox-group'){
                arrValuesChecked = []
                item.values.forEach((value)=>{
                    if(value.selected == true){
                        arrValuesChecked.push(value)
                    }
                })
                arrUserResponses.push(arrValuesChecked)
            }
            else if(item.type=='select'){
                item.values.forEach((value)=>{
                    if(value.selected == true){
                        arrUserResponses.push(value)
                    }
                })
            }
            else if(item.type=='radio-group'){
                item.values.forEach((value)=>{
                    if(value.selected == true){
                        arrUserResponses.push(value)
                    }
                })
            }
        })
        //fetch here to submit feedback
        //add functionality to swap to a different page
    })
})