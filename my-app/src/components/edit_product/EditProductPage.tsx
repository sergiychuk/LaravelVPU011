import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../http_common";
import { GetProductAction } from "../home/types";
import { IProductResponse, IProductState, IUpdateProduct, ProductActionTypes } from "./types";

const EditProductPage = () => {
    const [update, updateProduct] = useState<IUpdateProduct>({
        id: 0,
        name: "",
        detail: "",
    });

    const params = useParams();

    const navigator = useNavigate();

    const onSubmit = (values: IUpdateProduct) => {
        // console.log(values);
        http.put("/api/products", values).then(resp => {
            // console.log(resp);
            navigator("/");
        });
    };

    const formik = useFormik({
        initialValues: update,
        onSubmit,
    });

    useEffect(() => {
        http.get("/api/products" + params.id).then(resp => {
            //setProduct
            // console.log(resp);
            http.get("/api/products/" + params.id).then(resp => {
                console.log(resp);

            });
        });
    }, []);
    // console.log("params:", params);

    return (
        <>
            <h1>Редагування продукту</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Name</span>
                    </div>
                    <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" aria-label="With textarea" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Detail</span>
                    </div>
                    <input type="text" id="detail" name="detail" value={formik.values.detail} onChange={formik.handleChange} className="form-control" aria-label="With textarea" />
                </div>
                <button type="submit" className="btn btn-success">ADD</button>
            </form>
        </>
    );
}

export default EditProductPage;
