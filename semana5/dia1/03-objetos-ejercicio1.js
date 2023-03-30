const peliculas = [
	{
		adult: false,
		backdrop_path: '/a2tys4sD7xzVaogPntGsT1ypVoT.jpg',
		genre_ids: [53, 35, 80],
		id: 804150,
		original_language: 'en',
		original_title: 'Cocaine Bear',
		overview:
			'Inspirado en hechos reales ocurridos en Kentucky en 1985, durante los cuales un oso negro de 175 libras ingirió 88 libras de cocaína pura.',
		popularity: 3474.498,
		poster_path: '/xNaMZMtGUPPmjYU5h5iqVxvcSe.jpg',
		release_date: '2023-02-22',
		title: 'Oso vicioso',
		video: false,
		vote_average: 6.5,
		vote_count: 506
	},
	{
		adult: false,
		backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
		genre_ids: [28, 53, 80],
		id: 603692,
		original_language: 'en',
		original_title: 'John Wick: Chapter 4',
		overview:
			'John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.',
		popularity: 3361.154,
		poster_path: '/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg',
		release_date: '2023-03-22',
		title: 'John Wick 4',
		video: false,
		vote_average: 8.2,
		vote_count: 384
	},
	{
		adult: false,
		backdrop_path: '/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg',
		genre_ids: [27, 53],
		id: 980078,
		original_language: 'en',
		original_title: 'Winnie the Pooh: Blood and Honey',
		overview:
			'Christopher Robin se dirige a la universidad y ha abandonado a sus viejos amigos, Pooh y Piglet, lo que lleva al dúo a aceptar sus monstruos internos.',
		popularity: 3800.257,
		poster_path: '/ZmbSkGEpXFufbDhgfTnSrFAguo.jpg',
		release_date: '2023-01-27',
		title: 'Winnie the Pooh: Blood and Honey',
		video: false,
		vote_average: 5.9,
		vote_count: 205
	},
	{
		adult: false,
		backdrop_path: '/ovM06PdF3M8wvKb06i4sjW3xoww.jpg',
		genre_ids: [878, 12, 28],
		id: 76600,
		original_language: 'en',
		original_title: 'Avatar: The Way of Water',
		overview:
			"Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
		popularity: 3464.178,
		poster_path: '/kUAG4ZQcsNbRyiPyAr3hLdsVgAq.jpg',
		release_date: '2022-12-14',
		title: 'Avatar: El sentido del agua',
		video: false,
		vote_average: 7.7,
		vote_count: 5982
	},
	{
		adult: false,
		backdrop_path: '/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg',
		genre_ids: [16, 12, 35, 10751],
		id: 315162,
		original_language: 'en',
		original_title: 'Puss in Boots: The Last Wish',
		overview:
			"Secuela de 'El gato con botas' (2011). El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: ha consumido ocho de sus nueve vidas, por ello emprende un viaje épico para encontrar el mítico Último Deseo y restaurar sus nueve vidas...",
		popularity: 1862.289,
		poster_path: '/lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg',
		release_date: '2022-12-07',
		title: 'El Gato con Botas: El último deseo',
		video: false,
		vote_average: 8.3,
		vote_count: 4854
	},
	{
		adult: false,
		backdrop_path: '/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg',
		genre_ids: [18, 36],
		id: 943822,
		original_language: 'en',
		original_title: 'Prizefighter: The Life of Jem Belcher',
		overview:
			'A principios del siglo XIX, el pugilismo era el deporte de los reyes y un talentoso joven boxeador luchó para convertirse en campeón de Inglaterra.',
		popularity: 1635.927,
		poster_path: '/grjCm3K0eWgNT7gHsE766oXs0VW.jpg',
		release_date: '2022-06-30',
		title: 'La forja de un campeón',
		video: false,
		vote_average: 6.2,
		vote_count: 92
	},
	{
		adult: false,
		backdrop_path: '/zM9RGbJBZ3UNpFOabcRqh0iVAYP.jpg',
		genre_ids: [27, 9648, 53],
		id: 631842,
		original_language: 'en',
		original_title: 'Knock at the Cabin',
		overview:
			'Durante unas vacaciones en una cabaña en un bosque alejada de todo, una niña y sus padres se convierten en rehenes de cuatro desconocidos armados que obligan a la familia a tomar una decisión imposible para evitar el apocalipsis. Con acceso limitado al mundo exterior, la familia deberá decidir qué creer antes de que todo esté perdido.',
		popularity: 1392.352,
		poster_path: '/4Zna9CvyzaAgejsErmyXmHC64Dd.jpg',
		release_date: '2023-02-01',
		title: 'Llaman a la puerta',
		video: false,
		vote_average: 6.4,
		vote_count: 1127
	},
	{
		adult: false,
		backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
		genre_ids: [28, 12, 878],
		id: 505642,
		original_language: 'en',
		original_title: 'Black Panther: Wakanda Forever',
		overview:
			'La reina Ramonda, Shuri, M’Baku, Okoye y las Dora Milaje, luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia y Everett Ross, y forzar un nuevo destino para el reino de Wakanda.',
		popularity: 1371.053,
		poster_path: '/mYpT2R7639KvKZ668uoQGS2QNFp.jpg',
		release_date: '2022-11-09',
		title: 'Black Panther: Wakanda Forever',
		video: false,
		vote_average: 7.3,
		vote_count: 4301
	},
	{
		adult: false,
		backdrop_path: '/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg',
		genre_ids: [28, 12, 53],
		id: 646389,
		original_language: 'en',
		original_title: 'Plane',
		overview:
			'En la noche de fin de año, el piloto experto Brodie Torrance (Gerard Butler) realiza un arriesgado aterrizaje cuando su avión, repleto de pasajeros, es alcanzado por un rayo. Perdidos en medio de una isla devastada por la guerra, Torrance se dará cuenta que sobrevivir al vuelo sólo ha sido el principio de una trepidante aventura llena de peligros. El piloto deberá usar todo su ingenio para llevar a los pasajeros a sus destinos sanos y salvos.',
		popularity: 1127.811,
		poster_path: '/juoinefK6tMbjwJhRpRvbAAmrTB.jpg',
		release_date: '2023-01-12',
		title: 'El piloto',
		video: false,
		vote_average: 6.9,
		vote_count: 963
	},
	{
		adult: false,
		backdrop_path: '/7eccX0xay9pDj6ZQvU4cu3whw18.jpg',
		genre_ids: [16, 9648, 14, 28],
		id: 1003579,
		original_language: 'en',
		original_title: 'Batman: The Doom That Came to Gotham',
		overview:
			"El explorador Bruce Wayne desata accidentalmente un antiguo mal y regresa a Ciudad Gótica después de estar fuera durante dos décadas. Allí, Batman lucha contra las fuerzas sobrenaturales de Lovecraft y se encuentra con aliados y enemigos como Green Arrow, Ra's al Ghul, Mr. Freeze, Killer Croc, Two-Face y James Gordon.",
		popularity: 1150.832,
		poster_path: '/e4rUCHohzoXL6agiPCwe00avWS0.jpg',
		release_date: '2023-03-10',
		title: 'Batman: The Doom That Came to Gotham',
		video: false,
		vote_average: 6.4,
		vote_count: 38
	},
	{
		adult: false,
		backdrop_path: '/sp7MPK2K60LLd7A6zjHKsfgjFil.jpg',
		genre_ids: [27, 53],
		id: 296271,
		original_language: 'en',
		original_title: 'The Devil Conspiracy',
		overview:
			'La compañía de biotecnología más popular del mundo ha descubierto que puede clonar a las personas más influyentes de la historia de entre los muertos. Ahora, están subastando clones de Miguel Ángel, Galileo, Vivaldi y otros por decenas de millones de dólares a los ultraricos del mundo. Pero cuando roban la Sábana Santa de Turín y clonan el ADN de Jesucristo, se desata el infierno.',
		popularity: 1538.468,
		poster_path: '/1AWcMtUZjpkq4h52yDnNIp9FwEO.jpg',
		release_date: '2023-01-13',
		title: 'The Devil Conspiracy',
		video: false,
		vote_average: 6.5,
		vote_count: 58
	},
	{
		adult: false,
		backdrop_path: '/sGE6N1vJjxZLkOJEXdIOqTslxuL.jpg',
		genre_ids: [99],
		id: 1087040,
		original_language: 'en',
		original_title: 'Money Shot: The Pornhub Story',
		overview:
			'Pornhub, la plataforma de entretenimiento para adultos más famosa de internet, ha cambiado por completo el modo de crear y distribuir la pornografía. Así, los creadores de contenido erótico pudieron llegar a un público amplísimo mientras la compañía se hacía multimillonaria. Sin embargo, también la acusaron de fomentar el tráfico sexual y de albergar material no consentido en su sitio web. Mientras las organizaciones que luchan contra el tráfico sexual buscan justicia para las víctimas, ¿podrá proteger este gigante de internet a quienes le procuran beneficios o se trata de una nueva oleada de censura contra los actores adultos que hacen porno consentido?',
		popularity: 1162.821,
		poster_path: '/xRMkuRw2AJ7EWaVSwsBfZUS7Wld.jpg',
		release_date: '2023-03-15',
		title: 'Hasta el fondo: La historia de Pornhub',
		video: false,
		vote_average: 5.9,
		vote_count: 100
	},
	{
		adult: false,
		backdrop_path: '/muw9YsAsSd3DDRme2OEJJoVqun9.jpg',
		genre_ids: [53, 28],
		id: 850871,
		original_language: 'es',
		original_title: 'Sayen',
		overview:
			'Sayen, una mujer mapache, descubre una peligrosa conspiración liderada por una corporación que está destruyendo las tierras de su familia y destruyendo los ecosistemas locales en toda América Latina. Sayen tendrá la tarea de llevar el caso ante la justicia y salvar el legado de su familia. Primera entrega de una trilogía.',
		popularity: 1052.037,
		poster_path: '/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg',
		release_date: '2023-03-03',
		title: 'Sayen',
		video: false,
		vote_average: 6.2,
		vote_count: 63
	},
	{
		adult: false,
		backdrop_path: '/2E6pIbJien7B9yWpaz8Yd2njzUI.jpg',
		genre_ids: [18, 27],
		id: 1026563,
		original_language: 'es',
		original_title: '13 exorcismos',
		overview:
			'Tras participar en una sesión de espiritismo, la joven Laura comienza a comportarse de manera extraña. Alarmados, sus padres piden ayuda al padre Olmedo, uno de los pocos exorcistas autorizados por el Vaticano para intervenir en casos de posesiones demoníacas.',
		popularity: 890.798,
		poster_path: '/aNlCqSfAV4BhHqaxmXdcaYM4iTF.jpg',
		release_date: '2022-11-04',
		title: '13 exorcismos',
		video: false,
		vote_average: 6,
		vote_count: 34
	},
	{
		adult: false,
		backdrop_path: '/AsEgGeccI32SwMBkxpwhOkhbzmF.jpg',
		genre_ids: [28, 878, 53, 27],
		id: 1011679,
		original_language: 'en',
		original_title: 'Shark Side of the Moon',
		overview:
			'Hace décadas, la URSS desarrolló tiburones imposibles de matar y los lanzó a la luna. Hoy, un equipo de astronautas estadounidenses enfrentará la lucha de sus vidas.',
		popularity: 925.584,
		poster_path: '/n4WFqga2OXJMudjCmggKeDiuD7N.jpg',
		release_date: '2022-08-12',
		title: 'Shark Side of the Moon',
		video: false,
		vote_average: 5.3,
		vote_count: 112
	},
	{
		adult: false,
		backdrop_path: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
		genre_ids: [28, 35, 14],
		id: 594767,
		original_language: 'en',
		original_title: 'Shazam! Fury of the Gods',
		overview:
			'Billy Batson y sus hermanos adoptivos, que se transforman en superhéroes al decir "¡Shazam!", se ven obligados a volver a la acción y luchar contra las Hijas de Atlas, a quienes deben evitar que use un arma que podría destruir el mundo.',
		popularity: 949.581,
		poster_path: '/apLp2w1JVMHi0sYJpLJBDDUdyuB.jpg',
		release_date: '2023-03-15',
		title: '¡Shazam! La furia de los dioses',
		video: false,
		vote_average: 7,
		vote_count: 251
	},
	{
		adult: false,
		backdrop_path: '/pxJbfnMIQQxCrdeLD0zQnWr6ouL.jpg',
		genre_ids: [28, 35, 53],
		id: 1077280,
		original_language: 'en',
		original_title: 'Die Hart',
		overview:
			'El cómico estadounidense Kevin Hart quiere ser una estrella de acción, pero para conseguir un papel que cambie su vida, primero tiene que aprender a ser un héroe de acción.',
		popularity: 931.464,
		poster_path: '/xz91Gre0w7tyl99jGEh5oGc8DQ7.jpg',
		release_date: '2023-02-22',
		title: 'Muere, Hart',
		video: false,
		vote_average: 6.2,
		vote_count: 216
	},
	{
		adult: false,
		backdrop_path: '/sRfX2XPjyL7nRKVRKXVG6D0bVQI.jpg',
		genre_ids: [27, 53],
		id: 884184,
		original_language: 'en',
		original_title: 'Consecration',
		overview:
			'Después del presunto suicidio de su hermano sacerdote, Grace viaja al remoto convento escocés donde cayó y murió. Desconfiando del relato de la Iglesia, descubre un asesinato, un sacrilegio y una inquietante verdad sobre sí misma.',
		popularity: 1119.737,
		poster_path: '/yQTRmPzKAdLodknnPVtImm6FWPZ.jpg',
		release_date: '2023-02-09',
		title: 'Consecration',
		video: false,
		vote_average: 6.9,
		vote_count: 21
	},
	{
		adult: false,
		backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
		genre_ids: [18],
		id: 677179,
		original_language: 'en',
		original_title: 'Creed III',
		overview:
			'Después de dominar el mundo del boxeo, Adonis Creed ha prosperado tanto en su carrera como en su vida familiar. Cuando un amigo de la infancia y ex prodigio de boxeo, Damien Anderson, resurge después de cumplir una larga sentencia en prisión, está ansioso por demostrar que merece su disparo en el ring. El enfrentamiento entre los antiguos amigos es más que una pelea. Para resolver el puntaje, Adonis debe poner su futuro en la línea para luchar contra Damien, un luchador que no tiene nada que perder.',
		popularity: 915.761,
		poster_path: '/fcFMd3HdyX7r5gtFwVnn2qr5Yhq.jpg',
		release_date: '2023-03-01',
		title: 'Creed III',
		video: false,
		vote_average: 7.1,
		vote_count: 433
	},
	{
		adult: false,
		backdrop_path: '/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg',
		genre_ids: [878, 27, 35],
		id: 536554,
		original_language: 'en',
		original_title: 'M3GAN',
		overview:
			'Un ingeniero en robótica de una empresa de juguetes construye una muñeca realista que comienza a cobrar vida propia.',
		popularity: 790.418,
		poster_path: '/ogSpQMynabVu91Bi7AuUA8tshfb.jpg',
		release_date: '2022-12-28',
		title: 'M3GAN',
		video: false,
		vote_average: 7.4,
		vote_count: 2202
	}
];

const generos = [
	{
		id: 28,
		name: 'Acción'
	},
	{
		id: 12,
		name: 'Aventura'
	},
	{
		id: 16,
		name: 'Animación'
	},
	{
		id: 35,
		name: 'Comedia'
	},
	{
		id: 80,
		name: 'Crimen'
	},
	{
		id: 99,
		name: 'Documental'
	},
	{
		id: 18,
		name: 'Drama'
	},
	{
		id: 10751,
		name: 'Familia'
	},
	{
		id: 14,
		name: 'Fantasía'
	},
	{
		id: 36,
		name: 'Historia'
	},
	{
		id: 27,
		name: 'Terror'
	},
	{
		id: 10402,
		name: 'Música'
	},
	{
		id: 9648,
		name: 'Misterio'
	},
	{
		id: 10749,
		name: 'Romance'
	},
	{
		id: 878,
		name: 'Ciencia ficción'
	},
	{
		id: 10770,
		name: 'Película de TV'
	},
	{
		id: 53,
		name: 'Suspense'
	},
	{
		id: 10752,
		name: 'Bélica'
	},
	{
		id: 37,
		name: 'Western'
	}
];

// Ejercicio 1
// Función que retorna el número total de peliculas
function totalDePeliculas() {
	return peliculas.length;
}
console.log('total de peliculas', totalDePeliculas());

// Ejercicio 2
// Función que devuelve el nombre de la pelicula con mayor popularidad
// HINT:
// campo a analizar _popularity_
// Iterar todas las películas guardando:
// 1. el index o posición de la pelicula con mayor popularidad
// 2. el valor de mayor popularidad como tal
function peliculaConMayorPopularidad() {
	let mayorPopularidad = 0;
	let posicionMP = -1;
	for (let i = 0; i < peliculas.length; i++) {
		if (peliculas[i].popularity > mayorPopularidad) {
			mayorPopularidad = peliculas[i].popularity;
			posicionMP = i;
		}
	}
	return peliculas[posicionMP].title;
}
console.log('Pelicula más popular', peliculaConMayorPopularidad());

// Ejercicio 3:
// Función que retorna el nombre de la película con más generos

// Ejercicio 4:
// Función que imprime los géneros a los que pertecene la pimera película
// Es decir, la película de la posición 0

// [53,35,80]
function generosDeLaPrimeraPelicula() {
	const generosPelicula0 = peliculas[0].genre_ids;
	for (let i = 0; i < generosPelicula0.length; i++) {
		const generoIdActual = generosPelicula0[i];
		for (let g = 0; g < generos.length; g++) {
			if (generos[g].id === generoIdActual) {
				console.log(generos[g].name);
			}
		}
	}
}

console.log('generos de la pelicula 0', peliculas[0].title);
generosDeLaPrimeraPelicula();
