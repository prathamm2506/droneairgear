import React, { useState, useEffect } from "react";
import "./Products.css";
import Select from "react-select";
import Product1 from "../../../assets/arduino.png";
import { Link } from "react-router-dom";
import ProdList from "./ProdDetails";
import Product from "./Product";

import { useFirebase } from "../../../context/firebase";

const Products = () => {
  const [type, setType] = useState([]);
  const [components, setComponents] = useState([]);
  const firebase = useFirebase();

  const scrollToBottom = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  const changeHandler = (selectedOption) => {
    setType(selectedOption.value);
  };

  const typeSelect = [
    { label: "All", value: "all" },
    { label: "Development Boards", value: "DevBoard" },
    { label: "Sensors", value: "Sensors" },
    { label: "Accessories and Wires", value: "Accessories" },
    { label: "Others", value: "Others" },
  ];

  const priceSelect = [
    { label: "All", value: "all" },
    { label: "0-500", value: "zero" },
    { label: "500-1000", value: "hundred" },
    { label: "above 1000 ", value: "thousand" },
  ];

  useEffect(() => {
    switch (type) {
      case "all":
        firebase
          .listAllcomponents()
          .then((component) => setComponents(component.docs));
        break;
      case "DevBoard":
        firebase.DevBoard().then((component) => setComponents(component.docs));
        break;
      case "Sensors":
        firebase.Sensors().then((component) => setComponents(component.docs));
        break;
      case "Accessories":
        firebase
          .Accessories()
          .then((component) => setComponents(component.docs));
        break;
      case "Others":
        firebase.Others().then((component) => setComponents(component.docs));
        break;

      case "zero":
        firebase.zero().then((component) => setComponents(component.docs));
        break;

      case "hundred":
        firebase.hundred().then((component) => setComponents(component.docs));
        break;

      case "thousand":
        firebase
          .thousand().then((component) => setComponents(component.docs));
        break;

      default:
        firebase
          .listAllcomponents()
          .then((component) => setComponents(component.docs));
    }
  });

  return (
    <section id="pro1" class="section-p1">
      <div className="pro-head">Featured Products</div>

      <div className="productsShop">
        <div className="mainfilters">
          <div className="mainfilter">
            <Select
              options={typeSelect}
              defaultValue={type}
              placeholder="Type"
              onChange={changeHandler}
              isSearchable
            />
          </div>
          {/* <div className="mainfilter">
            <Select
              options={priceSelect}
              defaultValue={type}
              placeholder="Price"
              onChange={changeHandler}
              isSearchable
            />
          </div> */}
          <button onClick={scrollToBottom} className="exp-btn">
            Explore
          </button>
        </div>
        <div class="pro-container" style={{ padding: "1rem" }}>
          {components.map((component) => (
            <Product
              key={component.id}
              id={component.id}
              {...component.data()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
