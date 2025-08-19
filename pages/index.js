import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect til listing
    router.push("/listing");
  }, [router]);

  return null; // evt. legg inn en spinner
}
