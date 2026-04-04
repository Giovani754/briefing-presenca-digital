/**
 * RadioGroupField — Grupo de opções de seleção única
 * Visual premium com cards clicáveis
 */

export default function RadioGroupField({
  name,
  label,
  options,
  value,
  onChange,
  error,
  required = false,
  hint,
}) {
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
          {hint}
        </p>
      )}
      <div className="space-y-2.5">
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value;
          const optionLabel = typeof option === 'string' ? option : option.value;
          const isSelected = value === optionValue;

          return (
            <button
              key={optionValue}
              type="button"
              onClick={() => onChange(name, optionValue)}
              className="w-full text-left px-4 py-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer flex items-center gap-3"
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
              {/* Indicador radio */}
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: `2px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-text-muted)'}`,
                }}
              >
                {isSelected && (
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                )}
              </span>
              <span>{optionLabel}</span>
            </button>
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
