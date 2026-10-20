import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import Field from '../components/ui/Field.jsx';
import Icon from '../components/ui/Icon.jsx';
import useValidatedForm from '../hooks/useValidatedForm.js';
import { isEmail } from '../utils/format.js';

function LoginForm({ onLogin }) {
  const form = useValidatedForm({ nombre: '', email: '', password: '' }, (values) => {
    const errors = {};
    if (values.nombre.trim().length < 2) errors.nombre = 'Ingresa tu nombre de al menos 2 caracteres.';
    if (!isEmail(values.email)) errors.email = 'Ingresa un correo válido.';
    if (values.password.length < 4) errors.password = 'Escribe una clave de ejemplo de al menos 4 caracteres.';
    return errors;
  }, onLogin);
  const props = (name) => ({ name, value: form.values[name], onChange: form.change, error: form.errors[name] });
  return <form ref={form.ref} onSubmit={form.submit} noValidate><Field label="Nombre de usuario" {...props('nombre')} required maxLength={80} autoComplete="nickname" /><Field label="Correo electrónico" {...props('email')} required type="email" maxLength={160} autoComplete="email" /><Field label="Contraseña de ejemplo" {...props('password')} required type="password" maxLength={80} autoComplete="off" placeholder="Clave para probar el formulario" hint="Solo valida el formulario; no se guarda ni se verifica con un servidor." /><Button type="submit" icon="user" className="nt-full-width">Ingresar en modo demo</Button></form>;
}
export default function LoginPage({ user, onLogin, onLogout }) {
  return <div className="nt-account-layout"><header className="nt-page-heading"><span className="nt-eyebrow">CAMPUS HUB</span><h1>{user ? 'Tu cuenta' : 'Bienvenido a NexusTech'}<span>.</span></h1><p>Una experiencia compartida para encontrar tu próximo equipo.</p><div className="nt-account-art"><Icon name="cpu" size={70} /></div></header><Card title={user ? 'Perfil de demostración' : 'Iniciar sesión'} description="Sesión local para demostrar las interacciones del proyecto.">{user ? <div className="nt-profile"><span className="nt-profile-avatar">{user.nombre.slice(0, 1).toUpperCase()}</span><h2>{user.nombre}</h2><p>{user.email}</p><span className="nt-demo-hint">Campus Hub UNAB</span><Button variant="secondary" icon="logout" onClick={onLogout}>Cerrar sesión</Button></div> : <LoginForm onLogin={onLogin} />}</Card></div>;
}
