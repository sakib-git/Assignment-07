import React from 'react';

const Resolved = ({ resolved }) => {
  return (
    <div>
      {resolved.length === 0 ? <span className="font-medium text-gray-500">No resolved tasks yet.</span> : <span className="text-2xl font-medium text-gray-500">Resolved Task</span>}
      {resolved.map((res, i) => (
        <div key={i} className="mt-2 rounded-md bg-[#e0e7ff] p-4">
          <span className="text-center text-[17px] font-bold">{res.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Resolved;
