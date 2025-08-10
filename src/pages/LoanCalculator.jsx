import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [duration, setDuration] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // EMI calculation function
  const calculateEMI = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    
    if (monthlyRate === 0) return principal / months;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return emi;
  };

  // Update calculations when inputs change
  useEffect(() => {
    const calculatedEMI = calculateEMI(loanAmount, interestRate, duration);
    const totalMonths = duration * 12;
    const totalAmount = calculatedEMI * totalMonths;
    const totalInterestAmount = totalAmount - loanAmount;

    setEmi(calculatedEMI);
    setTotalInterest(totalInterestAmount);
    setTotalPayment(totalAmount);
  }, [loanAmount, interestRate, duration]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="min-h-screen bg-financial-background py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-financial-text mb-6 font-heading">
            Loan EMI Calculator
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Calculate your monthly EMI, total interest, and total payment amount with our easy-to-use calculator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Calculator Form */}
          <div className="premium-card">
                         <h2 className="text-xl sm:text-2xl font-semibold text-financial-text mb-6 font-heading">
               Loan Details
             </h2>

            {/* Loan Amount Slider */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount: ₹{formatNumber(loanAmount)}
              </label>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹50,000</span>
                <span>₹50,00,000</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate: {interestRate}% per annum
              </label>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Duration Slider */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Duration: {duration} years
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>

                         {/* Apply Now Button */}
             <Link
               to="/enquiry"
               state={{ 
                 loanAmount, 
                 interestRate, 
                 duration,
                 emi: Math.round(emi),
                 totalInterest: Math.round(totalInterest),
                 totalPayment: Math.round(totalPayment)
               }}
               className="btn-primary w-full text-center"
             >
               Apply for This Loan
             </Link>
          </div>

                     {/* Results */}
           <div className="premium-card">
             <h2 className="text-xl sm:text-2xl font-semibold text-financial-text mb-6 font-heading">
               Your EMI Breakdown
             </h2>

                         {/* EMI Amount */}
             <div className="bg-gradient-to-r from-financial-primary to-blue-600 rounded-xl p-6 mb-6 text-white">
               <div className="text-center">
                 <div className="text-3xl sm:text-4xl font-bold mb-2 font-heading">
                   {formatCurrency(Math.round(emi))}
                 </div>
                 <div className="text-blue-100">Monthly EMI</div>
               </div>
             </div>

            {/* Other Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Principal Amount</span>
                <span className="font-semibold">{formatCurrency(loanAmount)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Interest Rate</span>
                <span className="font-semibold">{interestRate}% p.a.</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Loan Duration</span>
                <span className="font-semibold">{duration} years ({duration * 12} months)</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Total Interest Payable</span>
                <span className="font-semibold text-red-600">
                  {formatCurrency(Math.round(totalInterest))}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                <span className="text-gray-900 font-semibold">Total Payment</span>
                <span className="font-bold text-lg text-green-600">
                  {formatCurrency(Math.round(totalPayment))}
                </span>
              </div>
            </div>

            {/* Formula Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">EMI Formula</h3>
              <p className="text-sm text-gray-600">
                EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Where: P = Principal, R = Monthly Rate, N = Total Months
              </p>
            </div>
          </div>
        </div>

                 {/* Additional Info */}
         <div className="mt-12 premium-card">
           <h2 className="text-2xl font-semibold text-financial-text mb-6 font-heading">
             Important Information
           </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
               <h3 className="font-semibold text-financial-text mb-3 font-heading">What is EMI?</h3>
               <p className="text-gray-600 leading-relaxed">
                 EMI (Equated Monthly Installment) is the fixed amount you pay every month towards your loan. 
                 It includes both principal and interest components.
               </p>
             </div>
             <div>
               <h3 className="font-semibold text-financial-text mb-3 font-heading">Factors Affecting EMI</h3>
               <ul className="text-gray-600 space-y-2">
                 <li className="flex items-center"><span className="text-financial-primary mr-2">•</span> Loan amount</li>
                 <li className="flex items-center"><span className="text-financial-primary mr-2">•</span> Interest rate</li>
                 <li className="flex items-center"><span className="text-financial-primary mr-2">•</span> Loan tenure</li>
                 <li className="flex items-center"><span className="text-financial-primary mr-2">•</span> Processing fees</li>
               </ul>
             </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LoanCalculator;
