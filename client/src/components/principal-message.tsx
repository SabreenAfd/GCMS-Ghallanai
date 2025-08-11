export default function PrincipalMessage() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.gcmsmardan.edu.pk/uploads/principal/67ea6db8725b5.jpg" 
                alt="Ali Bahadar - Principal GCMS Mardan" 
                className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                data-testid="img-principal"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-testid="text-principal-title">
                Principal's Message
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2" data-testid="text-principal-name">
                  Ali Bahadar
                </h3>
                <p className="text-gray-600" data-testid="text-principal-position">
                  Principal, GCMS MARDAN
                </p>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-4" data-testid="text-principal-message">
                <p>Welcome to GCMS MARDAN, a thriving community of learners where curiosity, creativity and academic excellence flourish. Our mission is to empower students to become lifelong learners, critical thinkers and compassionate leaders, equipped to succeed in a rapidly changing world and make a profound impact on society.</p>
                <p>We nurture the intellectual, emotional and social growth of our students, instilling values of integrity, resilience, empathy and responsibility. Our goal is to cultivate compassionate and courageous individuals who are prepared to make a meaningful difference in the world.</p>
                <p className="font-medium text-primary">To our students, I extend my warmest welcome and best wishes for an extraordinary academic journey. May your time at GCMS MARDAN be filled with discovery, growth and success. Amen!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
