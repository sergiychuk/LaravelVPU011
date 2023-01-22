// import { useEffect, useState } from "react";
// import http from "../../http_common";

const AddProductPage = () => {
    return (
        <>
            <h1>Додати продукт</h1>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Name</span>
                </div>
                <input className="form-control" aria-label="With textarea"/>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Detail</span>
                </div>
                <input className="form-control" aria-label="With textarea"/>
            </div>
            <button type="button" className="btn btn-success">ADD</button>
        </>
    );
};

export default AddProductPage;
