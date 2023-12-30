import { component$ } from "@builder.io/qwik";
// import { LearnMoreBtnWhite } from "~/components/button/LearnMoreBtnWhite";
import { client } from "../layout";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
// import imageUrlBuilder from "@sanity/image-url";
// import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

export const useSanityProjects = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  try {
    const dataApi = await client.fetch('*[_type == "projects"]');
    return dataApi;
  } catch (error) {
    console.log(error);
  }
});

// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source);
// }

type Image = {
  src: string;
  layout: string;
  width: number;
  height: number;
  alt: string;
  background: string;
  class: string;
};
// This is an PROJECT PAGE 
export default component$(() => {
  // const projectsData = useSanityProjects();
  return (
    // Hero Wrapper
    <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96 xl:w-1280 ">
      {/* //Hero Heading */}
      <section class="container min-w-full">
        <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen md:gap-32 xl:gap-48">
          <div class="mt-64 flex w-full flex-col items-center justify-center gap-24 md:-mt-32 md:gap-32 lg:mt-48 xl:gap-48">
            <h1 class="text-center text-48 tracking-low text-black sm:text-69 md:text-80 lg:text-105 xl:text-138">
              Crafting
            </h1>
            <h2 class="xl:80 text-center text-23 text-black sm:text-28 md:text-47 lg:text-61">
              Exceptional Experiences
            </h2>
            <h3 class="text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27">
              "Bringing brands to life through bespoke website design and
              development."
            </h3>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section class="container flex min-w-full flex-col items-center gap-32 md:gap-64 lg:gap-96 xl:gap-128 mb-80">
        <h4 class="text-center text-28 text-black sm:text-40 md:text-61 lg:text-105 xl:text-110 font-medium">
         Projects
        </h4>
        <div class="flex flex-col gap-32 px-40 py-40 md:gap-64 bg-grey rounded-2xl  ">
        <p class="font-bold container min-w-full text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27"> 
                 Startup Website
                </p>
        <Image
                  src="/images/logo/tas.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={3000}
                  height={3000}
                  background="auto"
                  // class="w-50 md:w-104 xl:w-152"
                />
                <div class="flex justify-evenly font-bold">
                <button class="bg-emerald-500 text-white px-12 py-8 rounded-lg">Github</button>
                <button class="bg-cyan-400 text-white px-12 py-8 rounded-lg ">Live link</button>
                </div>
                </div>
                <p class="font-bold container min-w-full text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27"> 
                  Developed a website for Tas Innovation Startup using Tailwind CSS, React.js on vite , implemented mail functionality with Nodemailer
                </p>
                  
        
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: "Ilanchezhian - Projects",
  meta: [
    {
      name: "description",
      content: "Check out some of my works",
    },
    // Open graph
    {
      property: "og:title",
      content: "Ilanchezhian - Projects",
    },
    {
      property: "og:description",
      content: "Check out some of my works",
    },
    {
      property: "og:url",
      content: "https://www.anirbandas.in/projects", // Replace with your website URL
    },
    {
      property: "og:locale",
      content: "en",
    },
    {
      property: "og:site_name",
      content: "Anirban Das - Fullstack Developer & UX Designer",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://cdn.sanity.io/images/izetizop/production/161ee6f9731fbc74dfcb3cc2b5808e80bf91f214-1200x630.jpg", // Replace with the actual image URL for sharing
    },
    {
      property: "og:image:width",
      content: "1200", // Replace with the actual image URL for sharing
    },
    {
      property: "og:image:height",
      content: "630", // Replace with the actual image URL for sharing
    },
    // Twitter Card meta tags (for Twitter sharing)
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@anirban12d",
    },
    {
      name: "twitter:title",
      content: "Anirban Das - Projects",
    },
    {
      name: "twitter:description",
      content: "Check out some of my works",
    },
    {
      name: "twitter:image",
      content:
        "https://cdn.sanity.io/images/izetizop/production/53104f57eb53f72eeeead492f157e1f755a3ab28-1200x675.jpg", // Replace with the actual image URL for sharing
    },
    {
      name: "twitter:image:alt",
      content:
        "Image of Anirban Das's personal website - Fullstack Developer & UX Designer", // Replace with the actual image URL for sharing
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://www.anirbandas.in/projects",
    },
  ],
};
