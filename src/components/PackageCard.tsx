
import { motion } from "framer-motion";

const PackageCard = ({
  title,
  price,
  duration,
  ideal,
  includes = [],
  addons = [],
  upgrades = [],
  featured = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 h-full flex flex-col ${
        featured
          ? "ring-2 ring-zaploom shadow-xl dark:shadow-zaploom/20 hover:shadow-2xl hover:shadow-zaploom/30 dark:hover:shadow-zaploom/30"
          : "border border-gray-100 dark:border-gray-700 hover:shadow-lg"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-zaploom text-white text-xs font-semibold px-3 py-1 rounded-bl-xl z-10">
          Best Value
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{ideal}</p>
        </div>

        <div className="text-zaploom font-bold text-lg">{price}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Timeline: {duration}</div>

        <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          {includes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {addons?.length > 0 && (
          <div>
            <p className="mt-4 font-medium text-sm text-gray-600 dark:text-gray-400">Add-ons:</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
              {addons.map((addon, i) => (
                <li key={i}>
                  {addon.name} <span className="font-semibold text-zaploom">{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {upgrades?.length > 0 && (
          <div>
            <p className="mt-4 font-medium text-sm text-gray-600 dark:text-gray-400">Upgrades:</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
              {upgrades.map((upgrade, i) => (
                <li key={i}>
                  {upgrade.name} <span className="font-semibold text-zaploom">{upgrade.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PackageCard;

