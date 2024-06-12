import { Variation } from "./Variation";
import { PlanVariation } from "./types";

interface SectionProps {
    id: string;
    title: string;
    variations: PlanVariation[];
    time?: string;
}

export const Section = ({ id, title, variations, time }: SectionProps) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
                    {title} {time && `(${time})`}
                </button>
            </h2>
            <div id={id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body row">
                    {variations.map((variation, index) => (
                        <Variation key={index} variation={variation} index={index} />   
                    ))}
                </div>
            </div>
        </div>
    )
}