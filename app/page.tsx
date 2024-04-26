import Image from "next/image";
import Me from "@/public/my-picture.jpeg";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="my-picture"
            src={Me}
            className="h-48 w-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Satyam Chaturvedi
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Full Stack Developer
          </p>
          <Socials />
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            I am a dedicated and proficient MERN full stack web developer with a
            passion for crafting dynamic and intuitive web applications. With a
            strong foundation in both front-end and back-end development, I
            specialize in leveraging the latest technologies to deliver scalable
            and responsive solutions that exceed client expectations.
          </p>
          <p>
            I am excited to continue pushing the boundaries of web development
            and embark on new challenges that allow me to showcase my skills and
            contribute to impactful projects.
          </p>
          <p>
            Thank you for considering my portfolio. I look forward to the
            opportunity to collaborate with you.
          </p>
          <p>
            Warm Regards,
            <br />
            Satyam Chaturvedi
          </p>
        </div>
      </div>
    </div>
  );
}
