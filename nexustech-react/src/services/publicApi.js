export const DOLLAR_ENDPOINT = 'https://mindicador.cl/api/dolar';

// Consulta real; nunca se sustituye una respuesta fallida por una tasa inventada.
export async function getDollarRate(signal) {
  const controller = new AbortController();
  let timedOut = false;
  const abort = () => controller.abort();
  if (signal?.aborted) abort();
  signal?.addEventListener('abort', abort, { once: true });
  const timeout = setTimeout(() => { timedOut = true; controller.abort(); }, 8000);
  try {
    const response = await fetch(DOLLAR_ENDPOINT, { signal: controller.signal });
    if (!response.ok) throw new Error('La API respondió con un error. Intentá nuevamente.');
    const data = await response.json();
    if (data.codigo !== 'dolar' || !Array.isArray(data.serie)) throw new Error('La API devolvió un formato inesperado.');
    const records = data.serie.filter((r) => Number.isFinite(r.valor) && r.valor > 0 && !Number.isNaN(Date.parse(r.fecha))).sort((a, b) => Date.parse(b.fecha) - Date.parse(a.fecha));
    if (!records.length) throw new Error('La API no incluyó una tasa válida.');
    return { value: records[0].valor, date: records[0].fecha, source: 'mindicador.cl' };
  } catch (error) {
    if (timedOut) throw new Error('La consulta demoró demasiado. Intentá nuevamente.');
    if (signal?.aborted) throw error;
    throw new Error(error.name === 'TypeError' ? 'No se pudo conectar con la API. Revisá tu conexión e intentá nuevamente.' : error.message);
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener('abort', abort);
  }
}
