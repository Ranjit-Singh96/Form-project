import React from "react";

export default function EditData(props) {
  return (
    <tr key={props.index+1}>
      <td>
        <input
          type="text"
          className="form-control"
          name="username"
          value={props.editFormData.username}
          onChange={props.handleEditChange}
          required
        />
      </td>
      <td>
        <input
          type="email"
          className="form-control"
          name="email"
          value={props.editFormData.email}
          onChange={props.handleEditChange}
          required
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          name="address"
          value={props.editFormData.address}
          onChange={props.handleEditChange}
          required
        />
      </td>
      <td>
        <button type="button" className="btn btn-danger btn-sm mb-sm-1" onClick={()=>props.handleClickSave(props.index)}>
          Update
        </button>
        <button type="button" className="btn btn-danger btn-sm mx-1" onClick={props.handleClickCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
}
