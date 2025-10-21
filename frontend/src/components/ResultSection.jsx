import { useState } from 'react';

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '') : '';
const API_BASE_URL = rawBaseUrl || '/api';

export default function ResultSection({ answers }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setIsLoading(true);
    setError('');
    try {
      const endpoint = API_BASE_URL.endsWith('/generate-report')
        ? API_BASE_URL
        : `${API_BASE_URL}/generate-report`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });

      if (!response.ok) {
        throw new Error('Unable to generate plan at the moment.');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'personalized-weight-loss-plan.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="max-w-2xl rounded-3xl bg-white/10 p-10 text-center shadow-2xl backdrop-blur-lg">
        <span className="text-sm uppercase tracking-[0.3em] text-white/60">Personalized Results</span>
        <h2 className="mt-4 text-4xl font-semibold text-white">We got you!</h2>
        <p className="mt-4 text-lg text-white/80">
          That’s definitely something we can help you with.
          <br />
          Your personalized weight-loss plan includes natural steps for:
        </p>
        <ul className="mt-6 space-y-3 text-left text-white">
          <li>✓ Balanced diet structure</li>
          <li>✓ Improved digestion</li>
          <li>✓ Sustained energy and focus</li>
        </ul>
        {error && <p className="mt-6 text-sm text-red-200">{error}</p>}
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-brand transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? 'Generating...' : 'Generate My Personalized Plan (PDF)'}
        </button>
      </div>
    </div>
  );
}
