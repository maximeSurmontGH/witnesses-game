import type { IQuestion } from './store';

// question sur ma vie
// question sur notre couple
// question perso
export const maximeQueries: IQuestion[] = [
	{
		id: 'MAX Q 01',
		label: 'Quelle est ma plus grande peur ?',
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
		id: 'MAX Q 02',
		label: "nom chien d'enfance",
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
		id: 'MAX Q 03',
		label: 'Comment s appelle ma mère ?',
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
		id: 'MAX Q 04',
		label: 'Quel est mon troisième prénom ?',
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
		id: 'MAX Q 05',
		label: 'Quel célèbre personnage est née le même jour que ma personne ?',
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
		id: 'MAX Q 06',
		label: 'Quel est mon année de naissance ?',
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
		id: 'MAX Q 07',
		label: 'J ai quel age ?',
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
	}
];

export const coupleQueries: IQuestion[] = [
	{
		id: 'COUPLE Q 01',
		label: 'Depuis quand sommes nous ensemble ?',
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
		id: 'COUPLE Q 02',
		label: "ou est ce qu'on c'est rencontré ?",
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
		id: 'COUPLE Q 03',
		label: 'Comment a eu lieu la demande en mariage ?',
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
		id: 'COUPLE Q 04',
		label: 'Quel est notre série préférée ?',
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
	}
];

export const situationQueries: IQuestion[] = [
	{
		id: 'SITUATION 01',
		label: "Tu apprends que Chloé m'a trompé la vieille du mariage, que fais tu ?",
		responses: []
	},
	{
		id: 'SITUATION 02',
		label: "Je suis tombé dans la oue, j'ai pas de change, que fais tu ?",
		responses: []
	},
	{
		id: 'SITUATION 03',
		label: 'Lors de l evg, une meuf incroyable me drague, je suis pas très vrai, que fais tu ?',
		responses: []
	},
	{
		id: 'SITUATION 04',
		label:
			'Lors de l evg, je suis complètement mort, à moitié noyé dans mon vomi, mais voilà, une meuf incroyable te travaille au corp, que fais tu ?',
		responses: []
	},
	{
		id: 'SITUATION 05',
		label: "On est à l'evg, et on se retrouve qu'à deux, que fais tu ?",
		responses: []
	},
	{
		id: 'SITUATION 06',
		label:
			'Un des cuisinier a flaché sur Chloé est à décider de tous nous empoisonner pour avoir le champs libre, seul toi est encore conscient, que fais tu ?',
		responses: []
	},
	{
		id: 'SITUATION 07',
		label: 'On retrouve le DJ bourré à 21h, incapable de lancer un son, que fais tu ?',
		responses: []
	},
	{
		id: 'SITUATION 08',
		label: 'Un vieil oncle raciste commence à chanter un bon vieux chant nazi, que fais tu ?',
		responses: []
	},
	{
		id: 'SITUATION 09',
		label: 'Je suis complètement bourré ',
		responses: []
	},
	{
		id: 'SITUATION 10',
		label: "Le discours du marié démarre, j'ai un vieux bout de salade sur une dent, que fais tu ?",
		responses: []
	},
	{
		id: 'SITUATION 11',
		label:
			"La vieille du jour J je viens te voir et je te demande de m'aider à m'échapper, que fais tu ?",
		responses: []
	}
];

export const duelQueries: IQuestion[] = [
	{
		id: '1V1 01',
		label: 'Duel de barbichette',
		responses: []
	},
	{
		id: '1V1 02',
		label: 'Shooter vs shooter',
		responses: []
	},
	{
		id: '1V1 03',
		label: 'Quel est votre petit plus ?',
		responses: []
	},
	{
		id: '1V1 04',
		label: 'Shooters vs shooters',
		responses: []
	}
];

export const sheOrHeQueries: IQuestion[] = [
	{
		id: 'SHE OR HE 01',
		label: '',
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
	}
];
