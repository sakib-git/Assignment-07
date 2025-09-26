import React from 'react';
import TaskDisplay from './TaskDisplay';

const Task = ({ task, taskCompleted, handleResolved, setCount, count }) => {
  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-500">Task Status</h2>
      {task.length === 0 ? <span className="text-gray-500">Select a ticket to add to Task Status</span> : ''}

      <div>
        {task.map((tas) => (
          <TaskDisplay key={tas.id} tas={tas} taskCompleted={taskCompleted} handleResolved={handleResolved} count={count} setCount={setCount}></TaskDisplay>
        ))}
      </div>
    </div>
  );
};

export default Task;
