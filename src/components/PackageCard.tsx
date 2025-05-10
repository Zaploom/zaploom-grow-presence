
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  price: string;
  duration: string;
  ideal: string;
  includes: string[];
  addons?: Array<{ name: string; price: string }>;
  featured?: boolean;
  upgrades?: Array<{ name: string; price: string }>;
}

const PackageCard = ({
  title,
  price,
  duration,
  ideal,
  includes,
  addons,
  upgrades,
  featured = false,
}: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col ${
        featured
          ? "ring-2 ring-zaploom shadow-xl dark:shadow-zaploom/20 hover:shadow-2xl hover:shadow-zaploom/30 dark:hover:shadow-zaploom/30"
          : "border border-gray-100 dark:border-gray-700 hover:shadow-lg"
      }}
      whileHover={featured ? { scale: 1.02 } : { scale: 1.01 }}
    >
      {featured && (
        <>
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-zaploom via-zaploom-light to-zaploom" />
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1,
              type: "spring",
              stiffness: 300
            }}
            className="absolute -top-4 right-4 bg-zaploom text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg z-10 pulse-animation"
            style={{
              animation: "pulse 2s infinite",
              boxShadow: "0 0 0 rgba(139, 37, 72, 0.4)",
            }}
          >
            Best Value
          </motion.span>
        </>
      )}

      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-6 pt-3">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className={text-lg font-semibold ${featured ? 'text-zaploom dark:text-zaploom-light' : 'text-gray-700 dark:text-gray-300'}}>
            {price}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Delivery: {duration}
          </p>
        </div>

        <div className="mb-5">
          <Badge
            variant="outline"
            className={${
              featured 
              ? "bg-zaploom/10 text-zaploom dark:bg-zaploom-light/10 dark:text-zaploom-light border-zaploom/20 dark:border-zaploom-light/20" 
              : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            } font-normal}
          >
            {ideal}
          </Badge>
        </div>

        <div className="mb-8 flex-grow">
          <p className={font-medium mb-3 ${featured ? 'text-zaploom dark:text-zaploom-light' : 'text-gray-900 dark:text-white'}}>
            Includes:
          </p>
          <ul className="space-y-2.5">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className={h-5 w-5 ${featured ? 'text-zaploom dark:text-zaploom-light' : 'text-gray-600 dark:text-gray-400'} mr-2 flex-shrink-0 mt-0.5} />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {(addons || upgrades) && (
          <div className="mt-auto">
            <div className={border-t ${featured ? 'border-zaploom/20 dark:border-zaploom-light/20' : 'border-gray-100 dark:border-gray-700'} pt-4 space-y-4}>
              {featured && addons && (
                <>
                  <p className="font-medium text-zaploom dark:text-zaploom-light">
                    Free Add-ons:
                  </p>
                  <ul className="space-y-2.5">
                    {addons.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-gray-600 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="font-medium text-zaploom dark:text-zaploom-light">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {!featured && upgrades && (
                <>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Upgrades:
                  </p>
                  <ul className="space-y-2.5">
                    {upgrades.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-gray-600 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {!featured && !upgrades && addons && (
                <>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Add-ons:
                  </p>
                  <ul className="space-y-2.5">
                    {addons.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-gray-600 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Add a glow effect behind the featured card */}
      {featured && (
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-zaploom/5 via-transparent to-zaploom/5 rounded-xl blur-xl opacity-75"></div>
      )}
    </motion.div>
  );
};

export default PackageCard;