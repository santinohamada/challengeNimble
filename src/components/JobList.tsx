import JobItem from './JobItem';
import type { Job, Candidate } from '../types';

interface Props {
    jobs: Job[];
    candidate: Candidate | null;
    onApply: (jobId: string, repoUrl: string) => Promise<void>;
}

export default function JobList({ jobs, candidate, onApply }: Props) {
    if (!jobs || jobs.length === 0) {
        return <p className="text-gray-500 text-center py-8">Cargando posiciones...</p>;
    }

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Posiciones Abiertas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map(job => (
                    <JobItem key={job.id} job={job} candidate={candidate} onApply={onApply} />
                ))}
            </div>
        </div>
    );
}