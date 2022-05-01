import type { IQuestion } from './store';

export const maximeQueries: IQuestion[] = [
	{
		id: 'MAX Q 01',
		label: 'De quel mal terrible je souffre ?',
		responses: [
			{
				label: 'Misophonie',
				isCorrect: true
			},
			{
				label: 'Perlèche',
				isCorrect: false
			},
			{
				label: 'Mononucléose',
				isCorrect: false
			},
			{
				label: 'Peste',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 02',
		label: "Quel est le nom de mon chien d'enfance",
		responses: [
			{
				label: 'Jet',
				isCorrect: false
			},
			{
				label: 'Flora',
				isCorrect: false
			},
			{
				label: 'Gribouille',
				isCorrect: true
			},
			{
				label: 'Nala',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 03',
		label: "Qu'est ce que je ferais à ma crise de la quarantaine ?",
		responses: [
			{
				label: 'Je deviendrais boulanger',
				isCorrect: true
			},
			{
				label: "Je rejoins le groupe des célibataires d'Hugo et Vidal",
				isCorrect: false
			},
			{
				label: 'Je me teins les cheveux en rose et je pars vivre au Japon',
				isCorrect: false
			},
			{
				label: 'Je vous révèle ma passion pour le Pôle dance',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 04',
		label: "Qu'est ce que j'ai fais en sortant du lycée ? ",
		responses: [
			{
				label: 'Je suis rentré à HEI',
				isCorrect: false
			},
			{
				label: 'Petite balade de 3 mois en Belgique',
				isCorrect: true
			},
			{
				label: 'Une année de césure au Luxembourg',
				isCorrect: false
			},
			{
				label: 'Bénévole pendant 1 an au Mali ',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 05',
		label: 'Quel est mon anim préféré ?',
		responses: [
			{
				label: 'Gurren Lagann',
				isCorrect: true
			},
			{
				label: 'Death Note ',
				isCorrect: false
			},
			{
				label: 'SNK',
				isCorrect: false
			},
			{
				label: 'Clannad',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 06',
		label: "Combien de fois j'ai eu la boule à zéro ? ",
		responses: [
			{
				label: '0',
				isCorrect: false
			},
			{
				label: '1',
				isCorrect: false
			},
			{
				label: '2',
				isCorrect: true
			},
			{
				label: '3',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 07',
		label: "Qui m'a dépucelé ? ",
		responses: [
			{
				label: 'Une meuf Tinder ',
				isCorrect: false
			},
			{
				label: 'Chloé',
				isCorrect: false
			},
			{
				label: 'Manon',
				isCorrect: true
			},
			{
				label: 'Tonton ?',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 08',
		label: 'De quel exploit sportif je suis le plus fier? ',
		responses: [
			{
				label: "Rejoindre l'équipe E au foot ",
				isCorrect: true
			},
			{
				label: '3ème en marche sportive /4 ',
				isCorrect: false
			},
			{
				label: 'Se tordre la cheville en tournante de ping pong, manche 3',
				isCorrect: false
			},
			{
				label: 'Ceinture jaune au Taekwondo',
				isCorrect: false
			}
		]
	},
	{
		id: 'MAX Q 09',
		label: "Qu'elle a été ma pire soirée ? ",
		responses: [
			{
				label: 'HEIEINNE 1 ',
				isCorrect: false
			},
			{
				label: 'Soirée Parisienne de Saint Luc ',
				isCorrect: false
			},
			{
				label: 'Soirée chez Julien Donque ',
				isCorrect: false
			},
			{
				label: 'Un dimanche soir à Semide',
				isCorrect: true
			}
		]
	},
	{
		id: 'MAX Q 10',
		label: "Quel projet j'aimerais voir aboutir ? ",
		responses: [
			{
				label: 'MC LPP Song',
				isCorrect: true
			},
			{
				label: 'Les expressions illustrées',
				isCorrect: false
			},
			{
				label: 'La web series du projet spatial',
				isCorrect: false
			},
			{
				label: 'Les podcasts',
				isCorrect: true
			}
		]
	}
];

export const coupleQueries: IQuestion[] = [
	{
		id: 'COUPLE Q 01',
		label: 'Depuis quand sommes nous ensemble ?',
		responses: [
			{
				label: '2577 jours',
				isCorrect: false
			},
			{
				label: '2578 jours',
				isCorrect: false
			},
			{
				label: '2579 jours',
				isCorrect: true
			},
			{
				label: '2580 jours',
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 02',
		label: "Ou est ce qu'on c'est rencontré ?",
		responses: [
			{
				label: 'Au SMILE',
				isCorrect: false
			},
			{
				label: 'A HEI',
				isCorrect: true
			},
			{
				label: 'Sur Tinder',
				isCorrect: false
			},
			{
				label: "Lors d'une cousinade",
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 03',
		label: 'Comment a eu lieu la demande en mariage ?',
		responses: [
			{
				label: "Truc de compliqué, pas le temps d'expliquer, ne lancez pas Chlo svp",
				isCorrect: true
			},
			{
				label: "A Bruges, lors d'une plaine lune",
				isCorrect: false
			},
			{
				label: 'En me mouchant',
				isCorrect: false
			},
			{
				label: 'En Martinique, pendant un couché de soleil',
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 04',
		label: 'Où avons fêter nos 6 mois de relation',
		responses: [
			{
				label: 'Bellewaerde',
				isCorrect: true
			},
			{
				label: 'Pizzeria du coin',
				isCorrect: false
			},
			{
				label: 'A la maison',
				isCorrect: false
			},
			{
				label: 'Bruges',
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 05',
		label: "Quel est notre écart d'âge ?",
		responses: [
			{
				label: '50',
				isCorrect: true
			},
			{
				label: '51',
				isCorrect: false
			},
			{
				label: '52',
				isCorrect: false
			},
			{
				label: '53',
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 06',
		label: 'Où avons nous habité ensemble pour la première fois ?',
		responses: [
			{
				label: 'La Madeleine',
				isCorrect: false
			},
			{
				label: 'Au Canada',
				isCorrect: true
			},
			{
				label: '9 rue Ernest Deconynck, Lille',
				isCorrect: false
			},
			{
				label: '29 rue Kant, Lille',
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 07',
		label: 'Dans quel entreprise avons nous travaillé tous les deux ?',
		responses: [
			{
				label: 'Sopra Steria',
				isCorrect: false
			},
			{
				label: 'Worldline',
				isCorrect: false
			},
			{
				label: 'Décathlon',
				isCorrect: true
			},
			{
				label: 'OVH',
				isCorrect: true
			}
		]
	},
	{
		id: 'COUPLE Q 08',
		label: 'Combien avons nous de soeur / frêre / balle-soeur / beau-frêre ?',
		responses: [
			{
				label: '4',
				isCorrect: false
			},
			{
				label: '5',
				isCorrect: true
			},
			{
				label: '6',
				isCorrect: false
			},
			{
				label: '7',
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 09',
		label: "Qu'est ce qui nous ferait rompre ?",
		responses: [
			{
				label: 'Que je devienne végétarien ?',
				isCorrect: true
			},
			{
				label: 'Ma misophonie',
				isCorrect: true
			},
			{
				label: 'Le bordélisme de Chloé',
				isCorrect: true
			},
			{
				label: "Si je m'engueule fortement avec Manon",
				isCorrect: false
			}
		]
	},
	{
		id: 'COUPLE Q 10',
		label: 'Combien de temps avons nous perdu Pixies ?',
		responses: [
			{
				label: '15 jours',
				isCorrect: false
			},
			{
				label: '1 mois',
				isCorrect: false
			},
			{
				label: '1 mois et demi',
				isCorrect: true
			},
			{
				label: '2 mois',
				isCorrect: true
			}
		]
	}
];

export const situationQueries: IQuestion[] = [
	{
		id: 'SITUATION 01',
		label: 'Situation : Mauvais goûts ...',
		responses: []
	},
	{
		id: 'SITUATION 02',
		label: 'Situation : RIP le DJ ...',
		responses: []
	},
	{
		id: 'SITUATION 03',
		label: 'Situation : The escape ...',
		responses: []
	},
	{
		id: 'SITUATION 04',
		label: "Situation : Petit meurtre d'Agatha Christie",
		responses: []
	},
	{
		id: 'SITUATION 05',
		label: 'Situation : Oncle + alcool',
		responses: []
	}
];

export const duelQueries: IQuestion[] = [
	{
		id: '1V1 01',
		label: 'Duel de bras de fer !',
		responses: []
	},
	{
		id: '1V1 02',
		label: 'Duel de blind-test !',
		responses: []
	},
	{
		id: '1V1 03',
		label: 'Duel de dance !',
		responses: []
	},
	{
		id: '1V1 04',
		label: "Duel d'ingurgitation d'Elpépé !",
		responses: []
	},
	{
		id: '1V1 05',
		label: 'Duel de badminton !',
		responses: []
	}
];

export const sheOrHeQueries: IQuestion[] = [
	{
		id: 'SHE OR HE 01',
		label: 'Qui gère le plus les travaux ?',
		responses: [
			{
				label: 'Elle',
				isCorrect: true
			},
			{
				label: 'Lui',
				isCorrect: false
			}
		]
	},
	{
		id: 'SHE OR HE 02',
		label: 'Qui gère le plus le ménage ?',
		responses: [
			{
				label: 'Elle',
				isCorrect: false
			},
			{
				label: 'Lui',
				isCorrect: true
			}
		]
	},
	{
		id: 'SHE OR HE 03',
		label: "Qui a embrassé l'autre en premier ?",
		responses: [
			{
				label: 'Elle',
				isCorrect: true
			},
			{
				label: 'Lui',
				isCorrect: false
			}
		]
	},
	{
		id: 'SHE OR HE 04',
		label: 'Qui est le plus (beau/belle)-gosse ?',
		responses: [
			{
				label: 'Elle',
				isCorrect: true
			},
			{
				label: 'Lui',
				isCorrect: false
			}
		]
	},
	{
		id: 'SHE OR HE 05',
		label: "Qui finira par quitter l'autre ?",
		responses: [
			{
				label: 'Elle',
				isCorrect: false
			},
			{
				label: 'Lui',
				isCorrect: false
			}
		]
	},
	{
		id: 'SHE OR HE 06',
		label: 'Qui a le moins de points sur son permis ?',
		responses: [
			{
				label: 'Elle',
				isCorrect: true
			},
			{
				label: 'Lui',
				isCorrect: false
			}
		]
	},
	{
		id: 'SHE OR HE 07',
		label: 'Qui es le plus romantique ?',
		responses: [
			{
				label: 'Elle',
				isCorrect: false
			},
			{
				label: 'Lui',
				isCorrect: true
			}
		]
	},
	{
		id: 'SHE OR HE 08',
		label: 'Qui est le plus douillet',
		responses: [
			{
				label: 'Elle',
				isCorrect: false
			},
			{
				label: 'Lui',
				isCorrect: true
			}
		]
	},
	{
		id: 'SHE OR HE 09',
		label: "Qui s'occupe des papiers à la maison ?",
		responses: [
			{
				label: 'Elle',
				isCorrect: true
			},
			{
				label: 'Lui',
				isCorrect: false
			}
		]
	},
	{
		id: 'SHE OR HE 10',
		label: "Qui prendra le nom de l'autre ?",
		responses: [
			{
				label: 'Elle',
				isCorrect: true
			},
			{
				label: 'Lui',
				isCorrect: true
			}
		]
	}
];
