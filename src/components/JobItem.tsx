import { useState } from 'react';
import type { Job, Candidate } from '../types';

interface Props {
  job: Job;
  candidate: Candidate | null;
  onApply: (jobId: string, repoUrl: string) => Promise<void>;
}

export default function JobItem({ job, candidate, onApply }: Props) {
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'error' | 'success'; msg: string } | null>(null);

  const handleApply = async () => {
    setLoading(true); setStatus(null);
    try {
      await onApply(job.id, repoUrl);
      setStatus({ type: 'success', msg: '¡Postulación enviada con éxito!' });
    } catch (err: any) {
      setStatus({ type: 'error', msg: err.message || 'Error desconocido' });
    } finally { setLoading(false); }
  };

  return (
    <div className="p-5 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md">
      <h3 className="text-lg font-bold text-gray-800 mb-3">{job.title}</h3>
      <input type="url" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-3 text-sm outline-none focus:border-blue-500"
        placeholder="URL de tu repositorio" disabled={!candidate || loading} />
      <button onClick={handleApply} disabled={loading || !candidate || !repoUrl}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded font-medium disabled:opacity-50">
        {loading ? 'Enviando...' : 'Submit'}
      </button>
      {status && <p className={`mt-3 text-sm font-medium ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
        {status.msg}
      </p>}
    </div>
  );
}