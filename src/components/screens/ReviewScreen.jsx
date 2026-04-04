/**
 * ReviewScreen — Etapa 11: Revisão Final
 * Mostra todas as respostas organizadas por seção
 * Permite voltar para editar qualquer etapa
 */
import { motion } from 'framer-motion';
import {
  Building2, Target, Layers, Package, Settings,
  Zap, FolderOpen, Sparkles, Clock, Pencil,
} from 'lucide-react';
import { REVIEW_LABELS, REVIEW_SECTIONS } from '../../data/quizData';

// Mapa de ícones
const ICON_MAP = {
  Building2, Target, Layers, Package, Settings,
  Zap, FolderOpen, Sparkles, Clock,
};

// Etapa correspondente a cada seção (para navegação "Editar")
const SECTION_STEP_MAP = {
  "Dados da Empresa": 1,
  "Objetivos do Projeto": 2,
  "Solução Desejada": 3,
  "Conteúdo e Catálogo": 4,
  "Autonomia": 5,
  "Funcionalidades": 6,
  "Material Disponível": 7,
  "Posicionamento": 8,
  "Prazo e Investimento": 9,
};

// Formatar valor para exibição
function formatValue(value) {
  if (value === undefined || value === null || value === '') return null;
  if (Array.isArray(value)) {
    if (value.length === 0) return null;
    return value.join(', ');
  }
  return String(value);
}

export default function ReviewScreen({ formData, onGoToStep }) {
  return (
    <div className="space-y-6">
      {REVIEW_SECTIONS.map((section, sectionIndex) => {
        const Icon = ICON_MAP[section.icon] || Sparkles;
        const stepNumber = SECTION_STEP_MAP[section.title];

        // Filtrar campos que têm valor
        const filledFields = section.fields.filter((field) => {
          const val = formData[field];
          return val !== undefined && val !== null && val !== '' && !(Array.isArray(val) && val.length === 0);
        });

        // Não mostrar seção se não há campos preenchidos
        if (filledFields.length === 0) return null;

        return (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.05, duration: 0.3 }}
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
            }}
          >
            {/* Cabeçalho da seção */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-accent-soft)' }}
                >
                  <Icon size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  {section.title}
                </h3>
              </div>
              {stepNumber && (
                <button
                  type="button"
                  onClick={() => onGoToStep(stepNumber)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
                  style={{
                    color: 'var(--color-text-accent)',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-soft)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Pencil size={12} />
                  Editar
                </button>
              )}
            </div>

            {/* Campos */}
            <div className="px-5 py-4 space-y-3">
              {filledFields.map((field) => {
                const label = REVIEW_LABELS[field] || field;
                const value = formatValue(formData[field]);
                if (!value) return null;

                return (
                  <div key={field} className="flex flex-col gap-0.5">
                    <span
                      className="text-xs font-medium"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-primary)', wordBreak: 'break-word' }}
                    >
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
