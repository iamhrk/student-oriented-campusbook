
function checklogin(){

	var userAccounts=[
{
	username:"john doe",
	password:"john"
},
{
	username:"jane doe",
	password:"jane"
}
];


	var enteredName= "";
	var enteredPswd= "";
	enteredName= document.getElementById('username').value;
	enteredPswd= document.getElementById('password').value;


	for(i=0;i<=userAccounts.length;i++)
	{
		if(enteredName == userAccounts[i].username && enteredPswd == userAccounts[i].password){
			window.location.href="profile.html"
			localStorage.setItem('loggedUser',enteredName);
			return
		}

	}

};
