import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3>
        {`A customer has a project on Vercel and they want to redirect the /blog
        path to another website. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.`}
      </h3>

      <p></p>
    </>
  );
}
