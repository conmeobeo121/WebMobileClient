import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isAddProduct = !id;

    const [product, setProduct] = useState({
        title: '',
        price: null,
        category: ''
    });

    useEffect(() => {
        const fetchManager = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/mockDataProducts/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchManager();
    }, [id]);

    const onSave = async (e) => {
        e.preventDefault();

        const titleProduct = e.target.elements.txtName.value;
        const priceProduct = e.target.elements.txtEmail.value;
        const categoryProduct = e.target.elements.txtAccess.value;

        if (!titleProduct || !priceProduct || !categoryProduct) {
            alert('Please enter complete information.');
            return;
        }

        try {
            if (isAddProduct) {
                const response = await axios.post('http://localhost:3000/mockDataProducts', {
                    title: titleProduct,
                    price: priceProduct,
                    category: categoryProduct,
                });

                console.log('New product has been added:', response.data);
            } else {
                const response = await axios.put(`http://localhost:3000/mockDataProducts/${id}`, {
                    title: titleProduct,
                    price: priceProduct,
                    category: categoryProduct,
                });

                console.log('product has been updated:', response.data);
            }

            navigate('/manager-profile/product-manager');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="my-4">{isAddProduct ? 'Add Product' : 'Update Product'}</h2>
                    <form onSubmit={onSave}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter title product"
                                name='txtName'
                                defaultValue={product.title}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter price product"
                                name='txtEmail'
                                defaultValue={product.price}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter category"
                                name='txtAccess'
                                defaultValue={product.category}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <Link to='/manager-profile/product-manager' className='btn btn-danger'>
                                Cancel
                            </Link>
                            <button type='submit' className='btn btn-primary'>
                                {isAddProduct ? 'Add Product' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
