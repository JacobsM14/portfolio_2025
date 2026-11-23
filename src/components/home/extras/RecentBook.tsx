import { useState } from "react";

interface Book {
  title: string;
  author: string;
  cover: string;
}

interface Props {
  books: Book[];
}

export default function RecentBook({ books }: Props) {
  const [book] = useState(
    () => books[Math.floor(Math.random() * books.length)],
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col @min-[240px]:flex-row @min-[240px]:items-center py-4 desktop:py-3 gap-3">
      <img
        src={book.cover}
        alt={book.title}
        className="flex-1 min-h-0 max-h-45 w-auto max-w-30 self-start object-contain rounded-lg @min-[240px]:flex-none @min-[240px]:h-full @min-[240px]:self-center"
      />
      <div className="flex flex-col">
        <p className="text-white text-md font-bold pb-2">{book.title}</p>
        <p className="text-gray-light pb-1">{book.author}</p>
      </div>
    </div>
  );
}
