'use client';

export default function SectionWrapper({ children }) {
  return (
    <section className="
     max-w-full     
      sm:max-w-[767px] 
     mx-auto
      px-4 
      text-center 
      py-12 
      md:py-16 
      lg:py-20




    ">
      {children}
    </section>
  );
}
