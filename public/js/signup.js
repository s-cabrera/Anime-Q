console.log('CONNECTED TO THE SIGNUP.JS');
const signupFormHandler = async (event) => {
	event.preventDefault();
	
	const first_name = document.querySelector('#first-name-signup').value.trim();
	const last_name = document.querySelector('#last-name-signup').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();
	const missingFields = document.getElementById('missing-fields');

	//Reset alert to display: none
	// missingFields.textContent = '';
	// missingFields.classList.add('d-none');
	
	if (first_name && last_name && email && password) {
		const response = await fetch('/api/users/signup', {
			method: 'POST',
			body: JSON.stringify({ first_name, last_name, email, password }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.ok) {
			document.location.replace('/api/anime/');
		} else {
			//console.log(`Error: ${response.status} ${response.statusText}`);
			const data = await response.json();
			console.log(`Data: ${data}`);
			//replace this with alert
			missingFields.textContent = data;
			missingFields.classList.remove('d-none');
			//return document.location.replace('/signup');
		}
	}
	else{
		missingFields.textContent = 'Missing field(s) above';
		missingFields.classList.remove('d-none');
	}
};

document
	.querySelector('.signup-form')
	.addEventListener('submit', signupFormHandler);