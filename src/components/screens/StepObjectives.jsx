/**
 * StepObjectives — Etapa 3: Objetivos do Projeto
 * Seleção múltipla de objetivos + foco + campo de descrição
 */
import CheckboxGroupField from '../ui/CheckboxGroupField';
import RadioGroupField from '../ui/RadioGroupField';
import TextAreaField from '../ui/TextAreaField';
import InputField from '../ui/InputField';
import ConditionalField from '../ui/ConditionalField';
import { PROJECT_OBJECTIVES, PROJECT_FOCUS_OPTIONS } from '../../data/quizData';

export default function StepObjectives({ formData, updateField, errors }) {
  const showOtherField = formData.objectives?.includes('Outro');

  return (
    <div className="space-y-6">
      {/* Objetivo principal — seleção múltipla */}
      <CheckboxGroupField
        name="objectives"
        label="Qual é o principal objetivo deste projeto?"
        options={PROJECT_OBJECTIVES}
        values={formData.objectives || []}
        onChange={updateField}
        error={errors.objectives}
        required
        hint="Selecione todas as opções que se aplicam"
      />

      {/* Campo condicional: "Outro" */}
      <ConditionalField show={showOtherField}>
        <InputField
          name="otherObjective"
          label="Qual é o objetivo principal?"
          placeholder="Descreva o objetivo que você tem em mente..."
          value={formData.otherObjective || ''}
          onChange={updateField}
          error={errors.otherObjective}
          required
        />
      </ConditionalField>

      {/* Foco do projeto */}
      <RadioGroupField
        name="projectFocus"
        label="O foco do projeto é mais institucional, comercial ou ambos?"
        options={PROJECT_FOCUS_OPTIONS}
        value={formData.projectFocus || ''}
        onChange={updateField}
        error={errors.projectFocus}
      />

      {/* Intenção do projeto */}
      <TextAreaField
        name="projectGoalDescription"
        label="Você quer mais apresentar sua empresa, gerar contatos, vender, ou combinar essas funções?"
        placeholder="Ex: Quero um site que ajude a captar clientes que chegam pelo Instagram e facilite o contato via WhatsApp..."
        value={formData.projectGoalDescription || ''}
        onChange={updateField}
        rows={3}
      />
    </div>
  );
}
