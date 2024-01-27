import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductManager = () => {
    const navigate = useNavigate();
    const [products, setProducst] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/mockDataProducts')
            .then(res => {
                setProducst(res.data);
            })
            .catch(err => {
                console.error('Error fetching products: ', err.message);
            })
    }, []);

    const handleDeleteProduct = (productId) => {

        axios.delete(`http://localhost:3000/mockDataProducts/${productId}`)
            .then(res => {
                // dispatch(delItem(productId));
                setProducst(products => products.filter(product => product.id !== productId));
            })
            .catch(err => {
                console.log(`Error deleting product with ID ${productId}: ${err.message}`);
            });
    };

    const handleUpdateProduct = (productId) => {
        navigate(`/manager-profile/product-manager/update/${productId}`);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="card m-3">
                        <div className="card-header bg-primary text-white">
                            <h4 className="card-title">Product Management</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Link to='/manager-profile/product-manager/add' className='btn btn-danger'>
                                    Add product
                                </Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className="col-xs-1 col-md-1">ID Product</th>
                                            <th className="col-xs-2 col-md-2">Name</th>
                                            <th className="col-xs-2 col-md-2">Price</th>
                                            <th className="col-xs-2 col-md-2">Category</th>
                                            <th className="col-xs-2 col-md-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='align-items-center text-center'>
                                        {products.map((product, index) => (
                                            <tr key={product.id}>
                                                <td className='align-middle'>{product.id}</td>
                                                <td className='align-middle'>
                                                    <div className="d-flex align-items-center text-center gap-3 ms-4">
                                                        <span>{product.title}</span>
                                                    </div>
                                                </td>
                                                <td className='align-middle'>{product.price}</td>
                                                <td className='align-middle'>{product.category}</td>
                                                <td className='align-middle'>
                                                    <button onClick={() => handleUpdateProduct(product.id)} className="btn btn-danger me-2">Update</button>
                                                    <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductManager
