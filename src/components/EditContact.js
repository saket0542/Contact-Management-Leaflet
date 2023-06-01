import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {  useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setFirstName(currentContact.firstName);
    setLastName(currentContact.lastName);
    setStatus(currentContact.staus);
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkFirstNameExists= contacts.filter((contact) =>
      contact.firstName === firstName && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkLastNameExists = contacts.filter((contact) =>
      contact.lastName === lastName && contact.id !== currentContact.id
        ? contact
        : null
    );

    if (!firstName|| !lastName || !status) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkFirstNameExists.length > 0 && checkLastNameExists>0 ) {
      return toast.error("This User already Exists");
    }

    const data = {
      id: currentContact.id,
      firstName,
      lastName,
      status,
    };

    updateContact(data);
    toast.success("Contact updated successfully!!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={firstName}
                  placeholder={"FirstName"}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={lastName}
                  placeholder={"LastName"}
                  onChange={(e) => setLastName(e.target.value)}
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
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);