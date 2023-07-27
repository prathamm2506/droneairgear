import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../context/firebase";

const AddLectures = () => {
  const navigate = useNavigate();

  const params = useParams();

  const firebase = useFirebase();

  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.placeChapters(
      params.courseId,
      title,
      video,
      description,
    );
    navigate("/dashbaord");
  };

  



  return (
    <div className="formContainer">
      <div className="newForm">
        <div className="newLeft">
          <form className="newWrapper">
            <h1>Upload Lecture</h1>

            <div className="f-onerow">
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Title of Leacture"
                required
                className="input2"
              />
            </div>



            <div className="f-margintop" style={{margin:0}}>
              <label>Upload Video</label>
              <div className="f-radio">
                <input
                  onChange={(e) => setVideo(e.target.files[0])}
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
                placeholder="Lecture Content"
              ></textarea>
            </div>



            <button className="submitForm" onClick={handleSubmit}>
              Register
            </button>
          </form>
        </div>

        <div className="newRight">
          {/* <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default AddLectures;
