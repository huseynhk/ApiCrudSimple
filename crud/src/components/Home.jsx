import { useEffect, useState, useRef } from "react";
import { GetUsers } from "../api/getRequest";
import EditUser from "./EditUser";
import { DeleteUser } from "../api/deleteRequest";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";
import AddUser from "./AddUser";
import useGetUser from "../hooks/GetUser";

const Home = () => {
  // const { user , fetchUsers } = useGetUser();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  // Edit Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [loadingEdit, setLoadingEdit] = useState(false);

  // Delete Modal
  const [show, setShow] = useState(false);
  const [deletedItem, setDeletedItem] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const fetchUsers = async () => {
    const response = await GetUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, [isModalOpen]);

  const setFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const openModal = (user) => {
    setIsModalOpen(true);
    setEditedItem(user);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditedItem(null);
  };
  const openDeleteModal = (user) => {
    setShow(true);
    setDeletedItem(user);
  };
  const closeDeleteModal = () => {
    setShow(false);
    setDeletedItem(null);
  };

  const deleteUser = async (userId) => {
    setLoadingDelete(true);
    await DeleteUser(userId);
    fetchUsers();
    toast.success("User deleted successfully!", {
      autoClose: 1000,
    });
    setTimeout(() => {
      setLoadingDelete(false);
      closeDeleteModal();
    }, 1200);
  };
  return (
    <>
      <AddUser
        inputRef={inputRef}
        setFocus={setFocus}
        loading={loading}
        setLoading={setLoading}
        fetchUsers={fetchUsers}
      />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-white my-3">User List</h1>

        <table className="table table-striped w-75 fs-4 ">
          <thead>
            <tr>
              <th>S.No</th>
              <th>FullName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Position</th>
              <th>Update</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="pt-3">{index + 1}</td>
                <td className="pt-3">{user.fullName}</td>
                <td className="pt-3">{user.age}</td>
                <td className="pt-3"> {user.email}</td>
                <td className="pt-3">{user.position}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => openModal(user)}
                  >
                    Modal
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => openDeleteModal(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editedItem && (
          <EditUser
            isModalOpen={isModalOpen}
            editedItem={editedItem}
            closeModal={closeModal}
            loading={loadingEdit}
            setLoading={setLoadingEdit}
          />
        )}
        <DeleteModal
          deleteUser={deleteUser}
          show={show}
          deletedItem={deletedItem}
          closeDeleteModal={closeDeleteModal}
          loading={loadingDelete}
        />
      </div>
    </>
  );
};

export default Home;
