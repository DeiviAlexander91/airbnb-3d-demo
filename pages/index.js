import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /listing when component mounts
    router.push("/listing");
  }, [router]);

  // Return nothing (optional: could add loading spinner here)
  return null;
}
