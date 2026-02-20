import type { Candidate, Job, ApplyResponse } from '../src/types';

const BASE_URL = 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net';

export const fetchCandidate = async (email: string): Promise<Candidate> => {
  const res = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${email}`);
  if (!res.ok) throw new Error(await res.text() || 'Error obteniendo candidato');
  return res.json();
};

export const fetchJobs = async (): Promise<Job[]> => {
  const res = await fetch(`${BASE_URL}/api/jobs/get-list`);
  if (!res.ok) throw new Error(await res.text() || 'Error obteniendo posiciones');
  return res.json();
};

export const applyJob = async (
  uuid: string, jobId: string, candidateId: string, repoUrl: string
): Promise<ApplyResponse> => {
  const res = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uuid, jobId, candidateId, repoUrl })
  });
  if (!res.ok) throw new Error(await res.text() || 'Error enviando postulación');
  return res.json();
};