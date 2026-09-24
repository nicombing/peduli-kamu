"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route Error Caught:", error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 w-full h-full my-auto">
      <h2 className="text-2xl font-bold text-red-600">Application Error</h2>
      <p className="text-gray-600 bg-red-50 p-4 rounded-lg font-mono text-sm max-w-2xl overflow-auto text-left border border-red-100">
        {error.message || "An unexpected error occurred during rendering."}
      </p>
      <Button onClick={() => reset()} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
        Refresh Page
      </Button>
    </div>
  );
}
