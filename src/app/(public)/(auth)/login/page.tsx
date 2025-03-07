import { LoginForm } from "./_components/login-form";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="flex w-full h-screen items-center justify-center p-6 md:p-10 bg-[url(/assets/background.jpg)] bg-no-repeat bg-cover bg-center">
      <LoginForm />
    </div>
  );
}
