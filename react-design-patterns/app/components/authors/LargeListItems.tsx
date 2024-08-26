import { Author } from "@/app/types/Author";

type Props = {
  author: Author;
};

export const LargeAuthorListItem = ({ author }: Props) => {
  const { name, age, country, books } = author;

  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  );
};
