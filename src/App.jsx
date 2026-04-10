/**
 * ==========================================
 * App.jsx — BRIEFING ESTRATÉGICO
 * ==========================================
 * 
 * Componente principal que orquestra o quiz multi-step.
 * Gerencia estado global, navegação, validação e submissão.
 */
import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

// Componentes de UI
import ProgressBar from './components/ui/ProgressBar';
import StepLayout from './components/ui/StepLayout';

// Telas / Etapas
import WelcomeScreen from './components/screens/WelcomeScreen';
import StepCompanyData from './components/screens/StepCompanyData';
import StepObjectives from './components/screens/StepObjectives';
import StepSolution from './components/screens/StepSolution';
import StepContent from './components/screens/StepContent';
import StepAutonomy from './components/screens/StepAutonomy';
import StepFeatures from './components/screens/StepFeatures';
import StepMaterials from './components/screens/StepMaterials';
import StepPositioning from './components/screens/StepPositioning';
import StepTimeline from './components/screens/StepTimeline';
import ReviewScreen from './components/screens/ReviewScreen';
import SuccessScreen from './components/screens/SuccessScreen';

// Dados
import { STEP_LABELS } from './data/quizData';

// ==========================================
// TOTAL DE ETAPAS
// ==========================================
const TOTAL_STEPS = 12; // 0=welcome, 1-9=etapas, 10=review, 11=success

// ==========================================
// TÍTULOS E SUBTÍTULOS POR ETAPA
// ==========================================
const STEP_CONFIG = {
  1: {
    title: "Dados da Empresa",
    subtitle: "Conte um pouco sobre sua empresa e como posso entrar em contato com você.",
  },
  2: {
    title: "Objetivos do Projeto",
    subtitle: "Entender seus objetivos é essencial para montar uma proposta alinhada ao que você espera.",
  },
  3: {
    title: "Tipo de Solução Desejada",
    subtitle: "Selecione os formatos que melhor se encaixam no que você precisa. Cada opção inclui uma breve explicação.",
  },
  4: {
    title: "Conteúdo, Catálogo e Volume",
    subtitle: "Entender como funciona seu catálogo ou oferta ajuda a definir a melhor estrutura para o projeto.",
  },
  5: {
    title: "Autonomia e Atualizações",
    subtitle: "Defina o nível de independência que você deseja para manter o conteúdo atualizado.",
  },
  6: {
    title: "Funcionalidades Desejadas",
    subtitle: "Selecione as funcionalidades que fazem sentido para o seu projeto.",
  },
  7: {
    title: "Material Disponível",
    subtitle: "Saber o que já está pronto ajuda a estimar prazos e definir etapas.",
  },
  8: {
    title: "Posicionamento e Diferenciais",
    subtitle: "Sua identidade e posicionamento influenciam diretamente o resultado do projeto.",
  },
  9: {
    title: "Prazo, Momento e Investimento",
    subtitle: "Entender seu momento ajuda a propor a melhor solução para o cenário atual.",
  },
  10: {
    title: "Revisão Final",
    subtitle: "Confira as informações antes de enviar. Você pode voltar e editar qualquer seção.",
  },
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function App() {
  // Estado do formulário (todas as respostas)
  const [formData, setFormData] = useState({});
  // Etapa atual
  const [currentStep, setCurrentStep] = useState(0);
  // Erros de validação
  const [errors, setErrors] = useState({});
  // Direção da transição
  const [direction, setDirection] = useState(1);
  // Estado de submissão
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Erro de submissão (exibido inline)
  const [submitError, setSubmitError] = useState('');

  // Endpoint Google Apps Script
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx6DRoQ4xjTldF3Z3BWfEmXUk-pD7M9vSOWCDUwFPTJScjfs1vIzrpJdk19Y_fNSlddKw/exec';

  // ==========================================
  // ATUALIZAR CAMPO
  // ==========================================
  const updateField = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpar erro do campo quando preenchido
    setErrors((prev) => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  // ==========================================
  // VALIDAÇÃO POR ETAPA
  // ==========================================
  const validateStep = useCallback((step) => {
    const newErrors = {};

    switch (step) {
      case 1: {
        // Dados da empresa — campos obrigatórios
        if (!formData.companyName?.trim()) {
          newErrors.companyName = 'Nome da empresa é obrigatório';
        }
        if (!formData.contactName?.trim()) {
          newErrors.contactName = 'Nome do responsável é obrigatório';
        }
        if (!formData.whatsapp?.trim() && !formData.email?.trim()) {
          newErrors.whatsapp = 'Informe WhatsApp ou e-mail';
          newErrors.email = 'Informe WhatsApp ou e-mail';
        }
        if (formData.email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'E-mail inválido';
        }
        if (!formData.segment?.trim()) {
          newErrors.segment = 'Segmento é obrigatório';
        }
        break;
      }
      case 2: {
        // Objetivos — pelo menos um selecionado
        if (!formData.objectives || formData.objectives.length === 0) {
          newErrors.objectives = 'Selecione pelo menos um objetivo';
        }
        if (formData.objectives?.includes('Outro') && !formData.otherObjective?.trim()) {
          newErrors.otherObjective = 'Descreva o objetivo';
        }
        break;
      }
      case 3: {
        // Tipo de solução — pelo menos um selecionado
        if (!formData.solutionTypes || formData.solutionTypes.length === 0) {
          newErrors.solutionTypes = 'Selecione pelo menos um tipo de solução';
        }
        break;
      }
      // Etapas 4-9 não têm campos estritamente obrigatórios
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // ==========================================
  // NAVEGAÇÃO
  // ==========================================
  const goToNext = useCallback(() => {
    // Validar etapa atual
    if (!validateStep(currentStep)) {
      // Scroll para o primeiro erro
      setTimeout(() => {
        const errorEl = document.querySelector('[style*="color: var(--color-error)"]');
        if (errorEl) {
          errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return;
    }

    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, validateStep]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setErrors({});
    setSubmitError('');
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToStep = useCallback((step) => {
    setDirection(step < currentStep ? -1 : 1);
    setErrors({});
    setSubmitError('');
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Helper: converter arrays para strings legíveis
  const formatValue = (val) => {
    if (Array.isArray(val)) return val.join(', ');
    return val || '';
  };

  // ==========================================
  // SUBMISSÃO VIA FETCH — Google Apps Script
  // ==========================================
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setSubmitError('');

    // Montar payload formatado
    const payload = {
      companyName: formData.companyName || '',
      contactName: formData.contactName || '',
      whatsapp: formData.whatsapp || '',
      email: formData.email || '',
      instagram: formData.instagram || '',
      currentSite: formData.currentSite || '',
      businessSegment: formData.segment || '',
      cityState: formData.location || '',
      businessStage: formData.companyStatus || '',
      businessDescription: formData.businessDescription || '',
      mainGoal: formatValue(formData.objectives),
      otherObjective: formData.otherObjective || '',
      projectFocus: formData.projectFocus || '',
      projectGoalDescription: formData.projectGoalDescription || '',
      solutionType: formatValue(formData.solutionTypes),
      catalogType: formData.catalogType || '',
      showItems: formData.showItems || '',
      itemVolume: formData.itemQuantity || '',
      itemsChangeFrequency: formData.itemChangeFrequency || '',
      needsItemPage: formData.individualPages || '',
      catalogDescription: formData.catalogDescription || '',
      autonomyPreference: formData.autonomyLevel || '',
      teamCapability: formData.teamCapability || '',
      frequentUpdates: formData.frequentUpdates || '',
      features: formatValue(formData.features),
      otherFeature: formData.otherFeature || '',
      availableMaterials: formatValue(formData.materials),
      materialsDescription: formData.materialsDescription || '',
      brandPerception: formData.onlinePerception || '',
      businessDifferentials: formData.differentials || '',
      references: formData.visualReferences || '',
      unwantedElements: formData.unwantedElements || '',
      brandIdentityDefined: formData.brandIdentityDefined || '',
      brandColorsDefined: formData.brandColorsDefined || '',
      primaryBrandColors: formData.primaryBrandColors || '',
      preferredProjectColors: formData.preferredProjectColors || '',
      colorsToAvoid: formData.colorsToAvoid || '',
      desiredVisualStyle: formatValue(formData.desiredVisualStyle),
      logoStatus: formData.logoStatus || '',
      urgency: formData.urgency || '',
      investmentLevel: formData.investmentLevel || '',
      investmentRange: formData.investmentRange || '',
      scopePreference: formData.scopePreference || '',
      finalNotes: formData.additionalNotes || '',
      _subject: `Novo Briefing \u2014 ${formData.companyName || 'Sem nome'}`,
      _replyto: formData.email || '',
      submittedAt: new Date().toISOString(),
      source: 'briefing-presenca-digital',
    };

    // Adicionar JSON bruto completo para o Apps Script
    payload.rawJson = JSON.stringify(payload);

    // Log temporário para depuração
    console.log('\ud83d\udccb Payload final enviado ao Script:', payload);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      // Com mode: "no-cors" a resposta é opaca — sucesso se não houve erro de rede
      setCurrentStep(TOTAL_STEPS - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Erro no envio:', error);
      setSubmitError('Não foi possível enviar o briefing. Verifique sua conexão e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, SCRIPT_URL]);

  // ==========================================
  // RESET (voltar ao início)
  // ==========================================
  const handleReset = useCallback(() => {
    setFormData({});
    setCurrentStep(0);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ==========================================
  // RENDER DE CADA ETAPA
  // ==========================================
  const renderStep = () => {
    const stepProps = {
      formData,
      updateField,
      errors,
    };

    switch (currentStep) {
      case 0:
        return <WelcomeScreen onStart={() => { setDirection(1); setCurrentStep(1); }} />;
      case 1:
        return <StepCompanyData {...stepProps} />;
      case 2:
        return <StepObjectives {...stepProps} />;
      case 3:
        return <StepSolution {...stepProps} />;
      case 4:
        return <StepContent {...stepProps} />;
      case 5:
        return <StepAutonomy {...stepProps} />;
      case 6:
        return <StepFeatures {...stepProps} />;
      case 7:
        return <StepMaterials {...stepProps} />;
      case 8:
        return <StepPositioning {...stepProps} />;
      case 9:
        return <StepTimeline {...stepProps} />;
      case 10:
        return <ReviewScreen formData={formData} onGoToStep={goToStep} />;
      case 11:
        return <SuccessScreen onReset={handleReset} />;
      default:
        return null;
    }
  };

  // ==========================================
  // RENDER
  // ==========================================
  const isWelcome = currentStep === 0;
  const isSuccess = currentStep === TOTAL_STEPS - 1;
  const isReview = currentStep === TOTAL_STEPS - 2;
  const config = STEP_CONFIG[currentStep];


  return (
    <div className="app-container relative">
      <div className="content-wrapper">
        {/* Barra de progresso */}
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        {/* Tela de boas-vindas e confirmação sem layout de step */}
        {(isWelcome || isSuccess) ? (
          renderStep()
        ) : (
          <StepLayout
            title={config?.title}
            subtitle={config?.subtitle}
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onNext={goToNext}
            onPrev={goToPrev}
            onSubmit={handleSubmit}
            isReviewStep={isReview}
            isSubmitting={isSubmitting}
            submitError={submitError}
            direction={direction}
          >
            {renderStep()}
          </StepLayout>
        )}

        {/* Overlay de submissão */}
        <AnimatePresence>
          {isSubmitting && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(11, 15, 25, 0.85)', backdropFilter: 'blur(4px)' }}
            >
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
                  style={{ borderColor: 'var(--color-accent)', borderTopColor: 'transparent' }}
                />
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                  Enviando briefing...
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer sutil */}
      {!isWelcome && !isSuccess && (
        <footer
          className="w-full text-center py-6 mt-auto"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Suas informações são tratadas com sigilo e usadas apenas para elaboração da proposta.
          </p>
        </footer>
      )}
    </div>
  );
}
