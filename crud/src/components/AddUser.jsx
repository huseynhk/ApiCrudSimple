import { useState, useEffect } from "react";
import { AddUsers } from "../api/addRequest";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import useForm from "../hooks/UseForm";
import { isInputFilled } from "../utils/IsInputFill";

const initialState = {
  fullName: "",
  age: 0,
  email: "",
  position: "",
};

const AddUser = ({ inputRef, setFocus, loading, setLoading, fetchUsers }) => {
  const [newUser, setNewUser] = useState(initialState);

  // const [newUser, handleInputChange, resetForm] =
  // useForm(initialState); // custom hook ile

  const handleAddUser = async () => {
    setLoading(true);
    await AddUsers(newUser);
    setNewUser(initialState);
    fetchUsers();
    // resetForm(); // custom hook ile
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    toast.success("User added successfully!", {
      autoClose: 1000,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-white my-4">Add User</h1>
        <div className="bg-dark-subtle w-50 text-center rounded  border border-primary">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={newUser.fullName}
              onChange={handleInputChange}
              className="p-2 w-75 my-2 border border-primary rounded"
              ref={inputRef}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Position"
              name="position"
              value={newUser.position}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={newUser.age}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>

          <Button
            className="my-3 px-5 py-2 fs-5 w-75"
            onClick={handleAddUser}
            disabled={!isInputFilled(newUser)}
            style={{
              pointerEvents: isInputFilled(newUser) ? "auto" : "none",
            }}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
