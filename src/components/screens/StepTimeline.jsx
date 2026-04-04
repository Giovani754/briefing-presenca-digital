/**
 * StepTimeline — Etapa 10: Prazo, Momento e Investimento
 * Urgência, investimento, escopo e observações adicionais
 */
import RadioGroupField from '../ui/RadioGroupField';
import TextAreaField from '../ui/TextAreaField';
import InputField from '../ui/InputField';
import ConditionalField from '../ui/ConditionalField';
import {
  URGENCY_OPTIONS,
  INVESTMENT_OPTIONS,
  SCOPE_OPTIONS,
} from '../../data/quizData';

export default function StepTimeline({ formData, updateField, errors }) {
  const showInvestmentRange = formData.investmentLevel === 'Já tenho uma faixa em mente';

  return (
    <div className="space-y-6">
      {/* Urgência */}
      <RadioGroupField
        name="urgency"
        label="Existe urgência para este projeto?"
        options={URGENCY_OPTIONS}
        value={formData.urgency || ''}
        onChange={updateField}
      />

      {/* Previsão de investimento */}
      <RadioGroupField
        name="investmentLevel"
        label="Você já tem uma previsão de investimento para este projeto?"
        options={INVESTMENT_OPTIONS}
        value={formData.investmentLevel || ''}
        onChange={updateField}
      />

      {/* Campo condicional: faixa de investimento */}
      <ConditionalField show={showInvestmentRange}>
        <InputField
          name="investmentRange"
          label="Aproximadamente qual faixa de investimento você imagina?"
          placeholder="Ex: Entre R$ 2.000 e R$ 5.000"
          value={formData.investmentRange || ''}
          onChange={updateField}
        />
      </ConditionalField>

      {/* Preferência de escopo */}
      <RadioGroupField
        name="scopePreference"
        label="Você prefere começar com algo mais enxuto e evoluir depois, ou já quer algo mais completo?"
        options={SCOPE_OPTIONS}
        value={formData.scopePreference || ''}
        onChange={updateField}
      />

      {/* Observações adicionais */}
      <TextAreaField
        name="additionalNotes"
        label="Existe alguma observação importante que eu deveria saber antes de montar uma proposta?"
        placeholder="Qualquer informação adicional que considere relevante para a análise..."
        value={formData.additionalNotes || ''}
        onChange={updateField}
        rows={4}
      />
    </div>
  );
}
