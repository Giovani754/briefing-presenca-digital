/**
 * WelcomeScreen — Tela de boas-vindas (Etapa 0)
 * Apresentação elegante com título, subtítulo e CTA
 */
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4"
    >
      {/* Badge decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
        style={{
          backgroundColor: 'var(--color-accent-soft)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
        }}
      >
        <Sparkles size={14} style={{ color: 'var(--color-accent)' }} />
        <span className="text-xs font-medium" style={{ color: 'var(--color-text-accent)' }}>
          Presença Digital
        </span>
      </motion.div>

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold leading-tight mb-6"
        style={{
          fontFamily: 'var(--font-heading)',
          background: 'linear-gradient(135deg, #F1F5F9 0%, #94A3B8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Briefing Estratégico
        <br />
        para Projeto Digital
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="text-base md:text-lg leading-relaxed max-w-lg mb-10"
        style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        Preencha este formulário para que eu entenda seu negócio, seus objetivos e o escopo do projeto.
        Com isso, consigo analisar melhor a demanda e montar uma proposta mais assertiva.
      </motion.p>

      {/* Tempo estimado */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="text-xs mb-6"
        style={{ color: 'var(--color-text-muted)' }}
      >
        ⏱ Tempo estimado: 5 a 10 minutos
      </motion.p>

      {/* Botão CTA */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold cursor-pointer"
        style={{
          background: 'var(--gradient-primary)',
          color: '#fff',
          border: 'none',
          boxShadow: 'var(--shadow-glow)',
          fontFamily: 'var(--font-body)',
        }}
      >
        Começar briefing
        <ArrowRight size={18} />
      </motion.button>

      {/* Decoração sutil no fundo */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  );
}
