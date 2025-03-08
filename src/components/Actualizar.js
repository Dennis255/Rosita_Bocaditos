import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Actualizar = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setName(product.nombre);
    setDescription(product.descripcion);
    setPrice(product.precio);
    setIsAdding(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Está seguro de que desea eliminar este producto?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/product/${id}`);
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/product/${editingProduct}`, {
        name,
        description,
        price,
      });
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setName('');
    setDescription('');
    setPrice('');
    setIsAdding(true);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/product', {
        name,
        description,
        price,
      });
      setIsAdding(false);
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Actualizar Productos</h2>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{ ...styles.button, margin: '0 10px' }}>Ir a Inicio</button>
      </Link>
      <button style={styles.button} onClick={handleAdd}>Agregar Nuevo Producto</button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Descripción</th>
            <th style={styles.th}>Precio</th>
            <th style={styles.th}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td style={styles.td}>{product.nombre}</td>
              <td style={styles.td}>{product.descripcion}</td>
              <td style={styles.td}>{product.precio}</td>
              <td style={styles.td}>
                <button style={styles.button} onClick={() => handleEdit(product)}>Editar</button>
                <button style={styles.button} onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {(editingProduct || isAdding) && (
        <form onSubmit={editingProduct ? handleUpdate : handleAddProduct} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nombre:</label>
            <input style={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Descripción:</label>
            <textarea style={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Precio:</label>
            <input style={styles.input} type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <button style={styles.button} type="submit">{editingProduct ? 'Actualizar Producto' : 'Agregar Producto'}</button>
          {editingProduct && <button style={styles.button} type="button" onClick={handleCancelEdit}>Cancelar</button>}
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  header: {
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#007BFF',
    color: 'white',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '10px',
    width: '100%',
  },
  label: {
    display: 'block',
    textAlign: 'left',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
};

export default Actualizar;
