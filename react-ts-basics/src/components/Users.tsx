type UserProps = {
  name: string;
};

export default function User({ name }: UserProps) {
  return <li>User: {name}</li>;
}
