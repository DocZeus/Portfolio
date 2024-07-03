import React from 'react';

interface ErrorProps {
  error: Error | string | null;
  reset?: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }: ErrorProps) => {
  const errorMessage = error ? (typeof error === 'string' ? error : error.message || 'Unknown error') : '';

  const handleReset = () => {
    if (reset) {
      try {
        reset();
      } catch (err) {
        console.error("Error occurred during reset: ", err);
      }
    } else {
      console.warn("No reset function provided for Error component");
    }
  };

  return (
    error ? (
      <div className="h-full w-full flex-center flex-col gap-5">
        <p className="text-3xl text-red-500">Something went wrong!</p>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button className="btn" onClick={handleReset}>
          Retry
        </button>
      </div>
    ) : null
  );
};

export default Error;
