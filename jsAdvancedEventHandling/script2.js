document.querySelector("form").addEventListener("submit",(event) =>{
    event.preventDefault();
   const fn =document.getElementById("fullName").value;
   const em=document.getElementById("email").value;
   const ps=document.getElementById("password").value;
    const dataPacket={
        fullName:fn,
        email:em,
        password:ps,
    }
    console.log("dataPacket");
     const fn1=document.getElementById("fullName"). value= "";
    const em1=document.getElementById("email"). value= "";
    const ps1=document.getElementById("password"). value= "";



});
document.querySelector("form").addEventListener("reset",(event) =>{
    event.preventDefault();
    confirm:("Are you Sure") && window.location.reload()

});
document.addEventListener("keydown",(event) => {
    let keyPress= event.key;
    keyPress==="Escape"
})
