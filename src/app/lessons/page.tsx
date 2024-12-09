import Link from "next/link";

const lessons = [
  { id: 1, title: "Lesson 1" },
  { id: 2, title: "Lesson 2" },
  { id: 3, title: "Lesson 3" },
  { id: 4, title: "Lesson 4" },
  { id: 5, title: "Lesson 5" },
  { id: 6, title: "Lesson 6" },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-items-center py-10">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Lessons</h1>
      <ul className="w-full max-w-md">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="bg-white shadow-lg rounded-lg mb-4 p-6 hover:bg-slate-50 transition"
          >
            <Link href={`/lessons/${lesson.id}`}>
              <p className="text-xl font-semibold text-slate-800 hover:text-blue-500">
                {lesson.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}