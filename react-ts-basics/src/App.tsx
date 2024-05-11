import { useState } from 'react';

// import User from './components/Users.tsx';
import CourseGoal from './components/CourseGoal.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';

type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // const [goals, setGoals] = useState<Array<CourseGoals>>([]); // alternative to the one below
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  // const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
      };
      return [...prevGoals, newGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of Goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>

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
