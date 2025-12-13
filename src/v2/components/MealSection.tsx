import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FoodGroupCard } from './FoodGroupCard';
import type { Meal } from '../types/meal';

interface MealSectionProps {
  meal: Meal;
}

export function MealSection({ meal }: MealSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-4 flex items-center justify-between active:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="text-3xl flex-shrink-0">{meal.icon}</div>
          <div className="text-left flex-1 min-w-0">
            <h2 className="text-gray-900 mb-1">{meal.name}</h2>
            {meal.nutritionalInfo && (
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                  {meal.nutritionalInfo.energia_kcal} kcal
                </span>
                <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                  {meal.nutritionalInfo.proteina_g}g P
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 ml-2">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {meal.foodGroups.map((group) => (
            <FoodGroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}