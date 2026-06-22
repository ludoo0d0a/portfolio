export const cv = {
	name: 'Ludovic Valente',
	title: 'Développeur mobile & full-stack',
	email: 'ludovic.valente@gmail.com',
	location: 'Luxembourg',
	links: {
		github: 'https://github.com/ludoo0d0a',
		linkedin: 'https://www.linkedin.com/in/ludovicvalente/',
	},
	summary:
		'Développeur passionné par les applications mobiles et les outils du quotidien. Je conçois des produits orientés utilisateur, de l’idée au déploiement sur les stores.',
	skills: {
		languages: ['Kotlin', 'TypeScript', 'JavaScript', 'Python'],
		mobile: ['Android', 'Jetpack Compose', 'Kotlin Multiplatform'],
		tools: ['Git', 'Android Studio', 'VS Code', 'Netlify'],
	},
	experience: [
		{
			company: 'Projets personnels',
			role: 'Développeur',
			period: '2020 — présent',
			bullets: [
				'Conception et publication d’applications Android (Scora, Gaton, MyTime…).',
				'Outils web et mobile pour la productivité (Resume, Telma, Julius).',
			],
		},
	],
	education: [
		{
			school: 'À compléter',
			degree: 'Formation / diplôme',
			period: '—',
		},
	],
	languages: [
		{ name: 'Français', level: 'Natif' },
		{ name: 'Anglais', level: 'Professionnel' },
	],
} as const;

export const cvUrl = 'https://ludovicvalente.geoking.fr';
export const cvPdfUrl = 'https://ludovicvalente.geoking.fr/pdf/resume-fr.pdf';
