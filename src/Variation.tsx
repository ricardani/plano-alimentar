import { PlanVariation } from "./types";
import { VariationAlternatives } from "./VariationAlternatives";
import { VariationDescription } from "./VariationDescription";
import { VariationRecipe } from "./VariationRecipe";

interface VariationProps {
    variation: PlanVariation;
    index: number;
}

export const Variation = ({ variation, index }: VariationProps) => {



    return (
        <div className="col-md-4">
            <div className="card m-1 border-3">
                <div className="card-header">
                    <h6 className="card-title">{variation.title ? variation.title : `Opção ${index + 1}`}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    {variation.items.map((item, index) => (
                        <li key={index} className="list-group-item d-flex align-items-center flex-wrap border-1">
                            <VariationAlternatives alternatives={item.alternatives} />
                            <VariationDescription description={item.description} />
                            <VariationRecipe recipe={item.recipe} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )
}