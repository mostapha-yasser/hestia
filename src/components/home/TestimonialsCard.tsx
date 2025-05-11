import { Quote } from "lucide-react";

interface TestimonialCardInterface {
  id: number;
  name: string;
  testimonial: string;
}

export default function TestimonialsCard({
  testimonialCard,
}: {
  testimonialCard: TestimonialCardInterface;
}) {
  return (
    <div className="bg-Background p-6 rounded-lg shadow-md hover:shadow-lg transition-all 
    duration-300 h-full flex flex-col group/card ">
      <div className="flex-1 relative">
        <Quote className="w-6 h-6 text-main absolute -top-2 -left-5 opacity-0 group-hover/card:opacity-100 
        transition-opacity" />
        <p className="text-Text/80 italic mb-4">{testimonialCard.testimonial}</p>
        <Quote className="w-6 h-6 text-main absolute -bottom-2 -right-1 opacity-0 group-hover/card:opacity-100 
        transition-opacity transform rotate-180" />
      </div>
      <div className="mt-4 border-t pt-3">
        <p className="font-semibold text-Text/80">{testimonialCard.name}</p>
      </div>
    </div>
  );
}