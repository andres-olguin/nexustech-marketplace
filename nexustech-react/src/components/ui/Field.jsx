import { useId } from 'react';
import Icon from './Icon.jsx';

export default function Field({ label, id, as: Element = 'input', error, hint, icon, hideLabel = false, children, className = '', ...props }) {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const messages = [error ? fieldId + '-error' : '', hint ? fieldId + '-hint' : ''].filter(Boolean).join(' ') || undefined;
  return (
    <div className={'nt-field ' + className}>
      <label htmlFor={fieldId} className={hideLabel ? 'visually-hidden' : 'nt-label'}>{label}</label>
      <div className={'nt-input-wrap' + (icon ? ' nt-input-wrap--icon' : '')}>
        {icon && <Icon name={icon} size={18} />}
        <Element {...props} id={fieldId} className={(Element === 'select' ? 'form-select' : 'form-control') + ' nt-input' + (error ? ' nt-input--error' : '')} aria-invalid={error ? true : undefined} aria-describedby={messages}>{children}</Element>
      </div>
      {error && <p id={fieldId + '-error'} className="nt-field-error">{error}</p>}
      {hint && <p id={fieldId + '-hint'} className="nt-field-hint">{hint}</p>}
    </div>
  );
}
