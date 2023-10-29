import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">
        When would you choose to use Edge Functions, Serverless Functions, or
        Edge Middleware with Vercel?
      </h3>

      <p>
        I would choose Edge Functions to write any backend function that
        requires low latency or fast execution time, as Edge Functions run Fast
        and are closer to customers.
      </p>
      <p>
        Ideally I would want all my code to run in an Edge Function so that I
        can provide the fastest experience to our customers, however this speed
        has some limitations, and here is where Serverless Function come to the
        rescue, to do things like more Intensive computation or task that
        require different languages from javascript.
      </p>
      <p>
        Its also important to identify where are the bottle necks, for example
        Edge Functions are closer to the user, however they might be further
        away from the database, if the database in this scenario is the bottle
        neck, I might make more sense to run the code as a Serverless function,
        or maybe try limiting the Edge function to an specific Region.
      </p>
      <p>
        Unlike the other two, Edge Middleware serve a completely different
        purpose, as it is supposed to run code before it even reaches the
        functions, I would use this to do Redirects, A/B tests, or to limit the
        use of an API.
      </p>
    </>
  );
}
