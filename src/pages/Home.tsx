import React from 'react';
import { specialties } from '../data/specialties';
import { SpecialtyCard } from '../components/SpecialtyCard';
import { GlobalSearch } from '../components/search/GlobalSearch';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { cn } from '../lib/utils';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Especialidades Médicas</h1>
        <p className="text-lg text-gray-600">
          Selecione uma especialidade para iniciar uma consulta
        </p>
      </div>
      
      <div className="mb-8">
        <GlobalSearch />
      </div>
      
      <Link 
        to="/physical-exam"
        className="block mb-8 p-6 bg-white rounded-lg shadow-sm border-2 border-primary/20 hover:border-primary/40 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Stethoscope className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Guia de Exame Físico</h2>
            <p className="text-gray-600">
              Acesse roteiros sistemáticos para exame físico baseado em evidências
            </p>
          </div>
        </div>
      </Link>

      <div className={cn(
        "grid gap-6",
        "grid-cols-1",
        "md:grid-cols-2",
        "lg:grid-cols-3",
        "xl:grid-cols-4"
      )}>
        {specialties.map((specialty) => (
          <SpecialtyCard key={specialty.id} specialty={specialty} />
        ))}
      </div>
    </div>
  );
};

export default Home;