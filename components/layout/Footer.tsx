export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-4 shadow-inner">
      <div className="flex flex-col items-center justify-between gap-2 text-sm text-slate-600 md:flex-row">
        <p>© 2026 <span className="font-semibold text-blue-600">EduCore</span>. All rights reserved.</p>

        <p className="text-slate-500">
          AI Powered Learning Management System
        </p>
      </div>
    </footer>
  );
}