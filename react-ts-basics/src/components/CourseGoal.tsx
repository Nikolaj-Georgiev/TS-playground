export default function CourseGoal(props: {
  title: string;
  description: string;
}) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
