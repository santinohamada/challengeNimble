import { useState, useEffect } from 'react';
import { fetchCandidate, fetchJobs, applyJob } from './lib/api';
import type { Candidate, Job } from './types';
import CandidateForm from './components/CandidateForm';
import JobList from './components/JobList';
import { formatApiError } from './lib/utils';

export default function App() {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs()
      .then(setJobs)
      .catch(err => setError('Fallo al cargar empleos: ' + err.message));
  }, []);

  const handleFetchCandidate = async (email: string) => {
    setLoading(true);
    setError('');
    try { setCandidate(await fetchCandidate(email)); }
    catch (err: any) {
      setError(formatApiError(err));
    }
    setLoading(false);
  };

  const handleApply = async (jobId: string, repoUrl: string) => {
    if (!candidate) return;
    await applyJob(candidate.uuid, jobId, candidate.candidateId, repoUrl, candidate.applicationId);
  };
  console.log(candidate, jobs)
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">

      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            Tech Recruiting
          </h1>
          <p className="text-neutral-500 mt-2 text-sm">
            Postulate a posiciones técnicas en segundos.
          </p>
        </header>

        {/* Error */}
        {error && (
          <div className="mt-3 p-3 rounded-md text-sm font-medium border bg-red-50 text-red-700 border-red-200">
            {error}
          </div>
        )}

        {/* Candidate */}
        {!candidate ? (
          <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
            <CandidateForm
              onFetchCandidate={handleFetchCandidate}
              loading={loading}
            />
          </div>
        ) : (
          <div className="bg-white border border-neutral-200 rounded-xl p-5 mb-8 flex items-center justify-between">
            <div className="text-sm">
              <span className="text-neutral-500">Validado como</span>
              <div className="font-medium">
                {candidate.firstName} {candidate.lastName}
              </div>
            </div>
          </div>
        )}

        {/* Jobs */}
        <section className="space-y-4">
          <JobList
            jobs={jobs}
            candidate={candidate}
            onApply={handleApply}
          />
        </section>

      </main>
    </div>
  );
}