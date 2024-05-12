import CourseGoal from './CourseGoal';

type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

type CourseGoalListProps = {
  goals: CourseGoals[];
};

export default function CourseGoalListTry({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
