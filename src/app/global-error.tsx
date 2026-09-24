"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full text-center space-y-4 border border-red-100">
            <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
            <p className="text-gray-700 bg-red-50 p-3 rounded font-mono text-sm text-left overflow-auto">
              {error.message || "An unexpected application error occurred."}
            </p>
            <Button onClick={() => reset()} className="w-full">
              Coba Lagi (Try Again)
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
