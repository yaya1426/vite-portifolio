import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-lg">Count: {count}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
} 