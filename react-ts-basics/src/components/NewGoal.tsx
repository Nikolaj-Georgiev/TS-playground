import { type FormEvent } from 'react';

export default function NewGoal() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // new FormData(e.currentTarget); alternative way, I prefer this one!
  }

  return (
    <form
      action='#'
      onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          type='text'
          name='goal'
          id='goal'
        />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input
          type='text'
          name='goal'
          id='summary'
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
