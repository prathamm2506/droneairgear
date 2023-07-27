import React, { useState } from "react";
import "./NewForm.css";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/firebase";
import Select from "react-select";

const InternshipCreate = () => {
  const navigate = useNavigate();

  const firebase = useFirebase();

  const categorySelect = [
    { label: "Mapping & Survey", value: "survey" },
    { label: "Designing ", value: "design" },
    { label: "Flight ", value: "flight" },
    { label: "Manufacture ", value: "manufracture" },
  ];

  const modeSelect = [
    { label: "Online", value: "online" },
    { label: "Offline ", value: "offline" },

  ];

  const [post, setPost] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [com_dis, setCom_dis] = useState("");
  const [mode, setMode] = useState("");
  const [duration, setDuration] = useState("");
  const [stipend, setStipend] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [post_dis, setPost_dis] = useState("");
  const [req_elg, setReq_elg] = useState("");
  const [com_link, setLink] = useState("");

  const [loading, setLoading] = useState(false);

  const categoryHandler = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const modeHandler = (selectedOption) => {
    setMode(selectedOption.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await firebase.handleCreateNewInternship(
      post,
      category,
      company,
      com_dis,
      mode,
      duration,
      stipend,
      location,
      date,
      post_dis,
      req_elg,
      com_link
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
            <form className="newWrapper" onSubmit={handleSubmit}>
              <h1>Post New Internship</h1>

              <div className="f-onerow">
                <input
                  onChange={(e) => setPost(e.target.value)}
                  value={post}
                  type="text"
                  placeholder="Post Title"
                  required
                  className="input2"
                />

              </div>
              <div className="f-onerow">
                <input
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                  type="text"
                  placeholder="Company Name"
                  required
                />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  type="text"
                  placeholder="Location"
                  required
                />
              </div>

              <Select
                options={categorySelect}
                defaultValue={category}
                placeholder="Category"
                required
                onChange={categoryHandler}
                isSearchable
              />

              <div className="f-onerow" style={{marginTop:'1.2rem'}}> 
                <input
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
                  type="number"
                  placeholder="Duration (in months)"
                  required
                />

                <input
                  onChange={(e) => setStipend(e.target.value)}
                  value={stipend}
                  type="number"
                  placeholder="Stipend "
                  required
                />


              </div>
              <div >
                <label>Start Date</label>
                <div className="f-onerow">
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    type="date"
                    placeholder="Start Date"
                    required
                    className="input2"
             
                  />
   
                </div>
              </div>

              <Select
                options={modeSelect}
                defaultValue={mode}
                placeholder="Mode"
                onChange={modeHandler}
                required
                isSearchable
              />

              <div className="f-onerow" style={{marginTop:'1.2rem'}}>
                <input
                  onChange={(e) => setLink(e.target.value)}
                  value={com_link}
                  type="text"
                  placeholder="Website Reference (eg. https://drop.com)"
                  required
                  className="input2"
                />
              </div>

              <div className="f-testarea">
                <textarea
                  onChange={(e) => setCom_dis(e.target.value)}
                  value={com_dis}
                  name="prof-bg"
                  cols="10"
                  rows="10"
                  placeholder="Enter company description"
                ></textarea>
              </div>

              <div className="f-testarea">
                <textarea
                  onChange={(e) => setPost_dis(e.target.value)}
                  value={post_dis}
                  name="prof-bg"
                  cols="10"
                  rows="10"
                  placeholder="Enter details about the internship and key responsibilities"
                ></textarea>
              </div>

              <div className="f-testarea">
                <textarea
                  onChange={(e) => setReq_elg(e.target.value)}
                  value={req_elg}
                  name="prof-bg"
                  cols="10"
                  rows="10"
                  placeholder="Enter elegibility or people who can apply"
                ></textarea>
              </div>

              <button className="submitForm" type="submit">
                Register
              </button>
            </form>
          </div>

          <div className="newRight">
            {/* <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" alt="" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipCreate;
