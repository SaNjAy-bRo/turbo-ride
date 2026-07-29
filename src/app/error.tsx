"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App boundary caught error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 rounded-full bg-[#FF2D20]/10 text-[#FF2D20] mb-4">
        <RefreshCw className="w-8 h-8 animate-spin" />
      </div>
      <h2 className="font-heading text-2xl font-bold mb-2">Something went wrong!</h2>
      <p className="text-neutral-400 text-xs max-w-md mb-6">
        The TurboRide supercar portal encountered a temporary rendering boundary issue.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-[#FF2D20] text-black font-heading text-xs font-bold uppercase tracking-wider hover:bg-[#e02619] transition-all"
      >
        Reload Supercar Portal
      </button>
    </div>
  );
}
