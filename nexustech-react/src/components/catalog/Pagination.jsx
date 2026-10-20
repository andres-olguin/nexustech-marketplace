import Button from '../ui/Button.jsx';
export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return <nav className="nt-pagination" aria-label="Páginas del catálogo"><Button variant="secondary" disabled={page <= 1} onClick={() => onChange(page - 1)}>Anterior</Button><span aria-live="polite">Página <strong>{page}</strong> de {totalPages}</span><Button variant="secondary" disabled={page >= totalPages} onClick={() => onChange(page + 1)}>Siguiente</Button></nav>;
}
