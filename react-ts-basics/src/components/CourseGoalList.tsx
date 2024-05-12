import CourseGoal from './CourseGoal.tsx';
import { CourseGoals } from '../App.tsx';

type CourseGoalListProps = {
  goals: CourseGoals[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
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
