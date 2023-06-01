import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPost = ({ contacts, addContact }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [status, setStatus]=useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkFirstNameExists = contacts.filter(
      (contact) => contact.firstName === firstName
    );
    const checkLastNameExists = contacts.filter(
      (contact) => contact.checkLastNameExists === lastName
    );

    if (!firstName||!lastName||!status) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkFirstNameExists.length > 0 && checkLastNameExists) {
      return toast.error("User Already Exist");
    }
    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      firstName,
      lastName,
      status
    };

    addContact(data);
    toast.success("Contact added successfully!!");
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="form-group d-flex gap-2">
            <p>Status:</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="statusActive"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
              />
              <label className="form-check-label" htmlFor="statusActive">
                Active
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="statusInactive"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
              />
              <label className="form-check-label" htmlFor="statusInactive">
                Inactive
              </label>
            </div>
          </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Save Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
