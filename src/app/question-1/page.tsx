import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">
        What do you want to learn or do more of at work?
      </h3>

      <p>
        I would like to learn how to contribute and start contributing more
        towards open source projects, as this is a good way to expand my
        knowledge of projects I use in a daily basis, there&apos;s only so much
        you can learn from the docs, and I would love to bring my contributions
        to projects like React.js, Next.js, or Solid.js.
      </p>
      <p>
        I would also like to build more projects in other frameworks, try
        frameworks like SvelteKit or Nuxt.js.
      </p>
      <p>
        And finally I would like to start deploying things using Vercel instead
        of kubernetes or similar, I want to be able to share preview links from
        PRs
      </p>
    </>
  );
}
