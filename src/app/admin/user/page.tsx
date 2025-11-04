import { UpdateUserForm } from "@/components/Admin/UpdateUserForm";
import { Loader } from "@/components/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "User Admin",
};

export default async function AdminUserPage() {
  return (
    <Suspense fallback={<Loader className="mb-16" />}>
      <UpdateUserForm />
    </Suspense>
  );
}
