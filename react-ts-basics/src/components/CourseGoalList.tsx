import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
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
