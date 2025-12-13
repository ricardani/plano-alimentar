import type { FoodGroup } from '../types/meal';

interface FoodGroupCardProps {
  group: FoodGroup;
}

export function FoodGroupCard({ group }: FoodGroupCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h3 className="text-gray-900 mb-3">{group.name}</h3>
      <ul className="space-y-2">
        {group.variations.map((variation, index) => (
          <li key={index} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
            <span className="text-blue-600 flex-shrink-0">•</span>
            <span className="flex-1">{variation}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}