/**
 * TextAreaField — Campo de texto grande estilizado
 * Para descrições e respostas mais longas
 */
import { useState } from 'react';

export default function TextAreaField({
  name,
  label,
  placeholder = '',
  required = false,
  value = '',
  onChange,
  error,
  rows = 4,
  hint,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-2"
        style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        {label}
        {required && <span style={{ color: 'var(--color-accent)' }} className="ml-1">*</span>}
      </label>
      {hint && (
        <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
          {hint}
        </p>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-200 outline-none resize-y"
        style={{
          backgroundColor: 'var(--color-bg-input)',
          color: 'var(--color-text-primary)',
          border: `1.5px solid ${error ? 'var(--color-error)' : isFocused ? 'var(--color-border-focus)' : 'var(--color-border)'}`,
          fontFamily: 'var(--font-body)',
          boxShadow: isFocused ? '0 0 0 3px var(--color-accent-soft)' : 'none',
          minHeight: '100px',
        }}
      />
      {error && (
        <p className="mt-1.5 text-xs font-medium" style={{ color: 'var(--color-error)' }}>
          {error}
        </p>
      )}
    </div>
  );
}
