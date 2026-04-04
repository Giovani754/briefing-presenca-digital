/**
 * StepMaterials — Etapa 8: Material Disponível
 * O que a empresa já possui para o projeto
 */
import CheckboxGroupField from '../ui/CheckboxGroupField';
import TextAreaField from '../ui/TextAreaField';
import { MATERIALS_OPTIONS } from '../../data/quizData';

export default function StepMaterials({ formData, updateField, errors }) {
  return (
    <div className="space-y-6">
      {/* Materiais disponíveis */}
      <CheckboxGroupField
        name="materials"
        label="Você já possui algum desses materiais?"
        options={MATERIALS_OPTIONS}
        values={formData.materials || []}
        onChange={updateField}
        hint="Selecione todos os materiais que já tem"
      />

      {/* Descrição adicional */}
      <TextAreaField
        name="materialsDescription"
        label="Se quiser, descreva o que já tem pronto e o que ainda falta."
        placeholder="Ex: Tenho logo em alta resolução, fotos da empresa feitas por fotógrafo, mas ainda preciso de textos e identidade visual completa..."
        value={formData.materialsDescription || ''}
        onChange={updateField}
        rows={4}
      />
    </div>
  );
}
