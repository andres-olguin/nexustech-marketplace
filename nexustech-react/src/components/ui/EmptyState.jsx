import Icon from './Icon.jsx';
export default function EmptyState({ title, description, icon = 'search', action }) {
  return <div className="nt-empty"><span className="nt-empty-icon"><Icon name={icon} size={30} /></span><h2>{title}</h2><p>{description}</p>{action}</div>;
}
