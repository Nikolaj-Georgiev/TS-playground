import { type ReactNode } from 'react';
import { type CourseGoal as CGoal } from '../App.tsx';

import CourseGoal from './CourseGoal.tsx';
import InfoBox from './InfoBox.tsx';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet! Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox
        mode='warning'
        severity='high'
      >
        You are collecting a lot of goals! Don't put too much on your plate!
      </InfoBox>
    );
  } else if (goals.length === 3) {
    warningBox = (
      <InfoBox
        mode='warning'
        severity='medium'
      >
        You are collecting a lot of goals! Don't put too much on your plate!
      </InfoBox>
    );
  } else if (goals.length === 2) {
    warningBox = (
      <InfoBox
        mode='warning'
        severity='low'
      >
        You are collecting a lot of goals! Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              onDelete={onDeleteGoal}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
