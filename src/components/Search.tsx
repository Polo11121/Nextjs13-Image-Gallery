"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const typeHandler = (event: FormEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget.value);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      router.push(`/results/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form
      className="flex justify-center md:justify-between"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={typeHandler}
        placeholder="Search"
        className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
      />
    </form>
  );
};
