/**
 * StepAutonomy — Etapa 6: Autonomia e Atualizações
 * Nível de independência para gerenciar conteúdo
 */
import RadioGroupField from '../ui/RadioGroupField';
import TextAreaField from '../ui/TextAreaField';
import InfoBox from '../ui/InfoBox';
import {
  AUTONOMY_OPTIONS,
  AUTONOMY_EXPLANATION,
  TEAM_CAPABILITY_OPTIONS,
} from '../../data/quizData';

export default function StepAutonomy({ formData, updateField, errors }) {
  return (
    <div className="space-y-6">
      {/* Nível de autonomia */}
      <RadioGroupField
        name="autonomyLevel"
        label="Você prefere depender de alguém para alterar informações do site ou quer mais autonomia para sua equipe atualizar conteúdos?"
        options={AUTONOMY_OPTIONS}
        value={formData.autonomyLevel || ''}
        onChange={updateField}
      />

      {/* Explicação sobre autonomia */}
      <InfoBox variant="info">
        {AUTONOMY_EXPLANATION}
      </InfoBox>

      {/* Capacidade da equipe */}
      <RadioGroupField
        name="teamCapability"
        label="Hoje alguém da sua equipe teria condição de atualizar conteúdos, itens ou informações?"
        options={TEAM_CAPABILITY_OPTIONS}
        value={formData.teamCapability || ''}
        onChange={updateField}
      />

      {/* Atualizações frequentes */}
      <TextAreaField
        name="frequentUpdates"
        label="Quais informações você imagina que precisariam de atualização com mais frequência?"
        placeholder="Ex: Preços, novos produtos, fotos, promoções, horários de atendimento..."
        value={formData.frequentUpdates || ''}
        onChange={updateField}
        rows={3}
      />
    </div>
  );
}
