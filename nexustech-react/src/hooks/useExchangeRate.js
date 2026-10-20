import { useEffect, useState } from 'react';
import { getDollarRate } from '../services/publicApi.js';

export default function useExchangeRate() {
  const [request, setRequest] = useState(0);
  const [result, setResult] = useState({ status: 'idle', rate: null, error: '' });
  useEffect(() => {
    if (!request) return;
    const controller = new AbortController();
    setResult({ status: 'loading', rate: null, error: '' });
    getDollarRate(controller.signal)
      .then((rate) => { if (!controller.signal.aborted) setResult({ status: 'success', rate, error: '' }); })
      .catch((error) => { if (!controller.signal.aborted) setResult({ status: 'error', rate: null, error: error.message }); });
    return () => controller.abort();
  }, [request]);
  return { ...result, load: () => setRequest((current) => current + 1) };
}
