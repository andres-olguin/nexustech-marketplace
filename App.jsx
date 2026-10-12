import React, { useState } from 'react';
import { useLogica } from './useLogica';

function App() {
  // Andrés extrae tus funciones :)
  const { items, errores, agregarItem, cancelarItem, reservarItem } = useLogica();
  
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    const exito = agregarItem(nombre, precio);
    if (exito) {
      setNombre('');
      setPrecio('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Gestión de Carrito y Reservas</h1>
      
      {/* FORMULARIO */}
      <form onSubmit={manejarEnvio} style={{ marginBottom: '20px' }}>
        <div>
          <input 
            type="text" 
            placeholder="Nombre del producto" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
          {errores.nombre && <span style={{ color: 'red' }}> {errores.nombre}</span>}
        </div>
        <div style={{ marginTop: '10px' }}>
          <input 
            type="number" 
            placeholder="Precio" 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
          />
          {errores.precio && <span style={{ color: 'red' }}> {errores.precio}</span>}
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Agregar al sistema</button>
      </form>

      {/* LISTA DE DATOS */}
      <h2>Listado de Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <strong>{item.nombre}</strong> - ${item.precio} ({item.estado})
            
            {/* ACCIONES PRINCIPALES */}
            <div style={{ marginTop: '5px' }}>
              {item.estado === 'disponible' && (
                <button onClick={() => reservarItem(item.id)}>Reservar</button>
              )}
              <button onClick={() => cancelarItem(item.id)} style={{ marginLeft: '10px', color: 'red' }}>
                Cancelar/Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;