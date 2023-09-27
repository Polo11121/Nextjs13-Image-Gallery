import Link from "next/link";

type FooterProps = {
  topic: string;
  page?: string;
  prevPage: string | null;
  nextPage: string | null;
};

export const Footer = ({ topic, page, prevPage, nextPage }: FooterProps) => {
  if (!prevPage && !nextPage) return null;

  const pageNumbers: number[] = [];

  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i <= parseInt(nextPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
      {prevPage && (
        <Link
          href={`/results/${topic}/${prevPage}`}
          className={prevPage ? "" : "mx-auto"}
        >
          &lt;&lt;&lt;{!nextPage && "back"}
        </Link>
      )}
      {pageNumbers.map((pageNumber) =>
        page && pageNumber === parseInt(page) ? (
          pageNumber
        ) : (
          <Link
            className="underline "
            key={pageNumber}
            href={`/results/${topic}/${pageNumber}`}
          >
            {pageNumber}
          </Link>
        )
      )}
      {nextPage && (
        <Link
          href={`/results/${topic}/${nextPage}`}
          className={nextPage ? "" : "mx-auto"}
        >
          {!prevPage && "more"} &gt;&gt;&gt;
        </Link>
      )}
    </footer>
  );
};
