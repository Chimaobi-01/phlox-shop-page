import { category, CategoryCardA, CategoryCardB } from "../utils/data";

const Categories = () => {
  return (
    <section className=" lg:px-10 px-4 mt-20 ">
      <div className="category-grid gap-6 lg:mb-20 mb-16 ">
        <CategoryCardA {...category.phone} />
        <CategoryCardA {...category.gadgets} />
        <CategoryCardB {...category.laptops} />
      </div>

      <div className="category-grid gap-6 switch-display ">
        <CategoryCardB {...category.games} />
        <CategoryCardA {...category.charging} />
        <CategoryCardA {...category.speaker} />
        <CategoryCardB {...category.games} />
      </div>
    </section>
  );
};

export default Categories;
