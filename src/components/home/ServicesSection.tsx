import { services } from "@/consts/Service";

export default function ServicesSection() {
 

  return (
    <section className="w-full py-16 bg-main/10" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-Text mb-3">
            Our Service
          </h2>
          <p className="text-lg text-Text/80 text-center max-w-2xl mx-auto">
            Thoughtfully crafted offerings to bring calm and nature into your space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-Background p-8  shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-headerBg  flex items-center justify-center mb-5 text-Text">
                <service.icon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-Text">{service.title}</h3>
              <p className="text-Text/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
