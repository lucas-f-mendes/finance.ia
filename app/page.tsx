import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/login");

  return (
    <div className="">
      <h1 className="text-red-500 p-5"> Olá</h1>

      <Button>Oi</Button>

      <UserButton showName />
    </div>
  )
}

export default Home;