
export default function ErrorPage({ code = 404, onGoHome }) {
    return (
        <div className="min-h-screen w-full bg-[#0a0c10] text-[#e4e7eb] flex items-center justify-center relative overflow-hidden font-mono px-6">
            <style>{`
        @keyframes glitch {
          0%, 100% { text-shadow: 2px 0 #4ff0c7, -2px 0 #ff5c5c; }
          25% { text-shadow: -2px 0 #4ff0c7, 2px 0 #ff5c5c; }
          50% { text-shadow: 3px 1px #4ff0c7, -3px -1px #ff5c5c; }
          75% { text-shadow: -1px 2px #4ff0c7, 1px -2px #ff5c5c; }
        }
        .glitch-text { animation: glitch 3s infinite steps(1); }
        .scanlines::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(255,255,255,0.025) 3px, transparent 4px);
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .glitch-text { animation: none; text-shadow: 2px 0 #4ff0c7, -2px 0 #ff5c5c; }
        }
      `}</style>

            <div className="scanlines absolute inset-0" />

            <div className="relative z-10 text-center max-w-lg">
                <p className="text-xs tracking-[0.3em] text-[#6b7280] mb-6">
                    ERR_CODE: {code} // CHANNEL: NOT_FOUND
                </p>

                <h1 className="glitch-text text-[7rem] sm:text-[10rem] font-extrabold leading-none tracking-tight">
                    {code}
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-[#4ff0c7]">
                    Signal lost
                </h2>

                <p className="mt-4 text-sm text-[#9ca3af] leading-relaxed">
                    The page you're looking for drifted off frequency. Check the URL,
                    or tune back to a station that's still broadcasting.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="/"
                        onClick={onGoHome}
                        className="px-5 py-2.5 rounded border border-[#4ff0c7] text-[#4ff0c7] text-sm font-medium hover:bg-[#4ff0c7] hover:text-[#0a0c10] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4ff0c7] focus:ring-offset-2 focus:ring-offset-[#0a0c10]"
                    >
                        Back to home
                    </a>
                    <a
                        href="#"
                        className="px-5 py-2.5 rounded border border-[#374151] text-[#9ca3af] text-sm font-medium hover:border-[#6b7280] hover:text-[#e4e7eb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b7280] focus:ring-offset-2 focus:ring-offset-[#0a0c10]"
                    >
                        Report a broken link
                    </a>
                </div>
            </div>
        </div>
    );
}