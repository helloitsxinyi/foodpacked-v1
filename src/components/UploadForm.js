import React, { useState } from "react";
import { connect } from "react-redux";
import { name } from "./actions";

const UploadForm = ({ nameHandler, name }) => {
  // const itemHandler = (e) => {
  //   setItem(e.target.value);
  // };
  // const priceHandler = (e) => {
  //   setPrice(e.target.value);
  // };
  // const uploadHandler = (e) => {
  //   e.preventDefault();

  //   if (name === "" || price === "" || item === "") {
  //     alert("Error: One or more fields are empty. Please check!");
  //   } else {
  //     setUpload([
  //       ...uploads,
  //       {
  //         name: name,
  //         item: item,
  //         price: currformatter.format(price),
  //         id: Date.now(),
  //       },
  //     ]);
  //     setName("");
  //     setItem("");
  //     setPrice("");
  //   }
  // };

  // format value of price entered
  var currformatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SGD",
  });

  const reset = () => {
    // any way to clear without needing the refresh function?
    localStorage.clear();
    // consider using replace method if you want to reload page with slight change in query string
    window.location.reload();
  };

  return (
    <div>
      <h1 id="upload-form" className="title">
        {" "}
        Have a FoodPack? Let everyone know!{" "}
      </h1>
      <div className="upload-container">
        <form>
          <input
            onChange={(e) => {
              nameHandler(e.target.value);
              console.log(name);
            }}
            type="text"
            placeholder="Shop name"
          />

          {/* <input
            value={item}
            onChange={itemHandler}
            type="text"
            placeholder="Item name"
          />
          <input
            value={price}
            onChange={priceHandler}
            type="number"
            placeholder="Price"
          /> */}

          <button
            className="submit"
            // onClick={(e) => {
            //   uploadHandler(e);
            //   uploadCounter(e);
            // }}
            type="submit"
          >
            <i className="fas fa-plus-square"> </i>
          </button>
        </form>

        {/* make function to show s (if >1) or no s (if <1) */}
        <p className="counter">
          {/* {" "}
          You have uploaded {addCount} listings and deleted {deleteCount}{" "}
          listings! */}
          <button onClick={reset}> Reset </button>
        </p>
      </div>
    </div>
  );
};

// mapState: view, read
const mapStateToProps = (state) => ({
  name: state.name.value,
});

// mapDispatch: mutation
const mapDispatchToProps = (dispatch) => ({
  // nameHandler is a function that is a prop
  // nameHandler is function that calls the dispatch action
  nameHandler: (value) => {
    // calling name action with payload value
    dispatch(name(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
