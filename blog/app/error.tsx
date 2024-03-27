'use client';

export default function Error({
    error,
    reset,
}: {
    error : Error;
    reset: () => void;
}) {
    return (
        <div className="border-red-700 bg-red-900">
            <h2>Something went wrong !</h2>
            <button
                onClick={
                    () => reset()
                }
            >
            </button>
        </div>
    )
}