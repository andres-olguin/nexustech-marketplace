import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import { formatDate } from '../../utils/format.js';
export default function ExchangeRatePanel({ exchange, showUSD, onCurrency }) {
  return <div className="nt-exchange"><div className="nt-exchange-title"><Icon name="refresh" size={18} /><strong>Compara en USD</strong></div>
    {exchange.status === 'idle' && <><p>Consulta una referencia para comparar precios de tecnología.</p><Button variant="secondary" onClick={() => { onCurrency(true); exchange.load(); }}>Ver referencia USD</Button></>}
    {exchange.status === 'loading' && <p role="status"><span className="nt-spinner" />Consultando referencia…</p>}
    {exchange.status === 'error' && <div role="alert"><p>{exchange.error}</p><Button variant="secondary" onClick={() => { onCurrency(true); exchange.load(); }}>Reintentar consulta</Button></div>}
    {exchange.status === 'success' && <><p className="nt-rate-value">1 USD = <strong>{exchange.rate.value.toLocaleString('es-CL', { maximumFractionDigits: 2 })} CLP</strong></p><p className="nt-rate-date">Referencia del {formatDate(exchange.rate.date)}</p><div className="nt-currency-options" role="group" aria-label="Referencia de precios"><Button variant="ghost" aria-pressed={!showUSD} onClick={() => onCurrency(false)}>Solo CLP</Button><Button variant="ghost" aria-pressed={showUSD} onClick={() => onCurrency(true)}>CLP + USD</Button></div><a href="https://mindicador.cl" target="_blank" rel="noreferrer">Fuente: mindicador.cl<Icon name="arrow" size={13} /></a><small>Conversión aproximada. El pedido se calcula en CLP.</small><Button variant="ghost" icon="refresh" onClick={exchange.load}>Actualizar referencia</Button></>}
  </div>;
}
