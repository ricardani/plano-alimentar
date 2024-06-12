import { NutritionalPlan } from "./types";

export const NUTRITIONALPLAN: NutritionalPlan = {
    "name": "Ricardo",
    "sections": [
        {
            "title": "Pequeno Almoço",
            "time": "07:00",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": ["1 fatia de pão integral"]
                        },
                        {
                            "alternatives": ["1 fatia de queijo magro"]
                        },
                        {
                            "alternatives": ["1 fatia de fiambre de perú ou frango", "1 ovo"]
                        },
                        {
                            "alternatives": ["1 papa de fruta"]
                        }
                    ]
                },
                {
                    "items": [
                        {
                            "alternatives": ["60g de Nestum zero açúcar", "70g de cereais corn flakes"]
                        },
                        {
                            "alternatives": ["250ml de leite magro mimosa", "100g iogurte grego natural"]
                        },
                        {
                            "alternatives": ["10g whey"]
                        },
                        {
                            "alternatives": ["1 dose de fruta*"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Lanche da Manhã 1 (Pós treino)",
            "time": "09:30",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": ["Iogurte proteico", "20g de proteína"]
                        },
                        {
                            "alternatives": ["1 dose de fruta*"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Lanche da Manhã 2",
            "time": "11:30",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": ["3 Bolachas de arroz ou milho", "Pacote de bolachas 0 açúcar", "6 bolachas de água e sal"]
                        },
                        {
                            "alternatives": ["Queijinho babybel light"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Almoço",
            "time": "13:30",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": ["1 prato de Sopa"],
                            description: "máximo uma batata, de preferência sem"
                        },
                        {
                            "alternatives": ["125g de arroz", "125g de massa", "125g de batata", "125g de feijão", "125g de grão"]
                        },
                        {
                            "alternatives": ["100g de carne", "100g de peixe"],
                            "description": "optar preferencialmente por carnes mais magras como: peito de frango, peito de perú, lombo de porco, bife de vaca, fígado de vaca, coração de vaca, salmão, atum, cavala, sardinha, peixes brancos (dourada e robalo, por exemplo) e bacalhau"
                        },
                        {
                            "alternatives": ["Legumes a gosto"],
                            "description": "brócolos, tomate (fruta), pepino, feijão verde, couve flor, couve roxa, cenoura, cebola..."
                        },
                        {
                            "alternatives": ["1 colher de sopa de azeite extra virgem"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Lanche da Tarde",
            "time": "16:00",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": ["Panquecas"],
                            "recipe": [
                                "1 ovo inteiro",
                                "30g de farinha de aveia ou espelta",
                                "Leite magro até formar uma massa semilíquida",
                                "topping - molhos zero calorias ou doces zero açúcar",
                                "1 colher de sopa de cacau magro em pó (opcional)",
                                "Edulcorante a gosto (opcional)"
                            ]
                        },
                        {
                            "alternatives": ["1 dose de fruta*"]
                        },
                        {
                            "alternatives": ["1 pudim proteico continente 20g proteína"]
                        }
                    ]
                },
                {
                    "items": [
                        {
                            "alternatives": ["2 fatias de pão integral"]
                        },
                        {
                            "alternatives": ["2 fatias de queijo magro derretido"]
                        },
                        {
                            "alternatives": ["2 fatias de fiambre de perú ou frango", "2 ovos"]
                        },
                        {
                            "alternatives": ["1 dose de fruta*"]
                        }
                    ]
                },
                {
                    "title": "Opção dias sem treino",
                    "items": [
                        {
                            "alternatives": ["Gelatina 0 açúcar a gosto"]
                        },
                        {
                            "alternatives": ["1 dose de fruta*"]
                        },
                        {
                            "alternatives": ["Pudim proteico"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Jantar",
            "time": "20:00",
            "variations": [
                {
                    "title": "",
                    "items": [
                        {
                            "alternatives": ["1 prato de Sopa (máximo uma batata, de preferência sem)"]
                        },
                        {
                            "alternatives": ["125g de arroz", "125g de massa", "125g de batata", "125g de feijão", "125g de grão"]
                        },
                        {
                            "alternatives": ["125g de carne", "125g de peixe"],
                            "description": "optar preferencialmente por carnes mais magras como: peito de frango, peito de perú, lombo de porco, bife de vaca, fígado de vaca, coração de vaca, salmão, atum, cavala, sardinha, peixes brancos (dourada e robalo, por exemplo) e bacalhau"
                        },
                        {
                            "alternatives": ["Legumes a gosto"],
                            "description": "brócolos, tomate (fruta), pepino, feijão verde, couve flor, couve roxa, cenoura, cebola..."
                        },
                        {
                            "alternatives": ["1 colher de sopa de azeite extra virgem"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Ceia (opcional)",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": ["1 dose de fruta*"]
                        },
                        {
                            "alternatives": ["1 gelado < 80 calorias (3 a 4 vezes por semana)"]
                        }
                    ]
                },
                {
                    "items": [
                        {
                            "alternatives": ["Bolacha de arroz ou milho com queijo creme e compota 0 açucar;"]
                        }
                    ]
                },
                {
                    "items": [
                        {
                            "alternatives": ["Gelatina 0 açúcar"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "*Equivalentes de pão e cereais (1 dose)",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": [
                                "Meio pão branco",
                                "2 bolachas tipo cream cracker",
                                "2/3 bolachas tipo maria",
                                "1 colher se sopa de granola",
                                "1 colher de sopa de aveia",
                                "1 fatia de pão de forma 0 açúcar",
                                "1/2 pacote de bolachas 0 açúcar continente (20g)"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "*Equivalentes de Fruta (1 dose de fruta)",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": [
                                "1 unidade média de Kiwi (110g)",
                                "1 unidade média de laranja (160g)",
                                "1 unidade pequena de pera (150g)",
                                "1 unidade de nectarina (130g)",
                                "1 unidade de pêssego (145g)",
                                "90 gramas de romã",
                                "1 unidade pequena de maçã (90g)",
                                "1 unidade pequena de banana (95g)",
                                "2 tangerinas (164g)",
                                "2 ameixas (124g)",
                                "2 fatias de ananás (138g)",
                                "170g de melancia",
                                "160g de melão",
                                "120g de framboesas/mirtilos",
                                "6 unidades médias de morango (160g)",
                                "10 uvas (70g)",
                                "113 gramas de manga"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Suplementação",
            "time": "07:00",
            "variations": [
                {
                    "items": [
                        {
                            "alternatives": ["6g de creatina monohidratada - todos os dias"]
                        }
                    ]
                }
            ]
        }
    ]
};
