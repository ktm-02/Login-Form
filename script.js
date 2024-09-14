addEventListener("DOMContentLoaded",()=>{
    const objects={
        username:"",
        password:"",
    }
    const btn=document.getElementById("btn")
    btn.addEventListener("click",()=>{
        const user=document.getElementById("username").value;
        const pass=document.getElementById("password").value;
        alert("Login Successful...");
        objects.username=user;
        objects.password=pass;
        console.log(objects);
})
})