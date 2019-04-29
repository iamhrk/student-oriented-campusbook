var i=0;
if(localStorage.getItem('loggedUser')=='jane doe')
{
	document.getElementById('profile-name2').innerHTML='jane-doe'
var result2=JSON.parse(localStorage.getItem('objarray2'));
console.log(result2)
var outputfield2=document.getElementById('storageOut-2');
//
for(i=0; i<=localStorage.objarray2.length; i++)
{
	outputfield2.innerHTML += `<strong>Project Title:</strong>  ${result2[i].ttl}<br> <strong>Project Category:</strong>  ${result2[i].cat}<br> <strong>Description:</strong>  ${result2[i].det}<br><br>` ;

}
}
