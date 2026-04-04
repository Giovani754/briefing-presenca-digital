/**
 * StepLayout — Layout wrapper para cada etapa do quiz
 * Adiciona título, subtítulo, animação de entrada e botões de navegação
 */
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.35,
};

export default function StepLayout({
  children,
  title,
  subtitle,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onSubmit,
  isLastContentStep,
  isReviewStep,
  isSubmitting = false,
  submitError = '',
  direction,
}) {
  const showBackButton = currentStep > 1;
  const showNextButton = !isReviewStep && currentStep < totalSteps - 2;
  const showSubmitButton = isReviewStep;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={currentStep}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="w-full"
      >
        {/* Cabeçalho da etapa */}
        {(title || subtitle) && (
          <div className="mb-8">
            {title && (
              <h2
                className="text-2xl md:text-3xl font-semibold mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Conteúdo da etapa */}
        <div className="space-y-6">
          {children}
        </div>

        {/* Botões de navegação */}
        <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
          {/* Botão Voltar */}
          {showBackButton ? (
            <button
              type="button"
              onClick={onPrev}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                color: 'var(--color-text-secondary)',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)';
                e.currentTarget.style.borderColor = 'var(--color-text-muted)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <ArrowLeft size={16} />
              Voltar
            </button>
          ) : (
            <div />
          )}

          {/* Botão Próximo */}
          {showNextButton && (
            <button
              type="button"
              onClick={onNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{
                background: 'var(--gradient-primary)',
                color: '#fff',
                border: 'none',
                boxShadow: 'var(--shadow-glow)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              Próximo
              <ArrowRight size={16} />
            </button>
          )}

          {/* Botão Enviar */}
          {showSubmitButton && (
            <button
              type="button"
              onClick={onSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{
                background: isSubmitting
                  ? 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)'
                  : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: '#fff',
                border: 'none',
                boxShadow: isSubmitting ? 'none' : '0 0 20px rgba(16, 185, 129, 0.2)',
                opacity: isSubmitting ? 0.8 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.35)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.2)';
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar briefing
                </>
              )}
            </button>
          )}
        </div>

        {/* Mensagem de erro de submissão */}
        {submitError && (
          <div
            className="mt-4 px-4 py-3 rounded-xl text-sm text-center"
            style={{
              backgroundColor: 'var(--color-error-soft)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#F87171',
            }}
          >
            {submitError}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
