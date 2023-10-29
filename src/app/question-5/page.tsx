import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const checklist = [
  "Local runtime version matches the deployed version.",
  "Dependencies are pushed with the deployment.",
  "Environment variables are properly configured.",
  "Code builds locally.",
  "The deployed code matches the local code.",
  "If is an Edge deployment, is not a known limitation.",
  "The error is not a known issue for the framework.",
];

export default function Page() {
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">
        Imagine a customer writes in requesting help with a build issue on a
        framework or technology that you&apos;ve not seen before. How would you
        go about troubleshooting this and what questions would you ask the
        customer to understand the situation better?
      </h3>

      <p>
        I would start by asking the customer the framework and runtime that they
        are using, as well as what kind of deployment they are trying to do
        (i.e. edge function, serverless function, etc.) as this would allow me
        to identify common issues, known bugs and check that the error is not
        caused by one of them.
      </p>

      <p>
        if they have a javascript/typescript project that they are trying to
        deploy on the edge, I would ask them to check if the dependencies are
        compatible as edge functions have{" "}
        <a href="https://Vercel.com/docs/functions/edge-functions/limitations">
          some known limitation
        </a>
        , for example one of the most popular ORMs in the javascript ecosystem
        prisma, is not compatible with this runtime.
      </p>

      <p>
        I would then proceed to ask them to share the error logs, providing that
        I don&apos;t have them already, and ask them to double check that the
        code can be build in their development machine, and that all the latest
        changes have been pushed to their Git platform of choice (e.g. Github,
        Gitlab) if their Vercel project is sync to it or via the Vercel CLI.
      </p>

      <p>
        A common error that is easy to mix, is not having properly configured
        the environment variables as some frameworks will fail if these
        variables are not properly configured, this can be easily solved by
        importing the
        <code>.env</code> file in the settings of the project, or via the{" "}
        <a href="https://Vercel.com/docs/cli/env">Vercel CLI</a>.
      </p>

      <p>
        Another place to look for common issues, is to check that the
        Dependencies&apos;s version have been properly pushed for example that
        the <code>go.mod</code>(Go), <code>requirements.txt</code>(python),
        <code>Gemfile</code>(Ruby) or the <code>package.json</code> (node.js)
        and it&apos;s respective lockfile in the case of node are all available
        to their Vercel deployment.
      </p>

      <p>
        This last one should also consider to check that the installed version
        in their development machines, matches or is compatible with the one
        chosen for their deployment.
      </p>

      <p> In summary this would be the checklist: </p>
      {checklist.map((c) => (
        <div className="flex items-center gap-2" key={c}>
          <Checkbox id={c} />
          <label htmlFor={c}>{c}</label>
        </div>
      ))}
    </>
  );
}
