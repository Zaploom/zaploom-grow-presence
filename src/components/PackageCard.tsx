
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

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
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl relative h-full flex flex-col ${
        featured ? 'ring-2 ring-zaploom shadow-lg' : 'border border-gray-100 dark:border-gray-700'
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-zaploom"></div>
      )}
      {featured && (
        <span className="absolute -top-3 right-4 bg-zaploom text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg z-10">
          Best Value
        </span>
      )}
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-6 pt-3">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-lg font-semibold text-zaploom dark:text-zaploom-light">{price}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Delivery: {duration}</p>
        </div>
        
        <div className="mb-6">
          <Badge variant="outline" className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-normal">
            {ideal}
          </Badge>
        </div>
        
        <div className="mb-8 flex-grow">
          <p className="font-medium mb-3 text-gray-900 dark:text-white">Includes:</p>
          <ul className="space-y-2">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-zaploom dark:text-zaploom-light mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {(addons || upgrades) && (
          <div className="mt-auto">
            <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
              <p className="font-medium mb-3 text-gray-900 dark:text-white">
                {featured ? "Free Add-ons:" : upgrades ? "Upgrades:" : "Add-ons:"}
              </p>
              <ul className="space-y-2">
                {(featured ? addons : upgrades || addons)?.map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                    <span className={`font-medium ${featured ? "text-zaploom dark:text-zaploom-light" : "text-gray-900 dark:text-white"}`}>
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
