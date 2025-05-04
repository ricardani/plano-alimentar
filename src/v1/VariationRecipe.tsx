import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const VariationRecipe = ({ recipe }: { recipe?: string[] }) => {
    const [showRecipeModal, setShowRecipeModal] = useState(false);

    const handleCloseRecipeModal = () => setShowRecipeModal(false);
    const handleShowRecipeModal = () => setShowRecipeModal(true);


    if (!recipe || recipe.length === 0) {
        return null;
    }

    return (
        <>
            <button type="button" className="btn btn-outline-primary btn-sm p-1 mx-2" onClick={handleShowRecipeModal}>Receita</button>
            <Modal show={showRecipeModal} onHide={handleCloseRecipeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Receita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="list-group">
                        {recipe.map((recipeIngredient, index) => (
                            <li key={index} className="list-group-item">{recipeIngredient}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRecipeModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}