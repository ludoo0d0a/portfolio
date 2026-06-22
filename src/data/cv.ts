export const cv = {
	name: 'Ludovic Valente',
	title: 'Ingénieur logiciel fullstack · SFEIR Luxembourg',
	location: 'Luxembourg',
	links: {
		github: 'https://github.com/ludoo0d0a',
		linkedin: 'https://www.linkedin.com/in/ludovicvalente/',
	},
	summary:
		'Développeur senior fullstack, architecte IT, tech lead et développeur Flutter/Android. Je crée des applications modernes avec des technologies émergentes, en m’appuyant sur une architecture efficace.',
	experience: [
		{
			company: 'SFEIR',
			location: 'Luxembourg',
			period: '2017 — présent',
			role: 'Ingénieur fullstack, puis Engineering manager — architecture & développement',
			clients: ['BIL', 'Société Générale', 'Temenos', 'Foyer', 'Fundsquare', 'Bourse de Luxembourg', 'STATEC'],
			tags: ['Java', 'SpringBoot', 'Kafka', 'Microservices', 'Kubernetes', 'Cloud'],
		},
		{
			company: 'SOGETI',
			location: 'Luxembourg',
			period: '2001 — 2017',
			role: 'Ingénieur fullstack — institutions européennes & nationales',
			clients: [
				'Parlement européen',
				'Cour de justice européenne',
				'Bibliothèque nationale du Luxembourg',
				'STATEC',
				'Société Générale Bank & Trust',
				'Editus',
			],
			tags: ['Java / J2EE', 'Spring', 'ElasticSearch', 'Angular', 'ExtJs', 'Android'],
		},
	],
	skills: [
		{ name: 'Frontend', items: ['React', 'Angular', 'VueJs', 'TypeScript', 'Redux', 'Figma'] },
		{ name: 'Backend', items: ['Java', 'SpringBoot', 'Node.js', 'Kotlin', 'ElasticSearch', 'Kafka', 'PostgreSQL', 'MongoDB'] },
		{ name: 'Mobile', items: ['Android / Compose / KMP', 'Flutter', 'iOS / Swift', 'Capacitor'] },
		{ name: 'Cloud & CI/CD', items: ['AWS', 'Azure / AKS', 'GCP', 'Kubernetes', 'GitHub Actions', 'ArgoCD'] },
	],
	education: [
		{
			school: 'École nationale d’Ingénieurs de Metz',
			degree: 'Diplôme d’ingénieur — généraliste, spécialité mécanique',
			period: '1995 — 2000',
		},
	],
	languages: [
		{ name: 'Français', level: 'Langue maternelle' },
		{ name: 'Anglais', level: 'Courant' },
	],
	interests: ['Geocaching', 'Tennis', 'Randonnée', 'Handball', 'Guitare', 'Piano'],
} as const;

export const cvUrl = 'https://ludovicvalente.geoking.fr';
export const cvPdfUrl = 'https://ludovicvalente.geoking.fr/pdf/resume-fr.pdf';
