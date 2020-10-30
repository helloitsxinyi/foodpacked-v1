import React from "react";

const UploadShops = ({
  name,
  item,
  price,
  uploads,
  setUpload,
  shop,
  addCount,
  setAddCount,
  deleteCount,
  setDeleteCount,
}) => {
  const deleteHandler = (e, el) => {
    e.preventDefault();
    setUpload(uploads.filter((el) => el.id !== shop.id));
  };
  // need to update counter after delete too
  const deleteCounter = (e) => {
    // fix this
    e.preventDefault();
    setAddCount(addCount - 1);
    setDeleteCount(deleteCount + 1);
  };

  return (
    <div className="container">
      <h2> {name}</h2>
      <h3> {item}</h3>
      <p> {price}</p>

      {/* remember to add delete function */}
      {/* maybe can add edit function also, google pls */}

      <button
        onClick={(e, el) => {
          deleteHandler(e, el);
          deleteCounter(e);
        }}
        className="trash"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default UploadShops;
