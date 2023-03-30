import React from "react";

export default function Form(props) {
  return (
    <>
      <h3 className="login">LOGIN</h3>
      <form className="form" onSubmit={props.submitData}>
        <div className="m-3">
          <label htmlFor="username" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            className="form-control "
            value={props.inputData.username}
            name="username"
            onChange={props.changeData}
            required
          />
        </div>
        <div className="m-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control "
            value={props.inputData.email}
            name="email"
            onChange={props.changeData}
            required
          />
        </div>
        <div className="m-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            value={props.inputData.address}
            name="address"
            onChange={props.changeData}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Add Data
        </button>
      </form>
    </>
  );
}
