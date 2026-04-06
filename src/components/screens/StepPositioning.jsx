/**
 * StepPositioning — Etapa 8: Posicionamento e Identidade Visual
 * Percepção online, diferenciais, referências e dados de marca
 */
import TextAreaField from '../ui/TextAreaField';
import InputField from '../ui/InputField';
import RadioGroupField from '../ui/RadioGroupField';
import CheckboxGroupField from '../ui/CheckboxGroupField';
import { 
  BRAND_IDENTITY_OPTIONS, 
  BRAND_COLORS_OPTIONS, 
  LOGO_STATUS_OPTIONS, 
  VISUAL_STYLE_OPTIONS 
} from '../../data/quizData';

export default function StepPositioning({ formData, updateField, errors }) {
  return (
    <div className="space-y-8">
      {/* SEÇÃO 1: IDENTIDADE E MARCA */}
      <div className="space-y-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-50 mb-2">Identidade e Marca</h3>
        
        <RadioGroupField
          name="brandIdentityDefined"
          label="A empresa já possui identidade visual definida?"
          options={BRAND_IDENTITY_OPTIONS}
          value={formData.brandIdentityDefined || ''}
          onChange={updateField}
        />

        <RadioGroupField
          name="brandColorsDefined"
          label="Sua marca já possui cores definidas?"
          options={BRAND_COLORS_OPTIONS}
          value={formData.brandColorsDefined || ''}
          onChange={updateField}
        />

        <InputField
          name="primaryBrandColors"
          label="Quais são as cores principais da sua marca hoje?"
          placeholder="Ex: Azul marinho e Dourado / #000080 e #FFD700"
          value={formData.primaryBrandColors || ''}
          onChange={updateField}
        />

        <RadioGroupField
          name="logoStatus"
          label="Sua empresa já possui logo?"
          options={LOGO_STATUS_OPTIONS}
          value={formData.logoStatus || ''}
          onChange={updateField}
        />
      </div>

      {/* SEÇÃO 2: PREFERÊNCIAS VISUAIS */}
      <div className="space-y-6 pt-4 border-t border-white/5">
        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-50 mb-2">Preferências Visuais</h3>

        <InputField
          name="preferredProjectColors"
          label="Existe alguma cor que você gostaria de explorar no projeto?"
          placeholder="Ex: Gostaria de tons pastéis, verde água..."
          value={formData.preferredProjectColors || ''}
          onChange={updateField}
        />

        <InputField
          name="colorsToAvoid"
          label="Existe alguma cor que você não quer usar de jeito nenhum?"
          placeholder="Ex: Evitar vermelho ou cores muito vibrantes..."
          value={formData.colorsToAvoid || ''}
          onChange={updateField}
        />

        <CheckboxGroupField
          name="desiredVisualStyle"
          label="Como você quer que o visual do site seja percebido?"
          options={VISUAL_STYLE_OPTIONS}
          values={formData.desiredVisualStyle || []}
          onChange={updateField}
          hint="Selecione as opções que mais combinam com sua visão"
        />
      </div>

      {/* SEÇÃO 3: POSICIONAMENTO E REFERÊNCIAS */}
      <div className="space-y-6 pt-4 border-t border-white/5">
        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-50 mb-2">Posicionamento e Referências</h3>

        <TextAreaField
          name="onlinePerception"
          label="Como você quer que sua empresa seja percebida online?"
          placeholder="Ex: Quero transmitir profissionalismo, modernidade e confiança..."
          value={formData.onlinePerception || ''}
          onChange={updateField}
          rows={3}
        />

        <TextAreaField
          name="differentials"
          label="Quais são os principais diferenciais do seu negócio?"
          placeholder="Ex: Atendimento personalizado, produtos exclusivos, entrega rápida..."
          value={formData.differentials || ''}
          onChange={updateField}
          rows={3}
        />

        <InputField
          name="visualReferences"
          label="Existe alguma referência visual, site ou estilo que você gosta?"
          placeholder="Ex: Gosto do estilo do site da Apple, minimalista e limpo..."
          value={formData.visualReferences || ''}
          onChange={updateField}
        />

        <InputField
          name="unwantedElements"
          label="Tem algo que você não quer de jeito nenhum no projeto?"
          placeholder="Ex: Não quero pop-ups invasivos, não quero excesso de textos..."
          value={formData.unwantedElements || ''}
          onChange={updateField}
        />
      </div>
    </div>
  );
}
