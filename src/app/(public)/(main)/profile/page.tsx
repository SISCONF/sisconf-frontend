import { ProfileForm } from "./_components/profile";

export const metadata = {
  title: "Meu Perfil",
};

export default async function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <ProfileForm />
    </div>
  );
}
