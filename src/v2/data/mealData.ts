import type { Meal, Reference } from '../types/meal';

export const dailyTotals = {
  energia_kcal: 2042,
  proteina_g: 160,
  hidratos_carbono_g: 191,
  gordura_g: 68
};

export const mealPlanData: Meal[] = [
  {
    id: 'pequeno-almoco',
    name: 'Pequeno-almoço',
    icon: '🌅',
    nutritionalInfo: {
      energia_kcal: 384,
      proteina_g: 22,
      hidratos_carbono_g: 50,
      gordura_g: 9
    },
    foodGroups: [
      {
        id: 'pa-hidratos',
        name: 'Hidratos de Carbono',
        variations: [
          '1 pão médio, 2 fatias (centeio, mistura, integral ou cereais)',
          'broa (60g)',
          '4-5 Bolachas de arroz ou milho (35g)',
          '4-5 Tostas simples (45g)',
          '4-5 Maria, Torrada, Marinheiras',
          '4-5 c. sopa de Flocos de aveia (40g)',
          '30g de cereais de pequeno-almoço, granola, muesli',
        ],
      },
      {
        id: 'pa-proteina',
        name: 'Proteína/Gordura',
        variations: [
          '2 fatias de queijo magro (40g)',
          '2 queijos magros Mini Babybel',
          '2 queijos frescos magros (100g)',
          '3-4 queijinhos magros (A Vaca que ri)',
          '4 fatias de fiambre',
          '1 c. sob (15g) de manteiga de amendoim',
          '2 ovos cozidos, mexidos, estrelados',
        ],
      },
      {
        id: 'pa-laticinios',
        name: 'Laticínios',
        variations: [
          '1 iogurte magro sólido/liquido ou grego ligeiro ou kefir (120-150g)',
          '200ml leite achocolatado magro',
        ],
      },
      {
        id: 'pa-fruta',
        name: 'Fruta',
        variations: [
          '1 peça de fruta média (100-150 g)',
          '1 saqueta de fruta',
        ],
      },
      {
        id: 'pa-bebida',
        name: 'Bebida',
        variations: [
          'Café',
        ],
      },
    ],
  },
  {
    id: 'lanche-manha',
    name: 'Lanche da manhã 1',
    icon: '☕',
    nutritionalInfo: {
      energia_kcal: 213,
      proteina_g: 22,
      hidratos_carbono_g: 25,
      gordura_g: 3
    },
    foodGroups: [
      {
        id: 'lm-hidratos',
        name: 'Hidratos de Carbono',
        variations: [
          '2-3 Bolachas de arroz ou milho (17g)',
          '2-3 Tostas simples (22g)',
          '2-3 Maria, Torrada, Marinheiras',
          '2-3 c. sopa de Flocos de aveia (20g)',
          '15g de cereais de pequeno-almoço, granola, muesli',
        ],
      },
      {
        id: 'lm-proteina',
        name: 'Proteína',
        variations: [
          '1 iogurte, leite ou pudim proteico (sólidos ou liquidos) (Kvarg, YoPro, Milbona, Corpos Danone, Hacendado, Mimosa, Ehrmann ou similar) - 20 a 25g de proteína por dose',
        ],
      },
    ],
  },
  {
    id: 'almoco',
    name: 'Almoço',
    icon: '🌞',
    nutritionalInfo: {
      energia_kcal: 528,
      proteina_g: 45,
      hidratos_carbono_g: 34,
      gordura_g: 25
    },
    foodGroups: [
      {
        id: 'al-hidratos',
        name: 'Hidratos de Carbono',
        variations: [
          '110g arroz cozido simples, massa cozida, quinoa, bulgur, cuscus, inhame, mandioca',
          '120g Batata cozida ou assada',
        ],
      },
      {
        id: 'al-proteina',
        name: 'Proteína',
        variations: [
          '150 g Carnes magras cozinhadas/grelhadas (frango, peru)',
          '180 g de Peixes magros cozinhados/grelhados (pescada, bacalhau, chicharro, tamboril, rodovalho, garoupa)',
          '130 g Peixes gordos e meio-gordos (salmão, sardinha, cavala, robalo, dourada)',
          '2 lata de atum em conserva ao natural',
        ],
      },
      {
        id: 'al-horticolas',
        name: 'Hortícolas',
        variations: [
          'Meio prato de horticolas cozidos/salteados ou saladas frias (colocar no máximo meia c. sopa de azeite, sumo de limão e/ou especiarias)',
        ],
      },
      {
        id: 'al-notas',
        name: 'Notas de Substituição',
        variations: [
          'Para adicionar 4-5 c. sopa de feijão/lentilhas/grão-de-bico cozidos ou 1 ovo inteiro é necessário reduzir 25-30 g de carne/peixe',
        ],
      },
    ],
  },
  {
    id: 'lanche-tarde',
    name: 'Lanche da tarde',
    icon: '🌤️',
    nutritionalInfo: {
      energia_kcal: 225,
      proteina_g: 22,
      hidratos_carbono_g: 25,
      gordura_g: 3
    },
    foodGroups: [
      {
        id: 'lt-proteina',
        name: 'Proteína',
        variations: [
          '1 iogurte, leite ou pudim proteico (sólidos ou liquidos) (Kvarg, YoPro, Milbona, Corpos Danone, Hacendado, Mimosa, Ehrmann ou similar) - 20 a 25g de proteína por dose',
        ],
      },
      {
        id: 'lt-acompanhamento',
        name: 'Acompanhamento (Fruta/Gordura/HC)',
        variations: [
          '1 peça de fruta média (100-150 g)',
          'Meio punhado de frutos gordos (12g): 2-3 nozes, castanhas do Brasil, macadâmias ou 7-8 avelãs ou 10 cajus ou 12 amêndoas, amendoins',
          '2-3 Bolachas de arroz ou milho (17g)',
          '2-3 Tostas simples (22g)',
          '2-3 Maria, Torrada, Marinheiras',
          '2-3 c. sopa de Flocos de aveia (20g)',
          '15g de cereais de pequeno-almoço, granola, muesli',
        ],
      },
    ],
  },
  {
    id: 'jantar',
    name: 'Jantar',
    icon: '🌙',
    nutritionalInfo: {
      energia_kcal: 693,
      proteina_g: 50,
      hidratos_carbono_g: 58,
      gordura_g: 29
    },
    foodGroups: [
      {
        id: 'ja-sopa',
        name: 'Sopa',
        variations: [
          'Sopa (200 g) (variar nas escolhas dos legumes, fio de azeite)',
        ],
      },
      {
        id: 'ja-hidratos',
        name: 'Hidratos de Carbono',
        variations: [
          '110g arroz cozido simples, massa cozida, quinoa, bulgur, cuscus, inhame, mandioca',
          '120g Batata cozida ou assada',
        ],
      },
      {
        id: 'ja-proteina',
        name: 'Proteína',
        variations: [
          '150 g Carnes magras cozinhadas/grelhadas (frango, peru)',
          '180 g de Peixes magros cozinhados/grelhados (pescada, bacalhau, chicharro, tamboril, rodovalho, garoupa)',
          '130 g Peixes gordos e meio-gordos (salmão, sardinha, cavala, robalo, dourada)',
          '2 lata de atum em conserva ao natural',
        ],
      },
      {
        id: 'ja-horticolas',
        name: 'Hortícolas',
        variations: [
          'Meio prato de horticolas cozidos/salteados ou saladas frias (colocar no máximo meia c. sopa de azeite, sumo de limão e/ou especiarias)',
        ],
      },
      {
        id: 'ja-sobremesa',
        name: 'Sobremesa/Bebida',
        variations: [
          '1 peça de fruta (100-150 g)',
          'Água',
        ],
      },
      {
        id: 'ja-notas',
        name: 'Notas de Substituição',
        variations: [
          'Para adicionar 4-5 c. sopa de feijão/lentilhas/grão-de-bico cozidos ou 1 ovo inteiro é necessário reduzir 25-30 g de carne/peixe',
        ],
      },
    ],
  },
];

export const generalNotes = [
  'Pesar os alimentos numa balança de cozinha para que as quantidades ingeridas, em cada refeição, sejam corretas.',
  'Variar nas frutas e legumes ingeridos ao longo do dia.',
  'Ingerir água ao longo do dia, seja durante ou fora das refeições principais.',
];

export const referenceSections: Reference[] = [
  {
    id: 'frutas',
    name: 'Equivalências de Frutas',
    subsections: [
      {
        id: 'frutas-1-unidade-media',
        name: '1 Unidade Média',
        items: [
          'kiwi',
          'laranja',
          'nectarina',
          'nêspera',
          'pera',
          'pêssego',
          'romã',
        ],
      },
      {
        id: 'frutas-1-unidade-pequena',
        name: '1 Unidade Pequena',
        items: [
          'maça',
          'banana (tipo Madeira)',
        ],
      },
      {
        id: 'frutas-2-unidades',
        name: '2 Unidades Médias',
        items: [
          'ameixa',
          'tangerina',
        ],
      },
      {
        id: 'frutas-fatia',
        name: '1 Fatia Média',
        items: [
          'ananás',
          'melancia',
          'melão',
        ],
      },
      {
        id: 'frutas-maos',
        name: 'Mão Cheia',
        items: [
          '1 mão cheia de cerejas',
          '2 mãos cheias de framboesas',
          '2 mãos cheias de mirtilos',
        ],
      },
      {
        id: 'frutas-especificas',
        name: 'Contagens Específicas',
        items: [
          '5 unidades de morango',
          '10 unidades de uvas',
          '1/4 de manga',
          '1/2 meloa',
        ],
      },
    ],
  },
  {
    id: 'queijos-magros',
    name: 'Equivalências de Queijos Magros',
    subsections: [
      {
        id: 'queijos-opcoes',
        name: 'Opções (1 porção)',
        items: [
          '1 fatia de Queijo Flamengo Light Fatias (Limiano/Terra Nosta ou similar) (20g)',
          '1 Queijo Mini Babybel Light',
          '1 Queijo Fresco Magro (50g)',
          '2 Queijinhos Light (A Vaca que ri)',
        ],
      },
    ],
  },
  {
    id: 'carnes-magras',
    name: 'Carnes Magras',
    subsections: [
      {
        id: 'carnes-magras-lista',
        name: 'Opções',
        items: [
          'Peito de frango/peru',
          'fiambre de frango/peru',
          'galinha brava',
          'perdiz',
          'cabra',
          'cavalo',
          'lebre',
        ],
      },
    ],
  },
  {
    id: 'carnes-meio-gordas',
    name: 'Carnes Meio-Gordas',
    subsections: [
      {
        id: 'carnes-meio-gordas-lista',
        name: 'Opções',
        items: [
          'Frango inteiro',
          'perna de frango',
          'peru',
          'coelho',
          'cordoniz',
          'bife de vaca',
          'bochecha',
          'cabrito',
          'costeleta de borrego',
          'febra de porco',
          'fiambre de porco',
          'fígado ou coração de porco/vaca',
          'hambúrguer de frango/peru/vaca',
          'javali',
          'pato',
          'lombo de porco',
          'secretos de porco',
          'veado',
          'vitela',
        ],
      },
    ],
  },
  {
    id: 'carnes-gordas',
    name: 'Carnes Gordas',
    subsections: [
      {
        id: 'carnes-gordas-lista',
        name: 'Opções',
        items: [
          'Costeleta de porco',
          'cachaço de porco',
          'perna de porco',
          'entrecosto',
          'pernil',
          'vaca',
          'pombo',
          'carneiro',
          'chispe',
          'língua de vaca/porco',
        ],
      },
    ],
  },
  {
    id: 'peixes-magros',
    name: 'Peixes Magros e Crustáceos',
    subsections: [
      {
        id: 'peixes-magros-lista',
        name: 'Opções',
        items: [
          'Atum em conserva (em água)',
          'bacalhau',
          'chicharro',
          'pescada',
          'tamboril',
          'rodovalho',
          'solha',
          'garoupa',
          'linguado',
          'marmota',
          'perca',
          'pargo',
          'badejo',
          'bodião',
          'cação',
          'cantarilho',
          'choupa',
          'corvina',
          'espadarte',
          'goraz',
          'maruca',
          'paloco',
          'panga',
          'sargo',
          'ameijoa',
          'berbigão',
          'búzios',
          'camarão',
          'caranguejo',
          'choco',
          'lagosta',
          'lula',
          'mexilhão',
          'polvo',
          'pota',
          'sapateira',
          'vieira',
        ],
      },
    ],
  },
  {
    id: 'peixes-meio-gordos',
    name: 'Peixes Meio-Gordos',
    subsections: [
      {
        id: 'peixes-meio-gordos-lista',
        name: 'Opções',
        items: [
          'Atum fresco',
          'carapau fresco',
          'dourada',
          'peixe-espada',
          'sardinha meio-gorda',
          'achiga',
          'cherne',
          'safio',
          'carapau em conserva',
          'cavala em conserva',
        ],
      },
    ],
  },
  {
    id: 'peixes-gordos',
    name: 'Peixes Gordos',
    subsections: [
      {
        id: 'peixes-gordos-lista',
        name: 'Opções',
        items: [
          'Atum em conserva (óleo ou azeite)',
          'salmão',
          'robalo',
          'cavala',
          'faneca',
          'sardinha gorda',
          'sardinha em conserva',
          'polvo em conserva',
          'anchova',
        ],
      },
    ],
  },
];