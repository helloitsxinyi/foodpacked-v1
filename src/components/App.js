import React, { useState, useEffect } from "react";
import Header from "./Header";
import Uploads from "./Uploads";
import UploadForm from "./UploadForm";
import Logout from "./Logout";
import { useSelector, useDispatch } from "react-redux";

// need to fix the logout button: it overlaps with header if too small vw

function App() {
  // const [name, setName] = useState("");
  // const [item, setItem] = useState("");
  // const [price, setPrice] = useState("");
  // const [uploads, setUpload] = useState([]);
  // const [addCount, setAddCount] = useState(0);
  // const [deleteCount, setDeleteCount] = useState(0);

  // useEffect(() => {
  //   getUploadsAndCount();
  // }, []);

  // useEffect(() => {
  //   saveUploadsAndCount();
  // }, [uploads, addCount, deleteCount]);

  // const getUploadsAndCount = () => {
  //   if (localStorage.getItem("uploads") === null) {
  //     localStorage.setItem("uploads", JSON.stringify([]));
  //     localStorage.setItem("addCount", JSON.stringify([]));
  //     localStorage.setItem("deleteCount", JSON.stringify([]));
  //   } else {
  //     let localUploads = JSON.parse(localStorage.getItem("uploads"));
  //     let localCount = JSON.parse(localStorage.getItem("addCount"));
  //     let localDelete = JSON.parse(localStorage.getItem("deleteCount"));
  //     setUpload(localUploads);
  //     setAddCount(localCount);
  //     setDeleteCount(localDelete);
  //   }
  // };

  // const saveUploadsAndCount = () => {
  //   localStorage.setItem("uploads", JSON.stringify(uploads));
  //   localStorage.setItem("addCount", JSON.stringify(addCount));
  //   localStorage.setItem("deleteCount", JSON.stringify(deleteCount));
  // };

  return (
    <div className="App">
      <Header tagline="to FoodPacked!" />
      {/* <Uploads
      // uploads={uploads}
      // setUpload={setUpload}
      // addCount={addCount}
      // setAddCount={setAddCount}
      // deleteCount={deleteCount}
      // setDeleteCount={setDeleteCount}
      /> */}
      <UploadForm
      // name={name}
      // setName={setName}
      // item={item}
      // setItem={setItem}
      // price={price}
      // setPrice={setPrice}
      // uploads={uploads}
      // setUpload={setUpload}
      // addCount={addCount}
      // setAddCount={setAddCount}
      // deleteCount={deleteCount}
      />

      <Logout />

      {/* <button>
        <a href="#header" className="to-top">
          Back to top
        </a>
      </button> */}
    </div>
  );
}

export default App;
