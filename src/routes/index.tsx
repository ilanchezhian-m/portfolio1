import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { ButtonSecond } from "~/components/button/ButtonSecond";
// import { ButtonThird } from "~/components/button/buttonThird";
import PhArrowRight from "~/Icons/main/PhArrowRight";
import PhDevicesLight from "~/Icons/Usp/PhDevicesLight";
import PhGearSixLight from "~/Icons/Usp/PhGearSixLight";
import PhHeadsetLight from "~/Icons/Usp/PhHeadsetLight";
import PhMagicWandLight from "~/Icons/Usp/PhMagicWandLight";
import PhPresentationChartLight from "~/Icons/Usp/PhPresentationChartLight";
import PhTestTubeLight from "~/Icons/Usp/PhTestTubeLight";
// import { WorkflowReact } from "~/components/workflow/workflow-react";
import { MockupReact } from "~/components/mockup/mockup-react";
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
  const image = sanity.value[0];

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
        <div class="flex flex-col gap-16">
        <MockupReact />
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
        </div>
        {/* adding about details here  */}
        <section class="container flex min-w-full flex-col gap-32 md:gap-64 lg:gap-128">
        {/* Why me */}
        <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-96">
          <h3 class="text-33 font-medium sm:text-40 md:text-61 xl:text-80">
            Why Me?
          </h3>
          <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row lg:px-64">
            <div class="max-w-[350px] overflow-hidden rounded-4xl">
              <Image
                src={urlFor(image.aboutImageMain).url()}
                layout="constrained"
                alt={image.AboutImageMainAlt}
                width={900}
                height={1600}
                background="auto"
                loading="eager"
                class="w-full object-cover object-center"
              />
            </div>
            <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32">
              <p class="max-w-prose text-16">
                <span class="font-semibold">
                  With a focus on creating beautiful and functional websites
                </span>{" "}
                that drive results, I have the skills and expertise to help you
                achieve your online goals. Whether you're a small business just
                starting out, or a larger company looking to expand your online
                reach, I have the tools and knowledge you need to succeed.
              </p>
              <p class="max-w-prose text-16">
                <span class="font-semibold">From design to development,</span> I
                can take your website from concept to completion with ease. I
                understand that each business is unique, and I take the time to
                get to know you and your specific needs. This allows me to
                create custom solutions that are tailored to your business and
                your audience.
              </p>
              <p class="max-w-prose text-16">
                <span class="font-semibold">
                  In addition to web development,
                </span>{" "}
                I also offers business strategy and consulting services. I can
                help you identify areas for growth and improvement, and provide
                actionable advice and guidance to help you reach your goals.
                With a focus on driving results, I am the ideal partner for
                businesses of all sizes and industries.
              </p>
            </div>
          </div>
        </div>

        {/* My Story */}
        <div class="flex flex-col items-center gap-32 md:gap-96">
          <h3 class="text-33 font-medium sm:text-40 md:text-61 xl:text-80">
            My story
          </h3>

          <div class="flex flex-col items-center gap-32 md:gap-96">
            <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row lg:gap-32 lg:px-64 xl:gap-64">
              <div class="max-w-[350px] overflow-hidden rounded-4xl">
                <Image
                  src={urlFor(image.aboutSecondaryImage1).url()}
                  layout="constrained"
                  alt={image.AboutImage1Alt}
                  width={960}
                  height={1280}
                  background="auto"
                  class="w-full object-cover object-center"
                />
              </div>
              <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32">
                <p class="max-w-prose text-16">
                  <span class="font-semibold">
                    I'm Anirban Das - a passionate web developer from India.
                  </span>{" "}
                  I've always had a love for technology and creating things, and
                  building websites allows me to combine those two passions in
                  the best way possible.
                  <br />
                  <br /> I started my journey into the world of web development
                  at a young age, and I've been hooked ever since. I find it
                  truly fascinating how the internet connects people from all
                  over the world, and I'm always excited to learn more about how
                  it all works.
                </p>
              </div>
            </div>

            <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-128">
              <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row-reverse lg:gap-32 lg:px-64 xl:gap-64">
                <div class="max-w-[350px] overflow-hidden rounded-4xl">
                  <Image
                    src={urlFor(image.aboutSecondaryImage2).url()}
                    layout="constrained"
                    alt={image.AboutImage2Alt}
                    width={960}
                    height={1280}
                    background="auto"
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32 lg:px-0 lg:pr-32">
                  <p class="max-w-prose text-16">
                    <span class="font-semibold">
                      Over the years, I've worked hard
                    </span>{" "}
                    to become proficient in a variety of programming languages
                    including HTML, CSS, JavaScript, and PHP. I love being able
                    to take an idea and turn it into a beautiful, functional
                    website that clients can be proud of.
                    <br />
                    <br />
                    One of the things I'm most proud of in my work is my
                    attention to detail. I believe that every element of a
                    website should be perfect, and I always strive to ensure
                    that everything from the layout to the colors to the text is
                    just right. I'm also a great communicator, and I believe
                    that collaboration is key to creating the best possible
                    website for my clients.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-128">
              <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row lg:gap-32 lg:px-64 xl:gap-64">
                <div class="max-w-[350px] overflow-hidden rounded-4xl">
                  <Image
                    src={urlFor(image.aboutSecondaryImage3).url()}
                    layout="constrained"
                    alt={image.AboutImage3Alt}
                    width={960}
                    height={1280}
                    background="auto"
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32">
                  <p class="max-w-prose text-16">
                    <span class="font-semibold">
                      Outside of web development,
                    </span>{" "}
                    I'm also an avid photographer, a guitarist and a lover of
                    all things creative. From building drones to tinkering with
                    Raspberry Pi and Arduinos, I thrive on the excitement of DIY
                    projects - there's nothing like getting my hands dirty and
                    bringing my ideas to life. I also enjoy exploring new places
                    and trying out new recipes in the kitchen. And of course, I
                    always have a good book on hand.
                    <br />
                    <br />
                    In short, I'm someone who is truly passionate about what I
                    do. I'm always pushing myself to learn more and to create
                    the best possible websites for my clients. I'm excited to
                    see where this journey takes me next!reach, I have the tools
                    and knowledge you need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My toolkit */}
      <section>
        <div class=" flex flex-col gap-16 px-8 sm:px-32 md:gap-32 md:px-64 xl:gap-64">
          {/* texts */}
          <div class="flex flex-col items-center gap-16 md:gap-32 xl:gap-64">
            <h3 class="text-center text-33 font-medium sm:text-40 md:text-61 xl:text-80">
              My toolkit
            </h3>
            <h4 class="text-center text-16 md:text-19 xl:text-27">
              I’m capable of working confidently with any tools necessary to
              achieve goals.
              <br />
              These are few of my favorites
            </h4>
          </div>
          {/* Graphics */}
          <div class="flex max-w-1080 flex-col gap-16 xl:gap-64">
            {/* Toolkit Grid */}
            <div class="overflow-hidden rounded-4xl border-4 border-black">
              <Image
                src="/images/Frame.png"
                layout="constrained"
                alt="An Image of all the logos for the toolkits I use for making websites. Eg: next.js, react.js,  webflow, shopify etc"
                width={1080}
                height={768}
                background="auto"
                class="w-full object-cover object-center"
              />
            </div>
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
        </div>
      </section>
        {/* USP Section */}
        <section class="flex w-full flex-col items-center">
          {/* USP Start */}
          <div class="flex flex-col items-center gap-32 px-8 md:gap-64 md:px-16 lg:gap-96">
            <h3 class="text-28 sm:text-33 md:text-61 lg:text-80">
              Everything you need
            </h3>

            {/* usp cards */}
            <div class="grid w-full grid-cols-1 gap-16 md:gap-32 lg:max-w-1080 lg:grid-cols-2">
              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-32 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhGearSixLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h4 class="text-23 md:text-27">Website Optimization</h4>
                  <p class="max-w-prose text-16">
                    Want to know how your website can perform even better? I
                    offer professional website reviews to help you identify
                    areas for improvement and optimize your site for better
                    results.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-32 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhPresentationChartLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h4 class="text-23 md:text-27">Goal-Oriented Strategy</h4>
                  <p class="max-w-prose text-16">
                    Whether you're a small business or a large enterprise, I'll
                    work with you to develop a tailored strategy that aligns
                    with your goals and drives conversions.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-32 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhMagicWandLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h4 class="text-23 md:text-27">User-Centric Design</h4>
                  <p class="max-w-prose text-16">
                    Your website is the digital face of your brand, and a great
                    user experience can make all the difference. I specialize in
                    creating user-centric designs that engage your audience and
                    guide them towards your desired actions.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-32 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhDevicesLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h4 class="text-23 md:text-27">Personalized Solutions</h4>
                  <p class="max-w-prose text-16">
                    Every business has unique needs, and that's why I offer
                    customized web development solutions to help you achieve
                    your goals. Using the latest technologies and best
                    practices, I'll create a tailored solution that delivers the
                    results you need.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-32 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhTestTubeLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h4 class="text-23 md:text-27">Stringent Quality Testing</h4>
                  <p class="max-w-prose text-16">
                    A successful website requires more than just great design
                    and functionality. It also needs to perform flawlessly
                    across all devices and platforms. That's why I offer
                    rigorous testing services to ensure your website meets the
                    highest standards of quality and performance.{" "}
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-32 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhHeadsetLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h4 class="text-23 md:text-27">Continuous Support</h4>
                  <p class="max-w-prose text-16">
                    From regular maintenance and updates to ongoing optimization
                    and support, I'll work with you to ensure your website
                    continues to perform at its best. With my ongoing support
                    services, you can focus on your business while I take care
                    of your website.
                  </p>
                </div>
              </div>
            </div>
            {/* usp card end */}
            <div class="text-16 md:text-21 lg:-mt-32">
              <Link
                href="/services"
                aria-label="Find out more about my services"
              >
                <span class="flex items-center justify-center gap-4 hover:cursor-pointer md:gap-8">
                  Find out more about my services{" "}
                  <span class="inline-block">
                    <PhArrowRight />
                  </span>
                </span>
              </Link>
            </div>
          </div>
          {/* USP end */}
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
              <h3 class="text-33 sm:text-40 md:text-47">Hi, I’m Anirban</h3>
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
                <Image
                  src="/images/logo/html.png"
                  layout="constrained"
                  alt="Webflow logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <Image
                  src="/images/logo/css.png"
                  layout="constrained"
                  alt="Shopify logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                   <Image
                  src="/images/logo/javascript.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                   <Image
                  src="/images/logo/react.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <Image
                  src="/images/logo/redux.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
              </div>
              
              <div class="flex items-center justify-around gap-8 sx:gap-10 sm:gap-32 md:gap-64">
                <Image
                  src="/images/logo/tailwind.png"
                  layout="constrained"
                  alt="Webflow logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <Image
                  src="/images/logo/bootstrap.jpg"
                  layout="constrained"
                  alt="Shopify logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                   <Image
                  src="/images/logo/figma.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                   <Image
                  src="/images/logo/git.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
              </div>
              <div class="flex items-center justify-around gap-8 sx:gap-10 sm:gap-32 md:gap-64">
              <Image
                  src="/images/logo/vite.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                 <Image
                  src="/images/logo/vercel.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                 <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                 <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
                 <Image
                  src="/images/logo/github.png"
                  layout="constrained"
                  alt="Vercel logo image."
                  width={30}
                  height={30}
                  background="auto"
                  class="w-50 md:w-104 xl:w-152"
                />
              </div>
            
              
            </div>
          </div>
        </section>
        {/* My toolkit ends */}

        {/* My Workflow */}
        {/* <WorkflowReact client:idle /> */}
        <br />
        {/* My workflow ends */}
      </div>
      {/* // Hero Wrapper end */}
    </>
  );
});

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: "Anirban Das - Fullstack Developer & UX Designer",
  meta: [
    {
      name: "description",
      content:
        "I Create Visually Stunning and Intuitively Functional Websites Crafted to Drive Result",
    },
    // Open graph
    {
      property: "og:title",
      content: "Anirban Das - Fullstack Developer & UX Designer",
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
      content: "article",
    },
    {
      property: "og:description",
      content:
        "I Create Visually Stunning and Intuitively Functional Websites Crafted to Drive Result",
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
    {
      property: "og:url",
      content: "https://www.anirbandas.in", // Replace with your website URL
    },
    {
      property: "og:type",
      content: "website",
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
      content: "Anirban Das - Fullstack Developer & UX Designer",
    },
    {
      name: "twitter:description",
      content:
        "I Create Visually Stunning and Intuitively Functional Websites Crafted to Drive Result",
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
      href: "https://www.anirbandas.in",
    },
  ], 
};
