import React, { useEffect, useState } from "react";
import "./Main.css";
import Form from "./components/form";
import Table from "./components/table";
import "bootstrap/dist/css/bootstrap.css";

export default function Main() {
  const [tableData, setTableData] = useState(()=>{
    const data=JSON.parse(localStorage.getItem('tabledata'));
    if(data){
      return data;
    }
    else{
      return []
    }
  });
 const [Id, setId] = useState(null);
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    address: "",
  });


  //Set data in local storage.
  useEffect(()=>{
      localStorage.setItem('tabledata',JSON.stringify(tableData))

  },[tableData])

  // Function for input value change.
  const changeData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    // preventDefault() method prevent(stop) the default action that belongs to the event.
    // It means if we have submit action ,then preventDefault() stop the submit data.
    e.preventDefault();
    if (
      inputData.username !== "" &&
      inputData.email !== "" &&
      inputData.address !== ""
    ) {
      setTableData([
        ...tableData,
        {
          username: inputData.username,
          email: inputData.email,
          address: inputData.address,
        }
      ]);
      const refreshInput = {
        username: "",
        email: "",
        address: "",
      };
      setInputData(refreshInput);
    }
  };

  //Function for data shows when you click on edit.
  const handleEditClick = (index, item) => {
    setId(index + 1);
    const editFormValues = {
      username: item.username,
      email: item.email,
      address: item.address,
    };
    setEditFormData(editFormValues);
  };

  const [editFormData, setEditFormData] = useState({
    username: "",
    email: "",
    address: "",
  });

  //Function for value changes, when update the value.
  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  //function for setting data when data save after update.
  const handleClickSave = (index) => {
    const editedData = {
      username: editFormData.username,
      email: editFormData.email,
      address: editFormData.address,
    };
    tableData[index] = editedData;
    setTableData([...tableData]);
    setId(null);
  };

  const handleClickCancel = () => {
    setId(null);
  };

  //Function for delete specific data.
  const handleClickDelete = (index) => {
    tableData.splice(index,1);
    setTableData([...tableData]);
  };
  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row g-0">
          <div className="col-md-4">
            <Form
              changeData={changeData}
              submitData={submitData}
              inputData={inputData}
            />
          </div>
          <div className="col-md-8 mt-3">
            {tableData.length !== 0 ? (
              <Table
                newData={tableData}
                Id={Id}
                handleEditClick={handleEditClick}
                handleEditChange={handleEditChange}
                editFormData={editFormData}
                handleClickCancel={handleClickCancel}
                handleClickDelete={handleClickDelete}
                handleClickSave={handleClickSave}
              />
            ) : (
              <div className="table-messege">
                No data will be available currently..
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
