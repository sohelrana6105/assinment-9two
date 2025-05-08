function Featured() {
  const services = [
    {
      icon: "⚡",
      title: "Instant Bill Payment",
      description: "Pay your utility bills instantly without any hassle",
    },
    {
      icon: "📱",
      title: "Mobile Recharge",
      description: "Recharge any mobile operator in Bangladesh",
    },
    {
      icon: "🔄",
      title: "Auto Payment",
      description: "Set up automatic payments for your regular bills",
    },
    {
      icon: "🔔",
      title: "Payment Reminder",
      description: "Get notified before your bills are due",
    },
  ];

  return (
    <>
      <section className="py-12 bg-[#6bb3f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Featured;
