import Image from "next/image";
import { skillData } from "../interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type=='skills']{
    _id,
      skill,
      shadowStyle,
      "imageUrl": image.asset->url
  }`
  const data = await client.fetch(query);
  return data;
}

export const dynamic = 'force-dynamic'
export const revalidate = 1

const page = async () => {
  const data: skillData[] = await getData();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Skills
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {data.map(({ _id,skill,shadowStyle,imageUrl }) => (
            <div
              key={_id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${shadowStyle}`}
            >
              <Image src={imageUrl} alt="skill-logo" className="mx-auto" width={80} height={80}/>
              <p className="mt-4">{skill}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default page