import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div
          className="p-10 flex flex-col bg-[#1E1919]
        dark:bg-slate-800 text-white space-y-5"
        >
          <h1 className="oswald text-4xl font-bold">
            Welcome to BondBox. <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className="roboto pb-20">
            Bring all your data storage needs together on one integrated
            platform that works seamlessly with the tools you already use.
            Store, organize, and access your files easily all without leaving
            BondBox.
          </p>

          <Link
            href="/dashboard"
            className="roboto flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4" />
          </video>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="oswald text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="roboto text-center font-light text-5lg p-2">
        The information on this website is for general informational purposes
        only. We do not make any representations or warranties of any kind,
        express or implied, about the completeness, accuracy, reliability, or
        availability of the information on this website. Your use of any
        information on this website is entirely at your own risk, and we shall
        not be liable for any loss or damage arising from the use of this
        website. This is a portfolio project.
      </p>
    </>
  );
}
