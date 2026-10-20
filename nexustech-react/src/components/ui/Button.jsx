import Icon from './Icon.jsx';
export default function Button({ children, variant = 'primary', icon, type = 'button', className = '', ...props }) {
  return <button type={type} className={'btn nt-button nt-button--' + variant + ' ' + className} {...props}>{icon && <Icon name={icon} size={18} />}{children}</button>;
}
