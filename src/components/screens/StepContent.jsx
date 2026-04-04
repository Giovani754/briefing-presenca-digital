/**
 * StepContent — Etapa 5: Conteúdo, Catálogo e Volume
 * Informações sobre produtos/serviços e catálogo
 */
import RadioGroupField from '../ui/RadioGroupField';
import TextAreaField from '../ui/TextAreaField';
import ConditionalField from '../ui/ConditionalField';
import InfoBox from '../ui/InfoBox';
import {
  CATALOG_TYPE_OPTIONS,
  YES_NO_MAYBE,
  ITEM_QUANTITY_OPTIONS,
  CHANGE_FREQUENCY_OPTIONS,
  INDIVIDUAL_PAGE_OPTIONS,
  HIGH_VOLUME_NOTE,
} from '../../data/quizData';

export default function StepContent({ formData, updateField, errors }) {
  // Mostrar nota de alto volume se quantidade > 100 ou se muda com frequência
  const showHighVolumeNote =
    formData.itemQuantity === 'Mais de 100' ||
    formData.itemChangeFrequency === 'Sim, mudam com frequência';

  return (
    <div className="space-y-6">
      {/* Tipo de catálogo */}
      <RadioGroupField
        name="catalogType"
        label="A empresa trabalha com produtos, serviços, catálogo, portfólio ou estoque?"
        options={CATALOG_TYPE_OPTIONS}
        value={formData.catalogType || ''}
        onChange={updateField}
      />

      {/* Mostrar no site */}
      <RadioGroupField
        name="showItems"
        label="Você pretende mostrar esses itens no site?"
        options={YES_NO_MAYBE}
        value={formData.showItems || ''}
        onChange={updateField}
      />

      {/* Quantidade de itens */}
      <RadioGroupField
        name="itemQuantity"
        label="Quantos itens aproximadamente precisam aparecer?"
        options={ITEM_QUANTITY_OPTIONS}
        value={formData.itemQuantity || ''}
        onChange={updateField}
      />

      {/* Frequência de mudanças */}
      <RadioGroupField
        name="itemChangeFrequency"
        label="Esses itens mudam com frequência?"
        options={CHANGE_FREQUENCY_OPTIONS}
        value={formData.itemChangeFrequency || ''}
        onChange={updateField}
      />

      {/* Página individual */}
      <RadioGroupField
        name="individualPages"
        label="Você imagina que cada item precise ter uma página própria?"
        options={INDIVIDUAL_PAGE_OPTIONS}
        value={formData.individualPages || ''}
        onChange={updateField}
      />

      {/* Nota de alto volume — aparecer condicionalmente */}
      <ConditionalField show={showHighVolumeNote}>
        <InfoBox variant="tip">
          {HIGH_VOLUME_NOTE}
        </InfoBox>
      </ConditionalField>

      {/* Descrição do catálogo */}
      <TextAreaField
        name="catalogDescription"
        label="Explique rapidamente como funciona hoje seu catálogo, estoque, portfólio ou oferta."
        placeholder="Ex: Hoje temos cerca de 50 produtos no estoque, as fotos estão no Google Drive e atualizamos os preços toda semana..."
        value={formData.catalogDescription || ''}
        onChange={updateField}
        rows={4}
      />
    </div>
  );
}
