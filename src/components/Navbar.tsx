import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">VocabApp</div>
        <ul className="flex space-x-4">
          <li><Link href="/lessons">Lessons</Link></li>
          <li><Link href="/tutorials">Tutorials</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;