import Image from "next/image";
import { projectData } from "../interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type=='project'] | order(_updatedAt desc){
        title,
          overview,
          link,
          _id,
          "imageUrl": image.asset->url,
          githubLink
      }`;
  const data = await client.fetch(query);
  return data;
}
export const dynamic = 'force-dynamic'
export const revalidate = 1
const page = async () => {
  const data: projectData[] = await getData();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Projects
        </h1>
      </div>
      <div className="grid gap-y-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100 hover:scale-105 duration-500"
          >
            <div className="h-56 w-full relative">
              <Image
                fill
                src={project.imageUrl}
                alt="Image of the project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-400">
                {project.overview}
              </p>
              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
                >
                  Live Link
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
                >
                  Github Link
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default page;
