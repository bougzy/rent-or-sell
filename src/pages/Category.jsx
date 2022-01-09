import { useParams } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();

  const pageTitle = categoryName === 'sale' ? 'For Sale' : 'For Rent';

  return (
    <main className="min-h-screen max-w-7xl px-3 mx-auto">
      <section className="lg:py-24 md:py-20 py-14">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8">{pageTitle}</h1>
      </section>
    </main>
  );
}

export default Category;