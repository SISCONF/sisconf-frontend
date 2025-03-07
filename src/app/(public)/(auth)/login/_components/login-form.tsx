"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { authLogin } from "@/actions/auth-login";
import { useAuth } from "@/hooks/useAuth";
import { InputForm } from "@/components/input-form";
import { Eye } from "lucide-react";

interface LoginFormSchema {
  email: string;
  password: string;
}

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isLoading },
  } = useForm<LoginFormSchema>();
  const { setIsAuthenticated, setUser } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormSchema> = async (data) => {
    try {
      const session = await authLogin(data.email, data.password);

      if (session) {
        setUser(session.user);
        setIsAuthenticated(true);

        await new Promise((resolve) => setTimeout(resolve, 300));
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <Card className="flex flex-col items-center justify-center w-[35.62rem] h-[33.12rem] bg-background border-none shadow-lg">
      <CardHeader className="text-center gap-1">
        <CardTitle>
          <Typography variant="h3" fontWeight={"bold"}>
            Bem-vindo de volta!
          </Typography>
        </CardTitle>
        <CardDescription>
          <Typography
            variant={"body2"}
            className="text-[#757575] text-[0.75rem]"
          >
            Insira suas credenciais para acessar sua conta
          </Typography>
        </CardDescription>
      </CardHeader>
      <CardContent className="w-[23.75rem] h-fit">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          className="flex flex-col justify-center items-center gap-8"
        >
          <div className="flex flex-col items-center justify-center gap-6 w-[23.75rem]">
            <InputForm
              label="Email"
              type="email"
              id="email"
              name="email"
              register={register}
              required
            />
            <InputForm
              label="Senha"
              type="password"
              id="password"
              name="password"
              register={register}
              required
            />
          </div>

          {error && <div className="max-w-sm text-red-500">{error}</div>}

          <Button
            type="submit"
            className="w-[23.75rem] h-11 text-[1rem] font-semibold rounded p-4 dark:text-primary bg-brand-3 hover:bg-brand-4"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
