import { InputText } from "@/components/InputText";

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex-col gap-6 items-center">
      <InputText labelText="Nome" placeholder="Digite seu nome" />
      <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" defaultValue="Olá Mundo!" disabled/>
    </div>
  );
}
