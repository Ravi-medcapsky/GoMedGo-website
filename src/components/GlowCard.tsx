import { useState } from "react";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  details?: string;
  badge?: string;
  onClick?: () => void;
}

function GlowCard({
  title,
  description,
  image,
  details = "Discover cutting-edge solutions tailored to transform your business with innovative technology and seamless integration.",
  badge = "Featured",
  onClick,
}: CardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative max-w-sm cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Animated background glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-sm opacity-0 group-hover:opacity-75 transition-all duration-700 ${
          isHovered ? "animate-pulse" : ""
        }`}
      />

      {/* Main card */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 transform transition-all duration-500 hover:scale-[1.02]">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            <Sparkles className="w-3 h-3" />
            {badge}
          </div>
        </div>

        {/* Image container with overlay */}
        <div className="relative h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

          {/* Floating elements */}
          <div
            className={`absolute top-6 right-6 w-2 h-2 bg-white rounded-full transition-all duration-500 ${
              isHovered ? "scale-150 shadow-lg" : ""
            }`}
          />
          <div
            className={`absolute top-10 right-10 w-1 h-1 bg-white/70 rounded-full transition-all duration-700 ${
              isHovered ? "scale-200" : ""
            }`}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
              {title}
            </h3>

            <div
              className={`transform transition-all duration-300 p-2 rounded-full ${
                expanded
                  ? "rotate-180 bg-purple-100 dark:bg-purple-900"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>

          {/* Progress indicator */}
          <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ${
                isHovered ? "w-full" : "w-1/3"
              }`}
            />
          </div>

          {/* Expandable content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 space-y-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {details}
              </p>

              {/* Action button */}
              <button
                className="group/btn relative w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                <div className="relative flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div
            className={`h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-all duration-700 ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default GlowCard;
