import { Section } from "./Section"
import { NUTRITIONALPLAN } from './data'
import { PlanSection } from "./types"


export const SectionList = () => {
    return (
        <div className="accordion" id="accordionExample">
            {(NUTRITIONALPLAN.sections as PlanSection[]).map((section, index) => (
                <Section key={index} id={index.toString()} title={section.title} variations={section.variations} time={section.time}/>
            ))}
        </div>
    )
}