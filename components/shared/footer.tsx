export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-8">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Wachiranan Khanngern. All rights reserved.
        </span>
        <span className="text-neutral-600 text-xs">
          Built with Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  )
}
