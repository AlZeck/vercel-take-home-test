"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [customerName, setCustomerName] = useState("customer");
  return (
    <>
      <Link href="/"> {"<"} Go back </Link>
      <h3 className="mb-10">{`The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.”

Please write a follow-up reply to the customer.`}</h3>

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
        I understand your frustration, these questions might seem pointless
        however they help us identifying the bug in order to solve it as soon as we can.
      </p>
      <p>
        The questions also can help avoiding escalating the issue, as this could bring
        the time to resolution higher, if it is related to something we can solve together,
        like a misconfiguration of the deployment, we could solve it potentially in a few minutes.
      </p>
      <p>
        If we can solve it together means that any future similar deployments
        won&apos;t have this issue and if it happens again you already know where to
        look and solve it sooner.
      </p>
      <p>I hope this clears up your concerns,</p>
      <p>Thanks</p>
      <p>Juan</p>
    </>
  );
}
