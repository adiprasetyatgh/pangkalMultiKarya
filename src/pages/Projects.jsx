import LayoutProjects from "../layouts/LayoutProjects";

export default function Projects() {
    return (
      <div>
        {/* Section 1 - */}
        <section className="py-4">
          <main className="container mx-auto px-10">
            <h1 className="text-4xl text-center font-bold mb-4">Our Projects</h1>
            <LayoutProjects/>
          </main>
        </section>
        
      </div>
    )
  }