var i=0;
var result1=JSON.parse(localStorage.getItem('objarray'));
console.log(result1)
var outputfield1=document.getElementById('storageOut-1');
//
for( i=0; i<=localStorage.objarray.length; i++)
{
  outputfield1.innerHTML += `<strong>Project Title:</strong>  ${result1[i].ttl}<br> <strong>Project Category:</strong>  ${result1[i].cat}<br> <strong>Description:</strong>  ${result1[i].det}<br><br>` ;

}
