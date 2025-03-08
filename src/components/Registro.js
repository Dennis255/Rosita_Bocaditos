import React, { useState } from 'react';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
  });

  const [formErrors, setFormErrors] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.nombre) errors.nombre = 'Nombre es requerido';
    if (!formData.apellido) errors.apellido = 'Apellido es requerido';
    if (!formData.email) {
      errors.email = 'Correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Correo electrónico no es válido';
    }
    if (!formData.contraseña) errors.contraseña = 'Contraseña es requerida';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:3001/Registro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        
        if (response.ok) {
          setResponseMessage(result.message);
        } else {
          setResponseMessage(result.message || 'Error en el registro');
        }
      } catch (error) {
        setResponseMessage('Error al conectar con el servidor');
        console.error('Error al enviar datos:', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          {formErrors.apellido && <p className="error">{formErrors.apellido}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
          {formErrors.contraseña && <p className="error">{formErrors.contraseña}</p>}
        </div>
        <button type="submit">Registrar</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default Registro;



/*
import React, { useState } from 'react';

const Registro = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log('Form data submitted:', formData);
      // Aquí puedes añadir la lógica para enviar los datos al servidor
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && <p className="error">{formErrors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
*/