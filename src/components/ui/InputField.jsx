/**
 * InputField — Campo de texto estilizado
 * Suporta tipos: text, email, tel, url
 */
import { useState } from 'react';

export default function InputField({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  value = '',
  onChange,
  error,
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
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-200 outline-none"
        style={{
          backgroundColor: 'var(--color-bg-input)',
          color: 'var(--color-text-primary)',
          border: `1.5px solid ${error ? 'var(--color-error)' : isFocused ? 'var(--color-border-focus)' : 'var(--color-border)'}`,
          fontFamily: 'var(--font-body)',
          boxShadow: isFocused ? '0 0 0 3px var(--color-accent-soft)' : 'none',
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
