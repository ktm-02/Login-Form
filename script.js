addEventListener("DOMContentLoaded",()=>{
    const objects={
        username:"",
        password:"",
    }
    const btn=document.getElementById("btn")
    btn.addEventListener("click",()=>{
        const user=document.getElementById("username").value;
        const pass=document.getElementById("password").value;
        if(user==''){
            alert("Please Enter the username...");
        }
        else if(pass==''){
            alert("Please Enter the password...");
        }
        else{
        objects.username=user;
        objects.password=pass;
        console.log(objects);
        alert("Login Successful...");
        }
})
})