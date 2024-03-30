
// validate form
function validateForm(name,email,message){
    if (!name || !email || !message){
       alert("Fill the forrm")
       return false;

} else if (!email.includes("@")){
    alert("Enail had bad format")
    return false;
} else{
    return true;
}

}

//sumbit form
function submit(e){
    //get input form from
const user_name =document.getElementById("contact-name").value;
const user_email =document.getElementById("contact-name").value;
const user_message =document.getElementById("contact-name").value;


    e.prevenDefault(); // chan hoat dong 
    validateForm(user_name,user_email,user_message);
    if (validated == true ){
        console.table([user_name,user_email,user_message]);
    }


}



// adđ event for button submit
document.querySelector("#contact-submit").addEventListener("click",submit);