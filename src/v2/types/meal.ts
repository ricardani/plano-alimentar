export interface FoodGroup {
  id: string;
  name: string;
  variations: string[];
}

export interface NutritionalInfo {
  energia_kcal: number;
  proteina_g: number;
  hidratos_carbono_g: number;
  gordura_g: number;
}

export interface Meal {
  id: string;
  name: string;
  icon: string;
  nutritionalInfo?: NutritionalInfo;
  foodGroups: FoodGroup[];
}

export interface Subsection {
  id: string;
  name: string;
  items: string[];
}

export interface Reference {
  id: string;
  name: string;
  subsections: Subsection[];
}