import FormContactWA from "../components/marketing/FormContactWA"

export default function Contact() {
    return (
      <div>
        {/* Section 1 - */}
        <section className="py-20">
        <h1 className=" text-center text-5xl font-bold">Contact</h1>

          <main className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Grid 1 */}
            <div className="p-8 border-2 rounded-md shadow-2xl">
              {contacts.map((contact,index)=> (
                <div className="flex items-center mb-6" key={index}>
                  <img 
                  className="size-10 me-4"
                  src={contact.img} alt="" />
                  <div>
                    <h5 className="font-bold"> {contact.head} </h5>
                    <p> {contact.p} </p>
                    <p> {contact.p1} </p>
                  </div>
                </div>
              ))}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253914.0492411797!2d106.87149536654067!3d-6.075724937145594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f57cf3f13033%3A0x74d8c9c9d4109930!2sPT.%20PANGKAL%20MULTIKARYA!5e0!3m2!1sen!2sus!4v1722802471126!5m2!1sen!2sus" 
                className="w-full min-h-80"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Grid 2 */}
            <div className="shadow-2xl">
              <FormContactWA/>
            </div>
      
          </main>
        </section>
        
      </div>
    )
  }
const contacts = [
  {
    head:   'Address',
    p:      'Jalan Danau Sunter Utara Blok J12 No.41,',
    p1:     'Sunter Agung, Tj. Priok, DKI Jakarta, 14350',
    img:    'https://img.icons8.com/?size=100&id=3723&format=png&color=000000',
  },
  {
    head:   'Call Us',
    p:      '(021) 6510 012',
    p1:     '',
    img:    'https://img.icons8.com/?size=100&id=9660&format=png&color=000000',
  },
  {
    head:   'Email Us',
    p:      'marketing@pangkalmultikarya.com',
    p1:     '',
    img:    'https://img.icons8.com/?size=100&id=12580&format=png&color=000000',
  },
]