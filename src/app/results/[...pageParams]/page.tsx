import type { Metadata } from "next";
import { Gallery } from "@/components";
import React from "react";

type SearchTermPageProps = {
  params: {
    pageParams: (string | undefined)[];
  };
};

export const generateMetadata = ({
  params: { pageParams },
}: SearchTermPageProps): Metadata => {
  const searchTerm = pageParams?.[0] ?? "curated";
  const page = pageParams?.[1] ?? "1";

  return {
    title: `Results for ${searchTerm} - Page ${page}`,
    description: `Results for ${searchTerm} - Page ${page}`,
  };
};

const SearchTermPage = ({ params: { pageParams } }: SearchTermPageProps) => {
  const searchTerm = pageParams?.[0] ?? "curated";
  const page = pageParams?.[1] ?? "1";

  return <Gallery topic={searchTerm} page={page} />;
};

export default SearchTermPage;
