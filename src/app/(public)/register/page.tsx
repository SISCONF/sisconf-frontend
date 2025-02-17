import { RegisterForm } from "./_components/register-form";

export default function Register() {
  return (
    <div className="flex w-full h-screen items-center justify-center p-6 md:p-10 bg-[url(/assets/background.jpg)] bg-no-repeat bg-cover bg-center">
      <RegisterForm />
    </div>
  );
}
