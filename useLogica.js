import { useState } from 'react';
import { productosIniciales } from './data';

export const useLogica = () => {
  const [items, setItems] = useState(productosIniciales);
  const [errores, setErrores] = useState({});

  // Función de validación práctica
  const validarFormulario = (nombre, precio) => {
    let nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre no puede estar vacío";
    if (precio <= 0) nuevosErrores.precio = "El precio debe ser mayor a 0";
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0; // true si es valido
  };

  // Acción: Agregar un item al carrito
  const agregarItem = (nombre, precio) => {
    if (validarFormulario(nombre, precio)) {
      const nuevoItem = {
        id: Date.now(),
        nombre,
        precio: parseFloat(precio),
        estado: "disponible"
      };
      setItems([...items, nuevoItem]);
      return true;
    }
    return false; // Fallo la validacion
  };

  // Acción de Cancelar o eliminar del carrito
  const cancelarItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Acción para Reservar o Comprar
  const reservarItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, estado: "reservado" } : item));
  };

  return { items, errores, agregarItem, cancelarItem, reservarItem };
};