import { category, CategoryCardA, CategoryCardB } from "../utils/data";

const Categories = () => {
  return (
    <section className="min-h-screen m-10 mt-20">
      <div className="category-grid gap-6 mb-20 container mx-auto">
        <CategoryCardA {...category.phone} />
        <CategoryCardA {...category.gadgets} />
        <CategoryCardB {...category.laptops} />
      </div>

      <div className="category-grid gap-6 switch-display">
        <CategoryCardB {...category.games} />
        <CategoryCardA {...category.charging} />
        <CategoryCardA {...category.speaker} />
        <CategoryCardB {...category.games} />
      </div>
    </section>
  );
};

export default Categories;
