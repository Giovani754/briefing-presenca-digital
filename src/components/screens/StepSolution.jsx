/**
 * StepSolution — Etapa 4: Tipo de Solução Desejada
 * Seleção múltipla com descrições expandidas
 */
import CheckboxGroupField from '../ui/CheckboxGroupField';
import { SOLUTION_TYPES } from '../../data/quizData';

export default function StepSolution({ formData, updateField, errors }) {
  return (
    <div className="space-y-6">
      <CheckboxGroupField
        name="solutionTypes"
        label="Que tipo de solução você imagina para este projeto?"
        options={SOLUTION_TYPES}
        values={formData.solutionTypes || []}
        onChange={updateField}
        error={errors.solutionTypes}
        required
        hint="Selecione todas as opções que fazem sentido"
        showDescriptions={true}
      />
    </div>
  );
}
