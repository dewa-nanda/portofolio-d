import type { Metadata } from "next";
import NotFound from "@/app/not-found";
import Detail from "@/components/pages/project/Detail";
import ProjectData from "@/lib/data/project";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = ProjectData.ListDetailProject().find(
    (v) => v.id === Number(slug),
  );

  if (!detail) {
    return { title: "Project Not Found" };
  }

  return {
    title: detail.title,
    description: detail.description,
    openGraph: {
      title: detail.title,
      description: detail.description,
      images: [{ url: detail.imgSrc }],
    },
    twitter: {
      card: "summary_large_image",
      title: detail.title,
      description: detail.description,
      images: [detail.imgSrc],
    },
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const detail = ProjectData.ListDetailProject().find(
    (v) => v.id === Number(slug),
  );

  return detail ? <Detail detail={detail} /> : <NotFound />;
};

export default page;
