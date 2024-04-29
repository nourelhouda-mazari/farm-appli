// GreenProduce.js

import Link from "next/link";

export default function GreenProduce({ products }) {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Shop Green Produce</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Find the freshest fruits and vegetables for a healthy lifestyle.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Map through the products array to render each green produce item */}
          {products.map((product) => (
            <div key={product.id} className="grid gap-6 relative group">
              <Link href="#">
                <a className="absolute inset-0 z-10" aria-label="View">
                  <span className="sr-only">View</span>
                </a>
              </Link>
              {/* Render product image */}
              <img
                alt={product.name}
                className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
                height="600"
                src={product.image}
                width="450"
              />
              <div className="grid gap-1">
                {/* Render product name and description */}
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm leading-none">{product.description}</p>
              </div>
              {/* Render shop button */}
              <p className="font-semibold underline underline-offset-4 text-green-500">Shop</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
