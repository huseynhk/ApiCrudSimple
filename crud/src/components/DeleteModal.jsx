import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({
  deleteUser,
  show,
  deletedItem,
  closeDeleteModal,
  loading,
}) => {
  return (
    <Modal show={show} onHide={closeDeleteModal}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary fs-3">
          Confirm Deletion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-primary fs-5">
        Are you sure you want to delete
        <span className="text-danger fs-4 ms-2 me-1">
          {deletedItem && deletedItem.fullName}
        </span>
        ?
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <Button
          variant="danger"
          className="px-5 py-2"
          onClick={() => deleteUser(deletedItem.id)}
        >
          {loading ? "Loading..." : "Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
