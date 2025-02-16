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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { authLogin } from "@/actions/auth-login";
import { useAuth } from "@/hooks/useAuth";

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
          <Typography variant="h4" fontWeight={"bold"}>
            Bem-vindo de volta!
          </Typography>
        </CardTitle>
        <CardDescription>
          <Typography variant={"body2"} className="text-[#757575]">
            Insira suas credenciais para acessar sua conta
          </Typography>
        </CardDescription>
      </CardHeader>
      <CardContent className="w-[23.75rem] h-fit">
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="flex flex-col items-center gap-2">
            <div className="grid gap-2 w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                {...register("email")}
                required
                className="h-[68px]"
              />
            </div>

            <div className="grid gap-2 w-full">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                {...register("password")}
                required
                className="h-[68px]"
              />
            </div>
          </div>
          {error && <div className="max-w-sm text-red-500">{error}</div>}

          <Button
            type="submit"
            className="w-full h-11 text-[1rem] font-semibold text-primary bg-brand-3 hover:bg-brand-4"
            disabled={isSubmitting || isLoading}
          >
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
