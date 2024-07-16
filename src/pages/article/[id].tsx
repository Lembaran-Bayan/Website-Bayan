import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter()
  
  return(
    <main className="pt-[120px]">
      {router.query.id}
    </main>
  )
}