import { useEffect, useState } from 'react';
import Button from '../ui/Button.jsx';
import Field from '../ui/Field.jsx';
import Icon from '../ui/Icon.jsx';
import ExchangeRatePanel from './ExchangeRatePanel.jsx';
import { categories, formatCLP } from '../../utils/format.js';

export default function FilterPanel({ category, onCategory, maxPrice, onMaxPrice, onClear, exchange, showUSD, onCurrency }) {
  const [open, setOpen] = useState(() => window.matchMedia('(min-width: 992px)').matches);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 992px)');
    const update = (event) => setOpen(event.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return <aside className="nt-filter-panel" aria-label="Filtros del catálogo"><div className="nt-filter-heading"><button className="nt-filter-toggle" aria-expanded={open} aria-controls="nexus-filters" onClick={() => setOpen(!open)}><Icon name="filter" size={18} /><strong>Filtrar catálogo</strong><Icon name="chevron" size={16} /></button><Button variant="ghost" className="nt-clear-filters" onClick={onClear}>Limpiar</Button></div>
    {open && <div className="nt-filter-body" id="nexus-filters"><Field label="Categoría" as="select" value={category} onChange={(e) => onCategory(e.target.value)}><option value="all">Todas las líneas</option>{categories.map((cat) => <option key={cat}>{cat}</option>)}</Field><div className="nt-budget"><label htmlFor="presupuesto">Presupuesto máximo</label><strong>{formatCLP(maxPrice)}</strong><input id="presupuesto" type="range" min="0" max="2500000" step="25000" value={maxPrice} aria-valuetext={formatCLP(maxPrice)} onChange={(e) => onMaxPrice(Number(e.target.value))} /><span>$0<span>$2.500.000</span></span></div><ExchangeRatePanel exchange={exchange} showUSD={showUSD} onCurrency={onCurrency} /><div className="nt-filter-note"><Icon name="shield" size={18} /><p>Catálogo y compras de demostración para el taller.</p></div></div>}
  </aside>;
}
