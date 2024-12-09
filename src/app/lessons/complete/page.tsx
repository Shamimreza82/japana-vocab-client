"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function CompletionPage() {
  const { width, height } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/lessons");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Confetti width={width} height={height} />
      <h1 className="text-4xl font-bold text-green-600">Congratulations! 🎉</h1>
      <p className="text-gray-600 mt-4">
        You have successfully completed the lesson. Redirecting to the lessons page...
      </p>
    </div>
  );
}