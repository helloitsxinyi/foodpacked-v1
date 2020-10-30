import React from "react";
import UploadShops from "./UploadShops";

const Uploads = ({
  uploads,
  setUpload,
  addCount,
  setAddCount,
  deleteCount,
  setDeleteCount,
}) => {
  return (
    <div>
      <h1 id="uploads" className="title">
        Your recent uploads
      </h1>

      <div className="shops">
        {uploads.map((shop) => (
          <a href="#">
            <UploadShops
              name={shop.name}
              item={shop.item}
              price={shop.price}
              key={shop.id}
              uploads={uploads}
              setUpload={setUpload}
              shop={shop}
              addCount={addCount}
              setAddCount={setAddCount}
              deleteCount={deleteCount}
              setDeleteCount={setDeleteCount}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Uploads;
