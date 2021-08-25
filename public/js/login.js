const loginFormHandler = async (event) => {
	event.preventDefault();
  
	const email = document.querySelector('#email-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();
	const alert = document.getElementById('missing-alert');
  
	if (email && password) {
		const response = await fetch('/api/users/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		});
  
		if (response.ok) {
			//!-- rename to make route to account profile once logged in--//
			document.location.replace('/watchlist');
		} else {
			alert.textContent = 'Login Failed: Username or password is incorrect';
			alert.classList.remove('d-none');
			alert(response.statusText);
		}
	}
	else{
		//User is missing an entry
		alert.textContent = 'Login Failed: Missing username or password';
		alert.classList.remove('d-none');
	}
};

const signupBtnHandler = async (event) => {
	event.preventDefault();

	try {
		document.location.replace('/signup');
	} catch (error) {
		alert('Page not found');
	}
};

//Login Submit Button
document
	.querySelector('.login-form')
	.addEventListener('submit', loginFormHandler);

//Login reroute to Sign-up Button
document
	.querySelector('#signup-btn')
	.addEventListener('click', signupBtnHandler);