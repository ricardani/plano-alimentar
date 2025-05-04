import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const VariationDescription = ({description}: {description?: string}) => {
    const [showInfoModal, setShowInfoModal] = useState(false);

    const handleCloseInfoModal = () => setShowInfoModal(false);
    const handleShowInfoModal = () => setShowInfoModal(true);

    if(!description) {
        return null;
    }

return (<> 
    <button type="button" className="btn btn-lg btn-outline-primary p-0 border-0 mx-2" onClick={handleShowInfoModal}><i className="bi bi-info-circle" /></button>
        <Modal show={showInfoModal} onHide={handleCloseInfoModal} key={description}>
            <Modal.Header closeButton>
                <Modal.Title>Descrição</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    {description}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseInfoModal}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}