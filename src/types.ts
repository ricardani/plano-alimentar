export interface VariationItem {
    alternatives: string[];
    description?: string;
    recipe?: string[];
}

export interface PlanVariation {
    title?: string;
    items: VariationItem[];
}

export interface PlanSection {
    title: string;
    time?: string;
    variations: PlanVariation[];
}

export interface NutritionalPlan {
    name: string;
    sections: PlanSection[];
}