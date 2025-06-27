export default function FullWidthSection({ children, className = '' }) {
  return (
    <section className={`w-screen bg-black text-white py-12 ${className}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </section>
  );
}
