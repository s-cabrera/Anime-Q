const addAnimeHandler = async (event) => {
	const animeId = event.target.id;
	console.log(`Anime ID: ${animeId}`);

	const response = await fetch('/api/users/signup', {
		method: 'POST',
		body: JSON.stringify(animeId),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {console.log('Anime added to your watch list');}

};

document
	.querySelector('.add')
	.addEventListener('click', addAnimeHandler);