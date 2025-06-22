'use client';

// 📌 এক ফাইলেই সব Component

export function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
      {children}
    </h2>
  );
}

export function Subheading({ children }) {
  return (
    <h3 className="text-xl md:text-2xl lg:text-3xl font-medium capitalize">
      {children}
    </h3>
  );
}

export function Paragraph({ children }) {
  return (
    <p className="text-base md:text-lg lg:text-xl text-gray-700 capitalize">
      {children}
    </p>
  );
}

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        text-sm md:text-base lg:text-lg
  px-3 md:px-5 lg:px-7
  py-2 md:py-3 lg:py-3
 
bg-red-400
  rounded-md 
  transition
      "
    >
      {children}
    </button>
  );
}
