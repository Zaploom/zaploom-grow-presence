
import { TrendingUp, Users, Clock, Target } from "lucide-react";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  change?: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

const ProjectMetrics = ({ metrics }: ProjectMetricsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <IconComponent className="h-4 w-4 text-zaploom" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {metric.label}
              </span>
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </div>
            {metric.change && (
              <div className="text-xs text-green-600 dark:text-green-400">
                {metric.change}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectMetrics;
