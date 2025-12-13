import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Reference } from '../types/meal';

interface ReferenceSectionProps {
  section: Reference;
}

export function ReferenceSection({ section }: ReferenceSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-4 flex items-center justify-between active:bg-gray-50 transition-colors"
      >
        <div className="text-left flex-1">
          <h2 className="text-gray-900 mb-1">{section.name}</h2>
          <p className="text-sm text-gray-500">{section.subsections.length} categorias</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {section.subsections.map((subsection) => (
            <div key={subsection.id}>
              <h3 className="text-gray-900 mb-2 px-2">{subsection.name}</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <ul className="space-y-2">
                  {subsection.items.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}