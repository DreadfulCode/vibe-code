import * as React from "react"
import { Link } from "gatsby"
import { Button } from "./ui/button"
import { ChevronRightIcon } from "./icons/ChevronRightIcon"

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <div>
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition"
              to="/blog"
            >
              Latest articles - Check out our blog
              <span className="bg-muted-foreground/15 inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold">
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </Link>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Clone This Starter Gatbsy Blog 
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl">
            View Repo on GitHub
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
            <span className="text-muted-foreground text-sm">
              Featured:
            </span>
            <span className="text-sm font-bold">Code Blocks </span>
            <svg
              className="text-muted-foreground h-5 w-5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <Link
              className="inline-flex items-center gap-x-1 text-sm font-medium decoration-2 hover:underline"
              to="/blog"
            >
              Latest Articles
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}