import Icon from './Icon.jsx';
import Button from './Button.jsx';
export default function Alert({ title, children, tone = 'info', action, onDismiss }) {
  return <div className={'nt-alert nt-alert--' + tone} role={tone === 'error' ? 'alert' : 'status'}>
    <Icon name={tone === 'error' ? 'alert' : tone === 'success' ? 'check' : 'info'} size={21} />
    <div className="nt-alert-copy">{title && <strong>{title}</strong>}<div>{children}</div></div>
    {action && <div className="nt-alert-action">{action}</div>}
    {onDismiss && <Button variant="ghost" icon="close" className="nt-icon-button" aria-label="Cerrar mensaje" onClick={onDismiss} />}
  </div>;
}
