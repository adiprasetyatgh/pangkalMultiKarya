import LayoutCatalog from "../layouts/LayoutCatalog";

export default function Catalogs() {
    return (
      <div>
        {/* Section 1 - */}
        <section className="py-4 bg-gray-100">
          <main className="container mx-auto px-10 ">
            <h1 className="text-4xl text-center font-bold mb-4">Catalog</h1>
            <LayoutCatalog/>
          </main>
        </section>
        
      </div>
    )
  }