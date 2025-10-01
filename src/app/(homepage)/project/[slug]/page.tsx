"use server";

import NotFound from "@/app/not-found";
import Detail from "@/components/pages/project/Detail";
import ProjectData from "@/lib/data/project";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const detail = ProjectData.ListDetailProject().find(
    (v) => v.id === Number(slug)
  );

  return detail ? <Detail detail={detail} /> : <NotFound />;
};

export default page;
