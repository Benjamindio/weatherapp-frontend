// Insert your code here

document.querySelector('#register').addEventListener('click', function() {
	console.log('click detected')
	const user = {
        name:document.querySelector('#registerName').value,
	    email:document.querySelector('#registerEmail').value,
	    password:document.querySelector('#registerPassword').value 
    } 
	fetch('http://localhost:3000/users/signup', {
		method: 'POST' ,
		headers :{ 'Content-Type' : 'application/json'},
		body:JSON.stringify(user)
		
	}).then(response => response.json())
    .then(data => {
        if(data.result) {
            window.location.assign('./index.html')
        } else {console.log('User not found')};
    }) 

	 document.querySelector('#registerName').value = '';
	document.querySelector('#registerEmail').value= '';
	 document.querySelector('#registerPassword').value= '';
})

document.querySelector('#connection').addEventListener('click', function() {
	console.log('click detected')
	const user ={ 
        email:document.querySelector('#connectionEmail').value,
	    password:document.querySelector('#connectionPassword').value,
    }
	fetch('http://localhost:3000/users/signin', {
		method: 'POST' ,
		headers :{ 'Content-Type' : 'application/json'},
		body:JSON.stringify(user)
		
	})
    .then(response => response.json())
    .then(data => {
        if(data.result) {
            window.location.assign('./index.html')
        }else {console.log('User not found')};
    }) 

	 document.querySelector('#connectionEmail').value = '';
	document.querySelector('#connectionPassword').value= '';
})
