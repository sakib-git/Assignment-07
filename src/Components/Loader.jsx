import React from 'react';

const Loader = () => {
  return (
    <div className="flex h-[200px] items-center justify-center rounded-md bg-white shadow">
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loader;
