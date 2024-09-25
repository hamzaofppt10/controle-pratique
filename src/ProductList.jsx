// Inside ProductList.js
import React, { useContext, useState } from 'react';
// Import AddForm and EditForm components
import AddForm from './AddForm';
import EditForm from './EditForm';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ProductContext from './ProductContext';

export default function ProductList ()  {
  const { state, dispatch } = useContext(ProductContext);
  const [isEditing, setIsEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setProductToEdit(product);
  };

  const closeEdit = () => {
    setIsEditing(false);
    setProductToEdit(null);
  };

  return (
    <div className="container mt-3">
      <h2>Product List</h2>
      <AddForm />
      {isEditing ? (
        <EditForm productToEdit={productToEdit} closeEdit={closeEdit} />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Label</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity in Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.label}</td>
                <td><img src={product.image} alt={product.label} width="50" /></td>
                <td>{product.price}</td>
                <td>{product.qteStock}</td>
                <td>
                  <FaEdit className="text-primary me-2" onClick={() => handleEdit(product)} />
                  <FaTrash className="text-danger" onClick={() => handleDelete(product.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
