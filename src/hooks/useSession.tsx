// hook to manage session state
"use client"; 
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function useSessionWrapper() {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true)
    } else if (status === "authenticated") {
      setIsLoading(false)
    } else if (status === "unauthenticated") {
      router.push("/")
    }
  }, [status, router])

  return { session, isLoading }
}

