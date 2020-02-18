let pass1 = document.getElementById(password);
let pass2 = document.getElementById(repeatpassword);
let submitAction=document.querySelector('button');
submitAction.addEventListener("click",function(){
   if(pass1!==pass2){
       alert("Password Are not same");
       return false;
   }
});
