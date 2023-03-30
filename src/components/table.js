import React, { Fragment } from "react";
import EditData from "./EditData";
import ReadData from "./ReadData";

export default function table({
  newData,
  handleEditClick,
  Id,
  handleEditChange,
  editFormData,
  handleClickCancel,
  handleClickDelete,
  handleClickSave
}) {
  return (
    <>
      <h4 className="text-center mt-4">Login Details</h4>
        <table className="mb-2">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item, index) => {
              return (
                <Fragment>
                  {Id===null&& (
                    <ReadData
                    item={item}
                    index={index}
                    handleEditClick={handleEditClick}
                    handleClickDelete={handleClickDelete}
                  />
                  )}

                  {Id===index+1 &&(
                    <EditData
                    index={index}
                    item={item}
                    handleEditChange={handleEditChange}
                    editFormData={editFormData}
                    handleClickCancel={handleClickCancel}
                    handleClickSave={handleClickSave}
                  />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
    </>
  );
}
