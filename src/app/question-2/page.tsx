import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">
        Describe how you solved a challenge or technical issue that you faced in
        a previous role (preferably in a previous support role). How did you
        determine that your solution was successful?
      </h3>

      <p>
        At one of my previous roles, we had a single server running all our stack,
        this was done all in Apache, and if the server crashed it would result in outages of
        all our apps.
      </p>
      <p>
        One app had a memory leak, that resulted in crashing our server several times,
        and every time we had to manually reboot the server.
      </p>
      <p>
        I solved this by fixing the memory leak in the short term, but in the long
        term I migrated our core infrastructure into Kubernetes, which meant that we
        could have load balancer, and automatic restart in case a pod/app crashed.
      </p>
      <p>
        After that we didn't had any more outages.
      </p>

    </>
  );
}
