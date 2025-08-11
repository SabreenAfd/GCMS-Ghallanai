import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 500, label: "Students Enrolled", suffix: "+" },
  { value: 5000, label: "Library Books", suffix: "+" },
  { value: 50, label: "Expert Faculty", suffix: "+" }
];

export default function Statistics() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate each counter
            stats.forEach((stat, index) => {
              const increment = stat.value / 100;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                
                setAnimatedValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = Math.floor(current);
                  return newValues;
                });
              }, 20);
            });
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-stats-title">
            Our Achievement Numbers
          </h2>
          <p className="text-lg opacity-90" data-testid="text-stats-subtitle">
            Growing stronger with each passing year
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-item-${index}`}>
              <div 
                className="text-5xl font-bold mb-2 animate-counter"
                data-testid={`stat-value-${index}`}
              >
                {animatedValues[index]}{stat.suffix}
              </div>
              <div className="text-xl opacity-80" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
