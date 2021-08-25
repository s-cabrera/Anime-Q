const addAnimeHandler = async (event) => {
	console.log(`event: ${event}`);
	console.log(`event.target ${event.target}`);
	console.log(`event.target.data ${event.target.title}`);
	//console.log(``);

	const anime_id = {anime_id: event.target.title};

	console.log(anime_id);
	const response = await fetch('/api/watchlist/add/', {
		method: 'PUT',
		body: JSON.stringify(anime_id),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {console.log('Anime added to your watch list');}

};

document
	.querySelector('.btn-add')
	.addEventListener('click', addAnimeHandler);