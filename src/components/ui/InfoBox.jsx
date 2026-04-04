/**
 * InfoBox — Caixa informativa/explicativa
 * Usada para notas, dicas e alertas no quiz
 */
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

const VARIANTS = {
  info: {
    icon: Info,
    bgColor: 'var(--color-accent-soft)',
    borderColor: 'rgba(59, 130, 246, 0.2)',
    iconColor: 'var(--color-accent)',
    textColor: 'var(--color-text-secondary)',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'rgba(245, 158, 11, 0.08)',
    borderColor: 'rgba(245, 158, 11, 0.2)',
    iconColor: 'var(--color-warning)',
    textColor: 'var(--color-text-secondary)',
  },
  tip: {
    icon: Lightbulb,
    bgColor: 'rgba(16, 185, 129, 0.06)',
    borderColor: 'rgba(16, 185, 129, 0.2)',
    iconColor: 'var(--color-success)',
    textColor: 'var(--color-text-secondary)',
  },
};

export default function InfoBox({ children, variant = 'info' }) {
  const config = VARIANTS[variant] || VARIANTS.info;
  const Icon = config.icon;

  return (
    <div
      className="flex gap-3 px-4 py-3.5 rounded-xl text-sm leading-relaxed"
      style={{
        backgroundColor: config.bgColor,
        border: `1px solid ${config.borderColor}`,
        color: config.textColor,
        fontFamily: 'var(--font-body)',
      }}
    >
      <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: config.iconColor }} />
      <div>{children}</div>
    </div>
  );
}
