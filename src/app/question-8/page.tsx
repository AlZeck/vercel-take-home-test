"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [customerName, setCustomerName] = useState("");
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3>{`A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.`}</h3>

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
        You can tell all the search engines to not index either certain paths of
        your app or all the paths by serving a file with the name{" "}
        <code>robots.txt</code>
        from the root of your app. Here is how it can be done on{" "}
        <a href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots">
          Next.js for example
        </a>
      </p>
      <p>
        If you want to learn more about how search engines interpret this file
        here are some{" "}
        <a href="https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt">
          documentation by google
        </a>
        .
      </p>
      <p>
        You can find how to write one and a good example of the specific use
        case{" "}
        <a href="https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt#format_location">
          here.
        </a>
      </p>
      <p>Let me know if you have anymore questions,</p>
      <p>Thanks</p>
      <p>Juan</p>
    </>
  );
}
