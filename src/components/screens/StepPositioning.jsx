/**
 * StepPositioning — Etapa 9: Comunicação, Posicionamento e Diferenciais
 * Percepção online, diferenciais e referências visuais
 */
import TextAreaField from '../ui/TextAreaField';
import InputField from '../ui/InputField';

export default function StepPositioning({ formData, updateField, errors }) {
  return (
    <div className="space-y-6">
      {/* Percepção online */}
      <TextAreaField
        name="onlinePerception"
        label="Como você quer que sua empresa seja percebida online?"
        placeholder="Ex: Quero transmitir profissionalismo, modernidade e confiança. Que o cliente sinta que está lidando com uma empresa séria e atualizada..."
        value={formData.onlinePerception || ''}
        onChange={updateField}
        rows={4}
      />

      {/* Diferenciais */}
      <TextAreaField
        name="differentials"
        label="Quais são os principais diferenciais do seu negócio?"
        placeholder="Ex: Atendimento personalizado, mais de 10 anos de experiência, produtos exclusivos, entrega rápida..."
        value={formData.differentials || ''}
        onChange={updateField}
        rows={4}
      />

      {/* Referências visuais */}
      <InputField
        name="visualReferences"
        label="Existe alguma referência visual, site ou estilo que você gosta?"
        placeholder="Ex: Gosto do estilo do site da Apple, algo mais minimalista e limpo..."
        value={formData.visualReferences || ''}
        onChange={updateField}
      />

      {/* O que NÃO quer */}
      <InputField
        name="unwantedElements"
        label="Tem algo que você não quer de jeito nenhum no projeto?"
        placeholder="Ex: Não quero cores muito fortes, não quero pop-ups invasivos..."
        value={formData.unwantedElements || ''}
        onChange={updateField}
      />
    </div>
  );
}
