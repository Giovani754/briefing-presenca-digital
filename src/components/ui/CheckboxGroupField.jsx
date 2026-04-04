/**
 * CheckboxGroupField — Grupo de seleção múltipla
 * Cards clicáveis com visual premium
 * Suporte a tooltips/descrições para cada opção
 */
import { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function CheckboxGroupField({
  name,
  label,
  options,
  values = [],
  onChange,
  error,
  required = false,
  hint,
  showDescriptions = false,
}) {
  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  const handleToggle = (optionValue) => {
    const newValues = values.includes(optionValue)
      ? values.filter((v) => v !== optionValue)
      : [...values, optionValue];
    onChange(name, newValues);
  };

  return (
    <div className="w-full">
      <label
        className="block text-sm font-medium mb-3"
        style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        {label}
        {required && <span style={{ color: 'var(--color-accent)' }} className="ml-1">*</span>}
      </label>
      {hint && (
        <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
          Selecione todas as opções que se aplicam
        </p>
      )}
      <div className="space-y-2.5">
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value;
          const optionLabel = typeof option === 'string' ? option : option.value;
          const tooltip = typeof option === 'object' ? (option.tooltip || option.description) : null;
          const isSelected = values.includes(optionValue);

          return (
            <div key={optionValue} className="relative">
              <button
                type="button"
                onClick={() => handleToggle(optionValue)}
                className="w-full text-left px-4 py-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer flex items-start gap-3"
                style={{
                  backgroundColor: isSelected ? 'var(--color-accent-soft)' : 'var(--color-bg-input)',
                  border: `1.5px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)';
                    e.currentTarget.style.borderColor = 'var(--color-text-muted)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-input)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }
                }}
              >
                {/* Checkbox indicator */}
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-all duration-200 mt-0.5"
                  style={{
                    backgroundColor: isSelected ? 'var(--color-accent)' : 'transparent',
                    border: `2px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-text-muted)'}`,
                  }}
                >
                  {isSelected && <Check size={12} color="#fff" strokeWidth={3} />}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span>{optionLabel}</span>
                    {tooltip && !showDescriptions && (
                      <span
                        className="inline-flex cursor-help relative"
                        onMouseEnter={() => setHoveredTooltip(optionValue)}
                        onMouseLeave={() => setHoveredTooltip(null)}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Info size={14} style={{ color: 'var(--color-text-muted)' }} />
                        {hoveredTooltip === optionValue && (
                          <span
                            className="absolute left-6 top-0 z-10 px-3 py-2 rounded-lg text-xs whitespace-normal max-w-[260px]"
                            style={{
                              backgroundColor: 'var(--color-bg-card)',
                              border: '1px solid var(--color-border)',
                              color: 'var(--color-text-secondary)',
                              boxShadow: 'var(--shadow-lg)',
                            }}
                          >
                            {tooltip}
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                  {/* Descrição expandida (para etapa de soluções) */}
                  {showDescriptions && tooltip && (
                    <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                      {tooltip}
                    </p>
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>
      {error && (
        <p className="mt-2 text-xs font-medium" style={{ color: 'var(--color-error)' }}>
          {error}
        </p>
      )}
    </div>
  );
}
