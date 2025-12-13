import { AlertCircle } from 'lucide-react';

interface GeneralNotesProps {
  notes: string[];
}

export function GeneralNotes({ notes }: GeneralNotesProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-blue-100 rounded-full p-2">
          <AlertCircle className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-gray-900">Notas Gerais</h2>
      </div>
      <ul className="space-y-3">
        {notes.map((note, index) => (
          <li key={index} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
            <span className="text-blue-600 flex-shrink-0">•</span>
            <span className="flex-1">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}