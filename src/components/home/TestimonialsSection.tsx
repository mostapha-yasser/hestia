"use client"
import { testimonials } from "@/consts/testimonials";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsSection() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full lg:w-10/12 mx-auto py-16 px-8 bg-main/10 relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-Text mb-12">
           Testimonials
        </h2>
        
        <button 
          onClick={scrollLeft}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-Background p-2 rounded-full shadow-md  cursor-pointer transition-all z-10 opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-Text" />
        </button>
        
        <button 
          onClick={scrollRight}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-Background p-2 rounded-full shadow-md  cursor-pointer transition-all z-10 opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-Text" />
        </button>

        <div 
          ref={scrollContainer}
          className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
        >
          <div className="flex space-x-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 w-80 snap-start cursor-grab active:cursor-grabbing"
              >
                <TestimonialsCard testimonialCard={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
