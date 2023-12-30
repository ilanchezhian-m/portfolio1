import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { ButtonSecond } from "~/components/button/ButtonSecond";
// import { ButtonThird } from "~/components/button/buttonThird";
import PhArrowRight from "~/Icons/main/PhArrowRight";

// import { WorkflowReact } from "~/components/workflow/workflow-react";

import { type Any } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@unpic/qwik";
import { client } from "./layout";
import { useSanityMyImages } from "./layout";
import { Link } from "@builder.io/qwik-city";


const builder = imageUrlBuilder(client);

function urlFor(source: Any) {
  return builder.image(source);
}

type Image = {
  src: string;
  layout: string;
  width: number;
  height: number;
  alt: string;
  background: string;
  class: string;
};

export default component$(() => {
  const sanity = useSanityMyImages();


  return (
    <>
      {/* // Hero Wrapper */}
      <div class="mt-40 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-128 xl:w-1280">
        {/* Hero Heading */}
        <section class="container min-w-full">
          <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen">
            <div class=" mt-32 lg:mt-48">
              <h1 class="bg-blue bg-clip-text text-57 tracking-low text-transparent sm:text-69 md:text-105 lg:text-138">
                <span class="block text-center">Ilanchezhian M</span>
                {/* <span class="block text-center">Online</span> */}
              </h1>
              <h1 class="mt-10 bg-gradient-to-b from-blue  to-emerald-200  bg-clip-text text-57 tracking-low text-transparent sm:text-69 md:text-105 lg:text-138">
                <span class="block text-center">Front End Developer</span>
                {/* <span class="block text-center">Online</span> */}
              </h1>
            </div>
            <h2 class="text-center text-16 text-textColor md:text-21 lg:text-27">
              I Create Visually Stunning and Intuitively Functional Websites
              <span class="block text-center">Crafted to Drive Result</span>
            </h2>
            {/* <ButtonSecond>Let's make it happen</ButtonSecond> */}
          </div>
        </section>

        {/* Hero Project Showcase */}
        {/* <div class="flex flex-col gap-16">
        <MockupReact /> */}
        <div>
          <Link href="/projects" aria-label="See all my projects">
            <span class="flex items-center justify-center gap-4 text-16 hover:cursor-pointer md:gap-8 md:text-40 font-bold ">
              See my projects
              <span class="inline-block">
                <PhArrowRight />
              </span>
            </span>
          </Link>
        </div>
        {/* </div> */}
       
      

      {/* My toolkit */}
      <section>
        <div class=" flex flex-col gap-16 px-8 sm:px-32 md:gap-32 md:px-64 xl:gap-64">
          {/* texts */}
          
          
            {/* Technologies */}
            <div class="flex flex-col items-center gap-16 lg:flex-row">
              <div class="flex grow flex-col gap-8 rounded-4xl border-4 border-black bg-grey px-32 py-16 md:px-64   lg:py-32">
                <h6 class="text-23 font-medium text-textColor md:text-27 lg:text-36">
                  Frontend Tools
                </h6>
                <p class="text-16 font-medium text-textColor lg:max-w-384">
                  JavaScript(ES6+), TypeScript, HTML5, React.js, Next.js, Redux,
                  Redux Toolkit, Redux, React Testing Library, Cypress, Sentry,
                  Node.js/Express, Sanity/Strapi CMS, Git/Gitlab/Github.
                  Webflow/Shopify.
                </p>
              </div>
              <div class="flex min-h-full grow flex-col gap-8 rounded-4xl border-4 border-black bg-grey py-16 pl-32 pr-64 md:px-64 lg:py-32">
                <h6 class="text-23 font-medium text-textColor md:text-27 lg:text-36">
                  Ui Libraries
                </h6>
                <p class="text-16 font-medium text-textColor lg:mb-48 lg:max-w-384">
                  CSS3/SCSS/SASS, Framer Motion, GSAP, Styled Components,
                  Bootstrap, Tailwind CSS, Material UI, Chakra UI, React
                  Storybook.
                </p>
              </div>
            </div>
          
        </div>
      </section>
      
        {/* Introduction Section */}
        <section class="flex w-full items-center">
          <div class=" mx-8 flex flex-col items-center gap-4 overflow-hidden rounded-4xl border-8 border-solid border-black text-center sm:mx-32 sm:border-8 md:mx-120 lg:flex-row-reverse lg:text-left">
            <div class="h-full w-5/6 overflow-hidden">
              <Image
                src={urlFor(sanity.value[0]?.introductionImage).url()}
                layout="constrained"
                width={386}
                height={515}
                alt={sanity.value[0]?.MainImageAlt}
                background="auto"
                class="mx-auto h-full w-full"
              />
            </div>

            <div class="flex max-w-prose flex-col items-center gap-16 px-16 py-32 lg:max-w-1080 lg:items-start lg:gap-32 lg:py-72 lg:pl-64">
              <h3 class="text-33 sm:text-40 md:text-47">Hi, I’m Ilanchezhian</h3>
              <p class="text-16">
                I build professional websites for your growing business, helping
                your company grow by boosting sales and increasing customer
                conversion rates, understanding your user's needs and then
                aligning them with your business goals.
              </p>
              {/* <ButtonThird>Schedule a call</ButtonThird> */}
            </div>
          </div>
        </section>
        {/* Introduction section End */}

        {/* My toolkit */}
        <section class="w-full">
          <div class="flex flex-col items-center gap-8 px-32 md:gap-16 lg:gap-32 xl:gap-32">
            <h3 class="text-33 font-medium md:text-61 xl:text-80">
              My toolkit
            </h3>
            <h4 class="mt-16 text-center text-15 text-textColor sm:text-16 md:mt-32 md:text-21 xl:text-27">
              I’m capable of working confidently with any tools necessary to
              achieve goals.
              <br />
              These are few of my favorites'
            </h4>
            <div class="mt-16 flex max-w-868 flex-col items-center gap-16 rounded-4xl border-8  border-solid border-black px-32 py-24 md:mt-32 md:gap-32 md:px-64 md:py-64 lg:px-64 lg:py-72">
              <div class="flex items-center justify-around gap-8 sx:gap-10 sm:gap-32 md:gap-64">
                
                <div class="text-center">
                  <Image
                  src="/images/logo/html.png"
                  layout="constrained"
                  alt="Webflow logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>HTML</p>
                </div>
                <div class="text-center">
                <Image
                  src="/images/logo/css.png"
                  layout="constrained"
                  alt="Shopify logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>CSS</p>
                </div>
                <div class="text-center">
                   <Image
                  src="/images/logo/javascript.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>JavaScript</p>
                </div>
                <div class="text-center">
                   <Image
                  src="/images/logo/react.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>React</p>
                </div>
                <div class="text-center">
                <Image
                  src="/images/logo/redux.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Redux</p>
                </div>
              </div>
              
              <div class="flex items-center justify-around gap-8 sx:gap-10 sm:gap-32 md:gap-64">
               <div class="text-center">
                <Image
                  src="/images/logo/tailwind.png"
                  layout="constrained"
                  alt="Webflow logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Tailwind css</p>
                </div>
                <div class="text-center">
                <Image
                  src="/images/logo/bootstrap.jpg"
                  layout="constrained"
                  alt="Shopify logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Bootstrap</p>
                </div>
                <div class="text-center">
                   <Image
                  src="/images/logo/figma.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Figma</p>
                </div>
                <div class="text-center">
                   <Image
                  src="/images/logo/git.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Git</p>
                </div>
                <div class="text-center">
                <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Github</p>
                </div>
              </div>
              <div class="flex items-center justify-around gap-8 sx:gap-10 sm:gap-32 md:gap-64">
              <div class="text-center">
              <Image
                  src="/images/logo/vite.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Vite</p>
                </div>
                <div class="text-center">
                 <Image
                  src="/images/logo/vercel.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>Vercel</p>
                </div>
                <div class="text-center">
                 <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>something</p>
                </div>
                <div class="text-center">
                 <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>somthing</p>
                </div>
                <div class="text-center">
                 <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <p>something</p>
                </div>
              </div>
            
              
            </div>
          </div>
        </section>
   
        <br />
        {/* My workflow ends */}
      </div>
      {/* // Hero Wrapper end */}
    </>
  );
});

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: "Ilanchezhian ",
  meta: [
    {
      name: "description",
      content:
        "I Create Visually Stunning and Intuitively Functional Websites Crafted to Drive Result",
    },
  ], 
};
