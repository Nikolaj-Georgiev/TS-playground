// import User from './components/Users.tsx';
import CourseGoal from './components/CourseGoal.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';

export default function App() {
  // const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of Goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='Learn React + TS'>
        <p>Learn it from the ground up</p>
      </CourseGoal>
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
