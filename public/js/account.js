console.log('Account.js reached from watchlist');

const delButtonHandler = async (event) => {
	try {
		const anime_id = { anime_id: event.target.title };

		console.log(anime_id);
		const response = await fetch('/api/watchlist/delete/', {
			method: 'PUT',
			body: JSON.stringify(anime_id),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			console.log('Anime deleted from your watch list');
			document.location.replace('/watchlist');
		}
		else if (response.status == '401') {
			const message = await response.json();
			console.log(message);
		}

	} catch (error) {
		alert(error);
	}
};

[...document.querySelectorAll('.btn-delete')].forEach(function (item) {
	item.addEventListener('click', delButtonHandler);
});