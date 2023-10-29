import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">
        How would you compare Next.js with another frontend framework? Feel free
        to compare with a framework of your choice.
      </h3>

      <p>
        <b>Next.js</b> unlike the traditional frontend frameworks, expands its
        capabilities towards the backend, allowing developers to build full
        stack applications with a single backend.
      </p>
      <p>
        With the introduction Next.js 14, now you can write backend functions
        together with your frontend code via <b>Server Actions</b> as well as
        fetch any data as part of the rendering of our page using{" "}
        <b>React Server Components</b>
        and the new <b>App router</b>. This previously would have required to
        write a separate API to fetch and post any data, as it is the case if
        you use something like <b>Solid.js</b> on its own.
      </p>
      <p>
        By default when you create a new <b>Solid.js</b> app it will use{" "}
        <b>Vite.js</b>
        to bundle the app into something that a browser can understand, this
        mean that you will have to use a CDN to serve the files, write your own
        backend code or deploy it on Vercel.
      </p>
      <p>
        This separation between backend and frontend means that you can't
        optimize your application to only render on the client what needs to be
        interactive, and render in the server everything else, as well as
        requiring you to build your own API to interact with a database for
        example.
      </p>
      <p>
        A better comparison could be make with <b>SvelteKit</b> which provides
        similar features to ease the interaction between client and server, as
        an example SvelteKit can prerender and then hydrate the pages of your
        app to ensure that things like Search Engine Optimization are possible
        within your app, thing that is not possible with Single Page
        Applications.
      </p>
      <p>
        SvelteKit also provides a way to load server side data into your
        components and its own flavour of Server Actions named{" "}
        <b>Form actions</b>, however unlike Next.js collocation of client and
        server code is not possible, as SvelteKit require the boundaries to be
        clearly defined by writing the code on different files.
      </p>
      <p>
        For this reason like <b>Next.js</b> be can an easier starting point, as
        you can write the entire stack in a single app unlike <b>Solid.js</b>
        or even a plain <b>React.js</b>, but you can also collocate your code
        simplifying the boundaries of client-server code unlike what{" "}
        <b>SvelteKit</b>
        or <b>Astro</b> require you to do.
      </p>
    </>
  );
}
