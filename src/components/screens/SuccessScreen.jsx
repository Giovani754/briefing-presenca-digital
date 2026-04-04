/**
 * SuccessScreen — Etapa 12: Confirmação de Envio
 * Tela elegante de sucesso após envio do briefing
 */
import { motion } from 'framer-motion';
import { CheckCircle2, RotateCcw } from 'lucide-react';

export default function SuccessScreen({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[65vh] text-center px-4"
    >
      {/* Ícone de sucesso */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
        className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
        style={{
          backgroundColor: 'var(--color-success-soft)',
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.15)',
        }}
      >
        <CheckCircle2 size={40} style={{ color: 'var(--color-success)' }} />
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold mb-5"
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-primary)',
        }}
      >
        Briefing enviado com sucesso
      </motion.h1>

      {/* Mensagem */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-base md:text-lg leading-relaxed max-w-md mb-10"
        style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        Recebi suas respostas. Agora consigo analisar melhor sua necessidade e montar uma proposta mais assertiva com base nas informações enviadas.
      </motion.p>

      {/* Botão voltar ao início */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium cursor-pointer"
        style={{
          color: 'var(--color-text-secondary)',
          backgroundColor: 'transparent',
          border: '1px solid var(--color-border)',
          fontFamily: 'var(--font-body)',
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
        <RotateCcw size={16} />
        Voltar ao início
      </motion.button>

      {/* Decoração */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(16, 185, 129, 0.06) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  );
}
