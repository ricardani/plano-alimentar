export const VariationAlternatives = ({ alternatives }: { alternatives?: string[] }) => {

    if (!alternatives || alternatives.length === 0) {
        return null;
    }

    // if (alternatives.length === 1) {
    //     return <span className="badge text-bg-light mx-2">{alternatives[0]}</span>
    // }

    return (
        <>
            {alternatives.map((alternative, index) => (
                <span key={index} className="border border-info-subtle border-2 m-1 px-1 rounded">{alternative}</span>))
            }
        </>
    )
}