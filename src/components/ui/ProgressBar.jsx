/**
 * ProgressBar — Barra de progresso visual do quiz
 * Mostra a etapa atual e o progresso geral
 */
import { motion } from 'framer-motion';

export default function ProgressBar({ currentStep, totalSteps }) {
  // A etapa 0 é boas-vindas, não conta no progresso
  // A última é confirmação, também não conta
  const progressSteps = totalSteps - 2; // tirando welcome e success
  const adjustedCurrent = currentStep - 1; // começar do 0 após welcome
  const progress = currentStep === 0
    ? 0
    : currentStep >= totalSteps - 1
      ? 100
      : Math.round((adjustedCurrent / progressSteps) * 100);

  if (currentStep === 0 || currentStep >= totalSteps - 1) return null;

  return (
    <div className="w-full mb-8">
      {/* Labels e porcentagem */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
          Etapa {Math.max(adjustedCurrent, 1)} de {progressSteps}
        </span>
        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-accent)', fontFamily: 'var(--font-body)' }}>
          {progress}%
        </span>
      </div>

      {/* Barra de progresso */}
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--color-bg-input)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'var(--gradient-primary)' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
