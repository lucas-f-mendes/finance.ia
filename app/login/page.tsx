import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";


const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) redirect("/");

  return (
    <div className="h-full grid grid-cols-2">
      <div className="mx-auto flex flex-col max-w-[550px] h-full justify-center p-8">
        <Image
          className="mb-8"
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance.IA"
        />

        <h2 className="text-4xl font-bold mb-3">Bem-vindo</h2>

        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login
          </Button>
        </SignInButton>
      </div>

      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Realize o login" fill className="object-cover" />
      </div>
    </div>
  )
}

export default LoginPage;