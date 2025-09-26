import React from 'react';

const TaskDisplay = ({ tas, taskCompleted, handleResolved }) => {
  const { title } = tas;

  const handleComplete = () => {
    taskCompleted(tas);
    handleResolved(tas);
  };
  return (
    <div className="m-3 flex flex-col gap-2 rounded-md bg-white px-3 py-3 shadow">
      <h2 className="text-[17px] font-bold">{title}</h2>
      <button onClick={handleComplete} className="rounded-md bg-[#02A53B] py-2 text-[15px] font-bold text-white">
        Complete
      </button>
    </div>
  );
};

export default TaskDisplay;
