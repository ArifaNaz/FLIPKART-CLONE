//getting items from local storage
//parse mean converting obj in normal obj
let getUsersdata=JSON.parse(localStorage.getItem('usersdata'))||[];
console.log(getUsersdata);


function Signup(){
let username= document.getElementById('naam').value;

let mobile= document.getElementById('phone').value;

let password= document.getElementById('pass').value;
 if(mobile.length==0){
    alert('Enter Mobile Number')
 }
 else if(mobile.length!==10||mobile.length!==11){
    alert('Enter Valid Mobile Number')
 }
 else{
//made object
    let userData={
        username:username,
        mobile:mobile,
        password:password
    }



    // create array
// let users=[];
//     //push obj in array
// users.push(userData);
//above simplified method to pushin array
let users=[...getUsersdata,userData]
    //set obj in local storage, usersdata is key here
    //mongoo db data set in json obj
localStorage.setItem('usersdata',JSON.stringify(users));
// after successful sign up where to send the data
window.location.href='signin.html';



 }




}

