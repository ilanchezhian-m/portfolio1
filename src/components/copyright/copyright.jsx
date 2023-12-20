import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const currentYear = new Date().getFullYear(); 
  return (
    <div class="mb-96 mt-64 flex w-full items-center justify-center md:mt-32 lg:mb-0 xl:mt-64">
      <h6 class="text-9 font-thin md:text-12">© {currentYear}  Ilanchezhian M </h6>
    </div>
  );
});
