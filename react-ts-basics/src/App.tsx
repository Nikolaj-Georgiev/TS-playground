import CourseGoal from './components/CourseGoal.tsx';
// import User from './components/Users.tsx';

export default function App() {
  // const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
  return (
    <main>
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
