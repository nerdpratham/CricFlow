export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 border-t border-slate-800 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Cricflow. All rights reserved.
    </footer>
  );
}
