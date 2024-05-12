import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // new FormData(e.currentTarget); alternative way, I prefer this one!
    const enteredGoal = goal.current!.value; // with the '!' you tell TS that this goal.current will never be null. If it is your app will crash! :)
    const enteredSummary = summary.current!.value;

    if (enteredGoal.trim() === '' || enteredSummary.trim() === '') {
      return;
    }

    e.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
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
          ref={goal}
        />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input
          type='text'
          name='goal'
          id='summary'
          ref={summary}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
