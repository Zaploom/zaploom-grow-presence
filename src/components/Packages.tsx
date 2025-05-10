
import { useState } from "react";
import PackageCard from "./PackageCard";
import { motion, AnimatePresence } from "framer-motion";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    // same package data as before
  ];

  const closeModal = () => setSelectedPackage(null);

  return (
    <section id="packages" className="py-20 lg:py-24 bg-white dark:bg-gray-900 relative theme-transition">
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-zaploom/5 dark:bg-zaploom/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Our <span className="text-zaploom relative inline-block">Packages</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 px-4">
            Choose the package that best fits your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 px-4 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`h-full transform transition-all duration-500 ${pkg.featured ? 'xl:-translate-y-4 hover:-translate-y-6' : 'hover:-translate-y-2'}`}
              data-aos={pkg.featured ? 'zoom-in' : 'fade-up'}
              data-aos-delay={index * 100}
              onClick={() => setSelectedPackage(pkg)}
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl max-w-xl w-full p-6 relative shadow-xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-zaploom"
                onClick={closeModal}
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{selectedPackage.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{selectedPackage.ideal}</p>
              <div className="text-zaploom font-bold text-lg mb-1">{selectedPackage.price}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Timeline: {selectedPackage.duration}</div>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                {selectedPackage.includes.map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              {selectedPackage.addons?.length > 0 && (
                <>
                  <p className="font-medium text-gray-600 dark:text-gray-400 mb-1">Add-ons:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                    {selectedPackage.addons.map((addon, i) => (
                      <li key={i}>
                        {addon.name} <span className="font-semibold text-zaploom">{addon.price}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {selectedPackage.upgrades?.length > 0 && (
                <>
                  <p className="font-medium text-gray-600 dark:text-gray-400 mb-1">Upgrades:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {selectedPackage.upgrades.map((upgrade, i) => (
                      <li key={i}>
                        {upgrade.name} <span className="font-semibold text-zaploom">{upgrade.price}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Packages;
