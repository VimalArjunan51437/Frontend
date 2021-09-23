
function getInputValue(){
    var name1= document.getElementById('Name').value;
    var number1= document.getElementById('Number').value;
    var details1 = document.getElementById('Message').value;
    
   if (localStorage.getItem('user')==null){
        person = []
        person.push([name1,number1,details1])
        localStorage.setItem('user', JSON.stringify(person));
   }
   else{
       person1 = localStorage.getItem('user')
       person= JSON.parse(person1)
        person.push([name1,number1,details1])
        localStorage.setItem('user', JSON.stringify(person));
   }
    
}
function cleanup(){
    localStorage.clear();
   
}
function adding(){
    if(localStorage.getItem('user')== null){   
        var tableBody = document.getElementById("tableBody");
        var str 
        str=`<tr>
        <th scope="row">Empty</th>
        <td>Empty</td>
        <td>Empty</td>
        <td>Empty</td>
        </tr>`
        tableBody.innerHTML =str;
    }
    else{ 
        var data= JSON.parse( localStorage.getItem('user' ) );
        var tableBody = document.getElementById("tableBody");
        var str =''
        data.forEach((element,index) => {
            str+=`<tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            </tr>`
        })
        tableBody.innerHTML =str;
    }
}