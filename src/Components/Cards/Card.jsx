import React from 'react';
import App from '../../App';
import { toast } from 'react-toastify';

const Card = ({ data, setAllCards, setCount, count, task, setTask }) => {
  const { id, title, description, customer, date, priority, status, iconImg } = data;

  const handleCounter = (data) => {
    const alreadyExist = count.find((item) => item.id === data.id);
    if (alreadyExist) {
      toast.error('⚠️ Already Added!');
      return;
    }

    toast.success('✅ In-Progress!');
    const countIncrease = [...count, data];

    setCount(countIncrease);

    const taskbar = [...task, data];
    setTask(taskbar);

    setAllCards((prev) => prev.map((card) => (card.id === data.id ? { ...card, status: 'In-progress' } : card)));
  };

  return (
    <div onClick={() => handleCounter(data)} className="space-y-4 rounded-md bg-white p-3 shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold max-sm:text-[21px]">{title}</h2>
        <div className={`${status === 'Open' ? 'bg-[#02a53b5b] text-[#0B5E06]' : 'bg-[#F8F3B9] text-[#9C7700]'} flex items-center gap-1 rounded-2xl p-2 py-1`}>
          <div className={`${status === 'Open' ? 'bg-[#02A53B]' : 'bg-[#FEBB0C]'} h-4 w-4 rounded-full`}></div>
          <p className="text-sm font-medium whitespace-nowrap">{status}</p>
        </div>
      </div>
      <p className="text-[#627382]">{description}</p>
      <div className="flex justify-between text-[#627382]">
        <div className="flex items-center gap-2">
          <p>{id}</p>
          <p className={`${priority === 'MEDIUM PRIORITY' ? 'text-[#FEBB0C]' : 'text-[#F83044]'} font-medium`}>{priority}</p>
        </div>

        <div className="flex items-center gap-2">
          <p>{customer}</p>
          <img src={iconImg} alt="" />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
