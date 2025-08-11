const stars = [
  {
    name: "Shah Fahad",
    achievement: "First Position in KPBT&CE Peshawar",
    image: "https://www.gcmsmardan.edu.pk/uploads/stars/1743160667.jpg",
    gradient: "from-accent to-yellow-500",
    icon: "fas fa-trophy"
  },
  {
    name: "Imran Ullah",
    achievement: "Second Position In KPBT&CE Peshawar",
    image: "https://www.gcmsmardan.edu.pk/uploads/stars/1743160703.jpg",
    gradient: "from-gray-400 to-gray-500",
    icon: "fas fa-medal"
  },
  {
    name: "Nouman",
    achievement: "Third Position In KPBT&CE Peshawar",
    image: "https://www.gcmsmardan.edu.pk/uploads/stars/1743160740.jpg",
    gradient: "from-yellow-600 to-yellow-700",
    icon: "fas fa-award"
  }
];

export default function ShiningStars() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="text-stars-title">
            Shining Stars
          </h2>
          <p className="text-gray-600 text-lg" data-testid="text-stars-subtitle">
            Celebrating our top achievers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stars.map((star, index) => (
            <div 
              key={index} 
              className={`text-center bg-gradient-to-b ${star.gradient} rounded-xl p-8 text-white shadow-lg`}
              data-testid={`card-star-${index}`}
            >
              <img 
                src={star.image} 
                alt={star.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
                data-testid={`img-star-${index}`}
              />
              <h3 className="text-xl font-bold mb-2" data-testid={`text-star-name-${index}`}>
                {star.name}
              </h3>
              <p className="text-sm opacity-90" data-testid={`text-star-achievement-${index}`}>
                {star.achievement}
              </p>
              <div className="mt-4">
                <i className={`${star.icon} text-3xl`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
