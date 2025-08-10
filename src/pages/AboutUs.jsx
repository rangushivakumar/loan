import { Link } from 'react-router-dom';

const AboutUs = () => {
  const experience = [
    {
      year: "15+",
      title: "Years Experience",
      description: "Extensive experience in banking and financial services"
    },
    {
      year: "500+",
      title: "Happy Customers",
      description: "Successfully helped customers get their dream loans"
    },
    {
      year: "15+",
      title: "Partner Banks",
      description: "Direct connections with leading banks and NBFCs"
    },
    {
      year: "₹50Cr+",
      title: "Loans Disbursed",
      description: "Total loan amount processed and disbursed"
    }
  ];

  const services = [
    {
      icon: "🏦",
      title: "Home Loans",
      description: "Best rates for buying your dream home"
    },
    {
      icon: "🚗",
      title: "Vehicle Loans",
      description: "Quick approval for car and bike loans"
    },
    {
      icon: "💼",
      title: "Business Loans",
      description: "Working capital and business expansion loans"
    },
    {
      icon: "🎓",
      title: "Education Loans",
      description: "Study abroad and higher education financing"
    },
    {
      icon: "🏢",
      title: "Commercial Loans",
      description: "Property and commercial real estate loans"
    },
    {
      icon: "💰",
      title: "Personal Loans",
      description: "Quick personal loans for any purpose"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About LoanGuide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for expert loan guidance and direct connections to leading banks
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At LoanGuide, we believe that everyone deserves access to the best financial solutions. 
                Our mission is to simplify the loan process and connect you with the most suitable loan 
                options from our extensive network of partner banks.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in the banking sector, we understand the complexities 
                of loan applications and work tirelessly to ensure you get the best rates, terms, and 
                service possible.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get in Touch
              </Link>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Direct connections with 15+ leading banks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Expert guidance throughout the process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Fast approval and disbursement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Competitive interest rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Minimal documentation requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Post-loan support and assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Experience in Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by hundreds of customers for their financial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experience.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{item.year}</div>
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                <div className="text-gray-300 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Loan Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive loan solutions for all your financial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you find the perfect loan solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rahul Sharma</h3>
              <p className="text-blue-600 font-medium mb-2">Senior Loan Advisor</p>
              <p className="text-gray-600 text-sm">
                12+ years of experience in banking and loan processing
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Patel</h3>
              <p className="text-blue-600 font-medium mb-2">Relationship Manager</p>
              <p className="text-gray-600 text-sm">
                Expert in customer relations and loan customization
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Kumar</h3>
              <p className="text-blue-600 font-medium mb-2">Banking Specialist</p>
              <p className="text-gray-600 text-sm">
                Deep knowledge of banking products and regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you find the perfect loan solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Calculate EMI
            </Link>
            <Link
              to="/enquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
