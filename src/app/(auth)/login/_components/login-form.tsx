import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/typography";
import { InputForm } from "./form/input";

export function LoginForm() {
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
        <form>
          <div className="flex flex-col gap-6">
            <InputForm
              label="Email"
              input={{
                id: "email",
                type: "email",
                placeholder: "customer@example.com",
              }}
            />
            <InputForm
              label="Senha"
              input={{
                id: "password",
                type: "password",
                placeholder: "********",
              }}
            />

            <Button
              type="submit"
              className="w-full h-11 text-[1rem] font-semibold text-primary bg-brand-3 hover:bg-brand-4"
            >
              Entrar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
