/**
 * StepFeatures — Etapa 7: Funcionalidades Desejadas
 * Seleção múltipla com tooltips explicativos
 */
import CheckboxGroupField from '../ui/CheckboxGroupField';
import InputField from '../ui/InputField';
import ConditionalField from '../ui/ConditionalField';
import { FEATURES_OPTIONS } from '../../data/quizData';

export default function StepFeatures({ formData, updateField, errors }) {
  const showOtherField = formData.features?.includes('Outro');

  return (
    <div className="space-y-6">
      {/* Funcionalidades — seleção múltipla com tooltips */}
      <CheckboxGroupField
        name="features"
        label="Quais funcionalidades você gostaria de ter?"
        options={FEATURES_OPTIONS}
        values={formData.features || []}
        onChange={updateField}
        hint="Selecione todas as opções que fazem sentido"
      />

      {/* Campo condicional: Outro */}
      <ConditionalField show={showOtherField}>
        <InputField
          name="otherFeature"
          label="Qual funcionalidade adicional você imagina?"
          placeholder="Descreva a funcionalidade que você precisa..."
          value={formData.otherFeature || ''}
          onChange={updateField}
          error={errors.otherFeature}
        />
      </ConditionalField>
    </div>
  );
}
