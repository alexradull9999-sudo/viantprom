import { motion } from 'motion/react';

export function Trust() {
  const logos = [
    "/images/partners/logo1.png",
    "/images/partners/logo2.jpg",
    "/images/partners/logo3.jpg",
    "/images/partners/logo4.jpg",
    "/images/partners/logo5.jpg",
    "/images/partners/logo6.png",
    "/images/partners/logo7.png",
    "/images/partners/logo8.png",
    "/images/partners/logo9.png",
    "/images/partners/logo11.png",
    "/images/partners/logo12.png",
    "/images/partners/logo13.png",
    "/images/partners/logo14.png",
    "/images/partners/logo15.png",
  ];

  return (
    <section className="py-24 bg-viant-50 border-t border-viant-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viant-900 mb-4">
            Нам доверяют
          </h2>
          <p className="text-lg text-viant-600">
            Мы всегда за то, чтобы клиенты были довольны
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className="w-40 h-24 sm:w-48 sm:h-28 flex items-center justify-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-viant-100 hover:border-brand-accent/30 hover:shadow-md transition-all grayscale hover:grayscale-0 opacity-60 hover:opacity-100 cursor-pointer"
            >
              <img 
                src={logo} 
                alt={`Логотип клиента ${index + 1}`} 
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
