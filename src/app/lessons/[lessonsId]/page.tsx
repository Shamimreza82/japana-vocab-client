'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const vocabularies = [
    { word: "こんにちは", pronunciation: "konnichiwa", whenToSay: "Hello in Japanese" },
    { word: "ありがとう", pronunciation: "arigatou", whenToSay: "Thank you in Japanese" },
    { word: "さようなら", pronunciation: "sayounara", whenToSay: "Goodbye in Japanese" },
    { word: "おはよう", pronunciation: "ohayou", whenToSay: "Good morning in Japanese" },
    { word: "こんばんは", pronunciation: "konbanwa", whenToSay: "Good evening in Japanese" },
    { word: "すみません", pronunciation: "sumimasen", whenToSay: "Excuse me or Sorry in Japanese" },
    { word: "はい", pronunciation: "hai", whenToSay: "Yes in Japanese" },
    { word: "いいえ", pronunciation: "iie", whenToSay: "No in Japanese" },
    { word: "お元気ですか", pronunciation: "ogenki desu ka", whenToSay: "How are you in Japanese" },
    { word: "元気です", pronunciation: "genki desu", whenToSay: "I am fine in Japanese" },
    { word: "お願いします", pronunciation: "onegaishimasu", whenToSay: "Please in Japanese" },
    { word: "どういたしまして", pronunciation: "douitashimashite", whenToSay: "You're welcome in Japanese" },
    { word: "ごめんなさい", pronunciation: "gomennasai", whenToSay: "I am sorry in Japanese" },
    { word: "いただきます", pronunciation: "itadakimasu", whenToSay: "Let's eat or I humbly receive (before meals)" },
    { word: "ごちそうさまでした", pronunciation: "gochisousama deshita", whenToSay: "Thank you for the meal (after eating)" },
    { word: "おめでとう", pronunciation: "omedetou", whenToSay: "Congratulations in Japanese" },
    { word: "頑張って", pronunciation: "ganbatte", whenToSay: "Good luck or Do your best in Japanese" },
    { word: "大丈夫", pronunciation: "daijoubu", whenToSay: "It's okay or Are you okay? in Japanese" },
    { word: "わかりません", pronunciation: "wakarimasen", whenToSay: "I don't understand in Japanese" },
    { word: "分かりました", pronunciation: "wakarimashita", whenToSay: "I understand in Japanese" }
  ];

export default function LessonPage ({params}) {
  const router = useRouter();
  const {lessonId} = params

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < vocabularies.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(vocabularies[currentIndex].pronunciation);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Lesson {lessonId}</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg text-center">
        <h2
          className="text-2xl font-semibold text-slate-800 cursor-pointer hover:text-blue-500"
          onClick={playPronunciation}
        >
          {vocabularies[currentIndex].word}
        </h2>
        <p className="text-gray-600 mt-4">
          Pronunciation: <span className="font-medium">{vocabularies[currentIndex].pronunciation}</span>
        </p>
        <p className="text-gray-600 mt-2">When to Say: {vocabularies[currentIndex].whenToSay}</p>
        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 disabled:bg-gray-300"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 disabled:bg-gray-300"
            onClick={handleNext}
            disabled={currentIndex === vocabularies.length - 1}
          >
            Next
          </button>
        </div>
        {currentIndex === vocabularies.length - 1 && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 mt-4"
            onClick={() => router.push("/lessons/complete")}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}