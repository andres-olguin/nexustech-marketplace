export const formatCLP = (amount) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount);
export const formatUSD = (amount) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'USD', currencyDisplay: 'code', maximumFractionDigits: 2 }).format(amount);
export const normalize = (text) => String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
export const formatDate = (date) => new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'America/Santiago' }).format(new Date(date));
export const categories = ['Workstations', 'Hardware', 'Periféricos', 'Soluciones'];
export const finishes = ['Gris Espacial', 'Negro Mate', 'Plata Titanio'];
export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
