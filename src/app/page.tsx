import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobListItem from "@/components/JobListItem";
import H1 from "@/components/ui/H1";
import JobFilterResult from "@/components/ui/jobFilterResult";
import { jobFilterValues } from "@/lib/validation";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

function getTitle({ q, type, location, remote }: jobFilterValues) {
  const tittlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} jobs`
      : remote
        ? "remote developer jobs"
        : "All developer jobs";

  const tittleSuffix = location ? ` in ${location}` : "";

  return `${tittlePrefix}${tittleSuffix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Flow Jobs`,
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: jobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-xl text-muted-foreground">Find Your Dream Job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobFilterResult filterValues={filterValues} />
      </section>
    </main>
  );
}
