import { Author } from "@/app/types/Author";

type Props = {
  author: Author;
};

export const SmallAuthorListItem = ({ author }: Props) => {
  const { name, age } = author;

  return (
    <p>
      {" "}
      Name: {name}, Age: {age}
    </p>
  );
};
