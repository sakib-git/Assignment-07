import { Suspense, use, useEffect, useState } from 'react';
import './App.css';
import BoxCount from './Components/BoxCounts/BoxCount';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/Navbar/Navbar';
import Task from './Components/Task/Task';
import Resolved from './Components/Resolved/Resolved';
import Footer from './Components/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';

const PromiseJson = fetch('/data.Json').then((res) => res.json());

function App() {
  const [allCards, setAllCards] = useState([]);
  const [allCardsLoading, setAllCardsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await PromiseJson;
        setAllCards(data);
        setAllCardsLoading(false);
      } catch (err) {
        console.error(err);
        setAllCardsLoading(false);
      }
    }
    getData();
  }, []);

  const [count, setCount] = useState([]);
  const [task, setTask] = useState([]);
  const [resolved, setResolved] = useState([]);

  const taskCompleted = (completedata) => {
    const filtered = task.filter((e) => e.id !== completedata.id);
    setTask(filtered);
    const filteredCount = count.filter((c) => c.id !== completedata.id);
    setCount(filteredCount);

    const filteredAllCards = allCards.filter((card) => card.id !== completedata.id);
    setAllCards(filteredAllCards);

    toast.success('✅ Completed!');
  };

  const handleResolved = (resolve) => {
    const resolveDisplay = [...resolved, resolve];
    setResolved(resolveDisplay);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="px-4">
        <BoxCount count={count} setCount={setCount} resolved={resolved}></BoxCount>

        <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-4 max-lg:grid-cols-1">
          <div className="col-span-3 grid">
            <Cards allCards={allCards} allCardsLoading={allCardsLoading} setAllCards={setAllCards} PromiseJson={PromiseJson} count={count} setCount={setCount} task={task} setTask={setTask}></Cards>
          </div>

          <div className="col-span-1 grid gap-4">
            <div className="flex flex-col gap-10">
              <Task task={task} taskCompleted={taskCompleted} handleResolved={handleResolved} count={count} setCount={setCount}></Task>
              <Resolved resolved={resolved}></Resolved>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
