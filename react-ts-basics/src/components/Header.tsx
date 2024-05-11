import { type PropsWithChildren } from 'react';
// import { type ReactNode } from 'react';
// type HeaderProps = {
//   children: ReactNode;
//   image: {
//     src: string;
//     alt: string;
//   };
// };

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
