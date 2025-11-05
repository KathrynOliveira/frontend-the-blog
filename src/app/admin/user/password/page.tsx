import { UpdatePasswordForm } from "@/components/Admin/UpdateUserPassword";
import { Loader } from "@/components/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trocar senha",
};

export default async function AdminUserPage() {
  return (
    <Suspense fallback={<Loader className="mb-16" />}>
      <UpdatePasswordForm />
    </Suspense>
  );
}
