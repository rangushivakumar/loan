import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: "💰",
      title: "Best Interest Rates",
      description: "Get the lowest interest rates from top banks through our direct connections"
    },
    {
      icon: "⚡",
      title: "Quick Processing",
      description: "Fast loan approval and disbursement within 24-48 hours"
    },
    {
      icon: "📋",
      title: "Minimal Documentation",
      description: "Simple documentation process with expert guidance"
    },
    {
      icon: "🎯",
      title: "Personalized Solutions",
      description: "Tailored loan solutions based on your specific requirements"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 font-heading">
              Get the Best Loan Guidance
              <span className="block text-blue-100 mt-3">— Fast & Simple</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-8 sm:mb-10 max-w-4xl mx-auto px-4 leading-relaxed">
              Expert loan guidance with direct connections to leading banks. 
              Calculate your EMI, compare rates, and get the best deals tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link
                to="/calculator"
                className="btn-primary text-lg sm:text-xl"
              >
                Check Your EMI Now
              </Link>
              <Link
                to="/enquiry"
                className="btn-secondary text-lg sm:text-xl border-white text-white hover:bg-white hover:text-financial-primary"
              >
                Apply for Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-financial-text mb-6 font-heading">
              Why Choose LoanGuide?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              We provide comprehensive loan solutions with expert guidance and direct bank connections
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-financial-text mb-4 font-heading">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg-secondary text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl sm:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Calculate your EMI, compare loan options, and get expert guidance for your financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/calculator"
              className="btn-primary bg-white text-financial-primary hover:bg-gray-50"
            >
              Calculate EMI
            </Link>
            <Link
              to="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-financial-primary"
            >
              Contact Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-financial-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="premium-card">
              <div className="text-5xl font-bold text-financial-primary mb-4 font-heading">500+</div>
              <div className="text-gray-600 text-lg">Happy Customers</div>
            </div>
            <div className="premium-card">
              <div className="text-5xl font-bold text-financial-secondary mb-4 font-heading">₹50Cr+</div>
              <div className="text-gray-600 text-lg">Loans Disbursed</div>
            </div>
            <div className="premium-card">
              <div className="text-5xl font-bold text-financial-primary mb-4 font-heading">15+</div>
              <div className="text-gray-600 text-lg">Partner Banks</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
