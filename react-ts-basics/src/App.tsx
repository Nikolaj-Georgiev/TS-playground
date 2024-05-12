import { useState } from 'react';

// import User from './components/Users.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

//we can also export/import interfaces!!!
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // const [goals, setGoals] = useState<Array<CourseGoal>>([]); // alternative to the one below
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  // const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoals(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    // setGoals((prevGoals) => {
    //   const newGoals = prevGoals.filter((goal) => goal.id !== id);
    //   return newGoals;
    // });//longer version
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of Goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoals}
      />

      {/* <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul> */}

      {/* <ul>
        {users.map((user, index) => (
          <User
          key={index}
            name={user.name}
          />
        ))}
      </ul> */}
    </main>
  );
}
