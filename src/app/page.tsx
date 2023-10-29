import Image from "next/image";
import Link from "next/link";

const questions = [
  "What do you want to learn or do more of at work?",
  "Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?",
  "How would you compare Next.js with another frontend framework? Feel free to compare with a framework of your choice.",
  "When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?",
  "Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you go about troubleshooting this and what questions would you ask the customer to understand the situation better?",
  `The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.”

Please write a follow-up reply to the customer.`,

  "A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.",

  "A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.",

  "What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?",

  "How could we improve or alter this familiarization exercise?",
];

export default function Home() {
  return (
    <>
      <h3>Contents</h3>
      <ol className="space-y-4">
        {questions.map((question, index) => (
          <li key={question}>
            <Link href={`/question-${index + 1}`}>{question}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
