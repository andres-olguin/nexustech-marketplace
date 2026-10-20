export default function Badge({ children, tone = 'cyan', className = '' }) {
  return <span className={'nt-badge nt-badge--' + tone + ' ' + className}>{children}</span>;
}
