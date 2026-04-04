/**
 * StepCompanyData — Etapa 2: Dados da Empresa
 * Coleta informações básicas e contato
 */
import InputField from '../ui/InputField';
import TextAreaField from '../ui/TextAreaField';
import RadioGroupField from '../ui/RadioGroupField';
import { COMPANY_FIELDS, COMPANY_STATUS_OPTIONS } from '../../data/quizData';

export default function StepCompanyData({ formData, updateField, errors }) {
  return (
    <div className="space-y-5">
      {/* Campos básicos da empresa */}
      {COMPANY_FIELDS.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          value={formData[field.name] || ''}
          onChange={updateField}
          error={errors[field.name]}
        />
      ))}

      {/* Situação da empresa */}
      <RadioGroupField
        name="companyStatus"
        label="A empresa já está operando?"
        options={COMPANY_STATUS_OPTIONS}
        value={formData.companyStatus || ''}
        onChange={updateField}
        error={errors.companyStatus}
      />

      {/* Descrição rápida do negócio */}
      <TextAreaField
        name="businessDescription"
        label="Como você descreveria rapidamente seu negócio?"
        placeholder="Conte de forma breve o que sua empresa faz, quem são seus clientes e como funciona sua operação..."
        value={formData.businessDescription || ''}
        onChange={updateField}
        error={errors.businessDescription}
        rows={4}
      />
    </div>
  );
}
