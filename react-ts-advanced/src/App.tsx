import Input from './components/Input.tsx';

function App() {
  return (
    <main>
      <Input
        id='name'
        label='Your Name'
      />
      <Input
        id='age'
        label='Your Age'
      />
    </main>
  );
}

export default App;
