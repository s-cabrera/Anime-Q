console.log('Connected to search.js');

// const displayButtons = async (logged_in) => {
// 	try {
// 		if (!logged_in) {
// 			[...document.querySelectorAll('.btn-add')].forEach(function (item) {
// 				item.classList.remove('d.none');
// 			});
// 		}
// 	} catch (err) {
// 		alert(err);
// 	}
// };

const addAnimeHandler = async (event) => {
	try {
		const anime_id = { anime_id: event.target.title };

		console.log(anime_id);
		const response = await fetch('/api/watchlist/add/', {
			method: 'PUT',
			body: JSON.stringify(anime_id),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			console.log('Anime added to your watch list');
			event.target.classList.add('d-none');
		}
		else if (response.status == '401') {
			const message = await response.json();
			console.log(message);
			event.target.classList.add('d-none');
		}


	} catch (error) {
		alert(error);
	}



};

// displayButtons(req.session.logged_in);

[...document.querySelectorAll('.btn-add')].forEach(function (item) {
	item.addEventListener('click', addAnimeHandler);
});
