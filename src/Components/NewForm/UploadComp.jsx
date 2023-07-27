import React, { useEffect, useState } from "react";
import "./NewForm.css";
import { useFirebase } from "../../context/firebase";
import { useNavigate } from "react-router-dom";
import Select from "react-select";



const UploadComp = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

    
  const aoi = [
    { label: "Development Boards", value: "Development Boards" },
    { label: "Sensors", value: "Sensors" },
    { label: "Accessories and Wires", value: "Accessories and Wires" },

  ];


  const [name, setName] = useState();
  const [sup_Name, setSup_Name] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [price, setPrice] = useState();
  const [type, setType] = useState(null);

  const [loading, setLoading] = useState(false);
 
  const changeHandler = (selectedOption) => {
    setType(selectedOption.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await firebase.handleAddComponents(
      name,
      type,
      sup_Name,
      description,
      location,
      thumbnail,
      price,
    );
    setLoading(false);
    navigate("/dashbaord");
  };

  return (
    <div className="formContainer">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="newForm">
          <div className="newLeft">
            <form className="newWrapper">
              <h1>Upload Component</h1>

              <div className="f-onerow">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Component Name"
                  required
                />
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="text"
                  placeholder="Component Cost"
                  required
                />
              </div>

              <div className="f-onerow">
                <input
                  onChange={(e) => setSup_Name(e.target.value)}
                  value={sup_Name}
                  type="text"
                  placeholder="Supplier Name"
                  required
                />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  type="text"
                  placeholder="location"
                  required
                />
              </div>
              
            <Select
                options={aoi}
                defaultValue={type}
                placeholder="Area(s) of Interest"
                onChange={changeHandler}
                required
                isSearchable
              />

              

              <div className="f-margintop">
                <label>Upload Cover Photo</label>
                <div className="f-radio">
                  <input
                    onChange={(e) => setThumbnail(e.target.files[0])}
                    type="file"
                  />
                </div>
              </div>

              <div className="f-testarea">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  name="prof-bg"
                  cols="10"
                  rows="10"
                  placeholder="Enter component description and other specifications"
                ></textarea>
              </div>

              <button
                className="submitForm"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </button>
            </form>
          </div>

          <div className="newRight"></div>
        </div>
      )}
    </div>
  );
};

export default UploadComp;