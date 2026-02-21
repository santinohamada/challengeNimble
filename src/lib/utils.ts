export function formatApiError(err: any): string {
    if (err?.details?.fieldErrors) {
        const messages = Object.entries(err.details.fieldErrors)
            .flatMap(([field, msgs]) =>
                (msgs as string[]).map(m => `${field}: ${m}`)
            );
        return messages.join(' • ');
    }

    if (err?.error) return err.error;
    if (err?.message) return err.message;

    return 'Ocurrió un error inesperado';
}