"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [customerName, setCustomerName] = useState("");
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">
        {`A customer has a project on Vercel and they want to redirect the /blog
        path to another website. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.`}
      </h3>

      <div className="w-1/2 mb-8">
        <label htmlFor="customerName">Customize the customer name:</label>
        <Input
          value={customerName}
          placeholder="Customer name"
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <p>Hi {customerName || "customer"},</p>
      <p>
        This can be achieve in a few ways, you could for example implement a
        redirect directly in your project. If you are using Next.js you could
        use the{" "}
        <a href="https://nextjs.org/docs/app/api-reference/next-config-js/redirects">
          redirects api
        </a>{" "}
        or if you want something more dynamic you could use{" "}
        <a href="https://nextjs.org/docs/app/building-your-application/routing/middleware">
          Next.js' middleware
        </a>
        .
      </p>
      <p>
        You could also take advantage of{" "}
        <a href="https://vercel.com/docs/functions/edge-middleware/quickstart">
          Vercel's Edge Middleware
        </a>
        this has the benefit of redirecting your visitors in less time, as the
        edge middleware is deployed closer to your customers thanks to our{" "}
        <a href="https://vercel.com/docs/edge-network/overview">Edge Network</a>
      </p>
      <p>
        If you are not using Next.js and here is{" "}
        <a href="https://vercel.com/docs/edge-network/redirects">
          how to take advantage of the edge network to redirect your users.
        </a>
      </p>
      <p>Let me know if you have anymore questions,</p>
      <p>Thanks</p>
      <p>Juan</p>
    </>
  );
}
