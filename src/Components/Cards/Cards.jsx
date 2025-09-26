import React, { Profiler } from 'react';
import Card from './Card';
import Loader from '../Loader';

const Cards = ({ allCards, setAllCards, allCardsLoading, setCount, count, setTask, task }) => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-medium text-gray-500">Customer Tickets</h1>
      {allCardsLoading ? (
        <Loader />
      ) : (
        <>
          {allCards.length < 1 ? (
            <div className="rounded-md bg-white py-4 text-center shadow">
              <p className="opacity-70">No tickets right now</p>
            </div>
          ) : (
            <div className="grid flex-1 gap-4 xl:grid-cols-2">
              {allCards.map((data) => (
                <Card key={data.id} data={data} setCount={setCount} count={count} setTask={setTask} task={task} allCards={allCards} setAllCards={setAllCards}></Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cards;
