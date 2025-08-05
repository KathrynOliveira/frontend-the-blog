export const dynamic = 'force-dynamic';

type AdminPostIdOageProps = {
  params: Promise<{
    id: string;
  }>
}

export default async function AdminPostIdPage({ params }: AdminPostIdOageProps) {
  const { id } = await params;
  return <div className="py-16 text-6xl">AdminPostIdPage {id}</div>;
}
