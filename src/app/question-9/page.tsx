import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">
        What do you think is one of the most common problems which customers ask
        Vercel for help with? How would you help customers to overcome common
        problems, short-term and long-term?
      </h3>

      <p>
        I think probably one of the most common problems is integrating Vercel
        with their existing infrastructure, things like how do I migrate my app to Vercel
        whilst keeping my existing Database in AWS.
      </p>

      <p>
        In the short term, writing a small step by step guide specific for the most common
        scenario. but in the long-term writing a full documentation on adopting Vercel coming from
        any other platform, to ensure anyone can join.
      </p>
    </>
  );
}
