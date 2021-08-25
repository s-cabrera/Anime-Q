const logout = async () => {
	//!-- add route to fetch call for logging out--//
	const response = await fetch('/api/users/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});
  
	if (response.ok) {
		document.location.replace('/login');
	} else {
		alert(response.statusText);
	}
};
  
document.querySelector('#logout').addEventListener('click', logout);