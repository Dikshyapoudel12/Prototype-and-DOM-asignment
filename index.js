let showInfo= function(){
    const name =document.getElementById('name').value
    const age =document.getElementById('age').value
    const address =document.getElementById('address').value
    const gmail =document.getElementById('gmail').value
    const phonenumber =document.getElementById('phonenumber').value
    let output=document.createElement('h1')
    output.innerHTML=`My name is ${name} and I am ${name} years old.I live in ${address}.My gmail is ${gmail} and I have ${phonenumber}` 

    document.body.appendChild(output)
}