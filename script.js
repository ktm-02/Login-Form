addEventListener("DOMContentLoaded",()=>{
const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    alert("Login Successful...")
    console.log(user)
    console.log(pass)
})
})