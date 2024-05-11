// type CourseGoalProps = {
//   title: string;
//   description: string;

import { type PropsWithChildren } from 'react';

// import { type ReactNode } from 'react';
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>; // alternative to the one above

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

/*
export default function CourseGoal({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
*/
/*
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
*/
