import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
export default function Footer({ storage, onReset }) {
  return <footer className="nt-footer"><div><strong>NEXUS<span>TECH</span></strong><p>Campus Hub UNAB · Proyecto académico 2026</p></div><span className="nt-storage-state"><Icon name={storage === 'saved' ? 'check' : 'info'} size={15} />{storage === 'saved' ? 'Cambios guardados en este navegador' : storage === 'session' ? 'Cambios durante esta sesión' : 'Preparando tienda'}</span><Button variant="ghost" icon="refresh" onClick={onReset}>Restaurar demostración</Button></footer>;
}
