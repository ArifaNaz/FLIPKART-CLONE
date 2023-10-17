let getUsersdata=JSON.parse(localStorage.getItem('usersdata'))||[];
function Signin(){
    let mobile=document.getElementById('mobile').value;
    let password=document.getElementById('pass').value;
    
    if(mobile.length==0){
        alert('Enter Mobile Number')
    }
    else {


        for(let i=0;i<getUsersdata.length;i++){

            if(mobile==getUsersdata[i].mobile){
                if(password==getUsersdata[i].password){
                    alert('Sign In Successfully!');
                    window.location.href = "index.html"
                }
                else{
                    alert('Enter Valid Data')
    
                }
            }
            //if user not found
            else{
                count++;
            }
            if (count== getUsersdata.length){
               alert ('User is Not Registered, Sign Up to Continue'); 
               window.location.href='signup.html';
            }
    
        }

    }


}