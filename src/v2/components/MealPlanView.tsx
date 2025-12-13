import { useState } from 'react';
import { MealSection } from './MealSection';
import { ReferenceSection } from './ReferenceSection';
import { GeneralNotes } from './GeneralNotes';
import { Utensils, BookOpen, Info } from 'lucide-react';
import { mealPlanData, referenceSections, generalNotes, dailyTotals } from '../data/mealData';

export function MealPlanView() {
  const [activeTab, setActiveTab] = useState<'meals' | 'reference' | 'notes'>('meals');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 pt-6 pb-8 sticky top-0 z-10 shadow-lg">
        <h1 className="mb-4">O Meu Plano Alimentar</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-blue-100 text-xs mb-1">Energia</p>
            <p className="text-white">{dailyTotals.energia_kcal} kcal</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-blue-100 text-xs mb-1">Proteína</p>
            <p className="text-white">{dailyTotals.proteina_g}g</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-blue-100 text-xs mb-1">Hidratos</p>
            <p className="text-white">{dailyTotals.hidratos_carbono_g}g</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-blue-100 text-xs mb-1">Gordura</p>
            <p className="text-white">{dailyTotals.gordura_g}g</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {activeTab === 'meals' ? (
          <div className="space-y-3">
            {mealPlanData.map((meal) => (
              <MealSection key={meal.id} meal={meal} />
            ))}
          </div>
        ) : activeTab === 'reference' ? (
          <div className="space-y-3">
            {referenceSections.map((section) => (
              <ReferenceSection key={section.id} section={section} />
            ))}
          </div>
        ) : (
          <GeneralNotes notes={generalNotes} />
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-3">
          <button
            onClick={() => setActiveTab('meals')}
            className={`flex flex-col items-center gap-1 py-3 transition-colors ${
              activeTab === 'meals'
                ? 'text-blue-600'
                : 'text-gray-400'
            }`}
          >
            <Utensils className="w-6 h-6" />
            <span className="text-xs">Refeições</span>
          </button>
          <button
            onClick={() => setActiveTab('reference')}
            className={`flex flex-col items-center gap-1 py-3 transition-colors ${
              activeTab === 'reference'
                ? 'text-blue-600'
                : 'text-gray-400'
            }`}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs">Equivalências</span>
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex flex-col items-center gap-1 py-3 transition-colors ${
              activeTab === 'notes'
                ? 'text-blue-600'
                : 'text-gray-400'
            }`}
          >
            <Info className="w-6 h-6" />
            <span className="text-xs">Notas</span>
          </button>
        </div>
      </div>
    </div>
  );
}