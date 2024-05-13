import Input from './components/Input.tsx';

function App() {
  return (
    <main>
      <Input
        id='name'
        label='Your Name'
        type='text'
      />
      <Input
        id='age'
        label='Your Age'
        type='number'
      />
    </main>
  );
}

export default App;
