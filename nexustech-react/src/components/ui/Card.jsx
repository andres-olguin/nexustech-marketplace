export default function Card({ children, title, description, className = '' }) {
  return <section className={'nt-panel ' + className}>{title && <div className="nt-panel-heading"><h2>{title}</h2>{description && <p>{description}</p>}</div>}{children}</section>;
}
