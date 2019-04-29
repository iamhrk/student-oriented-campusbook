document.getElementById('profile-name').innerHTML=localStorage.getItem('loggedUser')
var objarray = []
var objarray2 =[]
//document.getElementById('profile-name').style.color="blue"
const title = document.getElementById('proname');
var category = document.getElementById('procategory');
//var category = selectId.options[selectId.selectedIndex].text;
const details = document.getElementById('prodetail');

const saveBtn= document.getElementById('savedata');
const outputfield= document.getElementById('storageOutput');

saveBtn.onclick = loadvalues;



function loadvalues(){

 
 if(localStorage.getItem('loggedUser') == 'john doe')
 {
 
		 
		 createObject();

		  //console.log(titleValue);
		  //console.log(categoryValue);
		  //console.log(detailsValue);

		  localStorage.setItem('objarray',JSON.stringify(objarray));

		  //var stored=JSON.parse(localStorage.getItem('obj'));
		  for(let i=0; i<objarray.length; i++)
		 {
			  outputfield.innerHTML+=`${objarray[i].ttl}<br> ${objarray[i].cat}<br> ${objarray[i].det}<br><br>` ;
			  //outputfield.innerHTML += `${stored[i].ttl}<br> ${stored[i].cat}<br> ${stored[i].det}<br><br>` ;

			  /*const key = localStorage.key(i);
			  const value = localStorage.getItem(key);

			  outputfield.innerHTML += `${key}: ${value}<br>`;*/
		 }
 }
 
 else if(localStorage.getItem('loggedUser') == 'jane doe'){
	 createObject2();
	 localStorage.setItem('objarray2',JSON.stringify(objarray2));
	   for(let i=0; i<objarray2.length; i++)
		 {
			  outputfield.innerHTML+=`${objarray2[i].ttl}<br> ${objarray2[i].cat}<br> ${objarray2[i].det}<br><br>` ;
			  //outputfield.innerHTML += `${stored[i].ttl}<br> ${stored[i].cat}<br> ${stored[i].det}<br><br>` ;

			  /*const key = localStorage.key(i);
			  const value = localStorage.getItem(key);

			  outputfield.innerHTML += `${key}: ${value}<br>`;*/
		 }
 }
	 
}

function createObject(){
  
  const titleValue= title.value;
  const categoryValue= category.options[category.selectedIndex].text;
  const detailsValue= details.value;
  var obj = {
    ttl:titleValue,
    cat:categoryValue,
    det:detailsValue
  }
  objarray.push(obj);
}

function createObject2(){
  
  const titleValue= title.value;
  const categoryValue= category.options[category.selectedIndex].text;
  const detailsValue= details.value;
  var obj = {
    ttl:titleValue,
    cat:categoryValue,
    det:detailsValue
  }
  objarray2.push(obj);
}
