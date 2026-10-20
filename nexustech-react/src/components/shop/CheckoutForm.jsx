import Button from '../ui/Button.jsx';
import Field from '../ui/Field.jsx';
import useValidatedForm from '../../hooks/useValidatedForm.js';
import { formatCLP, isEmail } from '../../utils/format.js';

function validate(values) {
  const errors = {};
  if (values.nombre.trim().length < 3) errors.nombre = 'Ingresa el nombre de quien recibe.';
  if (!isEmail(values.email)) errors.email = 'Ingresa un correo válido.';
  if (values.direccion.trim().length < 5) errors.direccion = 'Ingresa una dirección de al menos 5 caracteres.';
  if (values.ciudad.trim().length < 3) errors.ciudad = 'Ingresa la ciudad de destino.';
  return errors;
}
export default function CheckoutForm({ total, user, onConfirm, onCancel }) {
  const form = useValidatedForm({ nombre: user?.nombre || '', email: user?.email || '', direccion: '', ciudad: '' }, validate, onConfirm);
  const props = (name) => ({ name, value: form.values[name], onChange: form.change, error: form.errors[name] });
  return <form ref={form.ref} onSubmit={form.submit} noValidate><p className="nt-demo-hint">Usa datos de ejemplo para probar el despacho y el seguimiento.</p><Field label="Nombre del destinatario" {...props('nombre')} autoFocus required maxLength={100} /><Field label="Correo de contacto" {...props('email')} type="email" required maxLength={160} /><Field label="Dirección de despacho" {...props('direccion')} required maxLength={180} placeholder="Av. de ejemplo 123" /><Field label="Ciudad / comuna" {...props('ciudad')} required maxLength={80} placeholder="Viña del Mar" /><div className="nt-checkout-total"><span>Total del pedido</span><strong>{formatCLP(total)}</strong></div><div className="nt-form-actions"><Button variant="secondary" onClick={onCancel}>Volver al carrito</Button><Button type="submit" icon="check">Confirmar pedido simulado</Button></div></form>;
}
