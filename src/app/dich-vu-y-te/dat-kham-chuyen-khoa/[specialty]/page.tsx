import { redirect } from "next/navigation";

export default async function TempPage({
  params,
}: {
  params: Promise<{ specialty: string }>;
}) {
  const { specialty } = await params;
  redirect(`/chuyen-khoa/${specialty}`);
}
