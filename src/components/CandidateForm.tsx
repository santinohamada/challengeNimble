import React, { useState } from 'react';

interface Props {
    onFetchCandidate: (email: string) => void;
    loading: boolean;
}

export default function CandidateForm({ onFetchCandidate, loading }: Props) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) onFetchCandidate(email);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-5 bg-white rounded-lg shadow-md border border-gray-100">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Tu Email de Candidato:</label>
            <div className="flex gap-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="ej: correo@email.com" />
                <button type="submit" disabled={loading}
                    className="bg-gray-900 text-white px-5 py-2 rounded font-medium hover:bg-gray-800 disabled:opacity-50">
                    {loading ? 'Cargando...' : 'Ingresar'}
                </button>
            </div>
        </form>
    );
}