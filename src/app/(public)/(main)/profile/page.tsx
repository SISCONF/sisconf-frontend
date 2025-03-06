import { ProfileForm } from "./_components/profile";
import { fetchCustomerMe } from "@/actions/customer/fetch-customer-me";

export const metadata = {
  title: "Meu Perfil",
};

export default async function ProfilePage() {
  const customerData = await fetchCustomerMe();

  return (
    <div className="container mx-auto py-8">
      <ProfileForm initialData={customerData} />
    </div>
  );
}
