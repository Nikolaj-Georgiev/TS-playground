import { type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>; // alternative to the one above

export default function CourseGoal({
  title,
  onDelete,
  id,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

//////////////////////// alternative to function CourseGoal(){}
/*
// import { type ReactNode } from 'react';
import { type FC, type PropsWithChildren } from 'react';
const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
    <div>
    <h2>{title}</h2>
    {children}
    </div>
    <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
*/

/*
/////////////////////////////
type CourseGoalProps = {
  title: string;
  description: string;
}
//or
interface CourseGoalProps {
  title: string;
  children: ReactNode;
}
//one of the two above

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

////////////////////////////////////////
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
