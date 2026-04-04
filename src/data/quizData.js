/**
 * ==========================================
 * ESTRUTURA DE DADOS DO QUIZ DE BRIEFING
 * ==========================================
 * 
 * Arquivo centralizado com todas as perguntas,
 * opções e explicações do formulário.
 * Fácil de editar e manter.
 */

// ==========================================
// ENDPOINT DE SUBMISSÃO
// ==========================================
// Altere esta constante para o endpoint desejado:
// - Formspree: "https://formspree.io/f/SEU_ID"
// - Webhook: "https://seu-webhook.com/endpoint"
// - Netlify Forms: deixe vazio e use o atributo netlify no form
export const FORM_ENDPOINT = "https://formspree.io/f/mvvwnwaq";

// ==========================================
// LABELS DAS ETAPAS (para barra de progresso)
// ==========================================
export const STEP_LABELS = [
  "Boas-vindas",
  "Empresa",
  "Objetivos",
  "Solução",
  "Conteúdo",
  "Autonomia",
  "Funcionalidades",
  "Material",
  "Posicionamento",
  "Prazo",
  "Revisão",
  "Enviado",
];

// ==========================================
// ETAPA 2 — DADOS DA EMPRESA
// ==========================================
export const COMPANY_STATUS_OPTIONS = [
  "Sim, já está operando",
  "Está começando agora",
  "Está em fase de estruturação",
];

export const COMPANY_FIELDS = [
  { name: "companyName", label: "Nome da empresa", type: "text", required: true, placeholder: "Ex: Studio Design Visual" },
  { name: "contactName", label: "Nome do responsável", type: "text", required: true, placeholder: "Seu nome completo" },
  { name: "whatsapp", label: "WhatsApp", type: "tel", required: true, placeholder: "(00) 00000-0000" },
  { name: "email", label: "E-mail", type: "email", required: true, placeholder: "seu@email.com" },
  { name: "instagram", label: "Instagram", type: "text", required: false, placeholder: "@seuperfil" },
  { name: "currentSite", label: "Site atual (se existir)", type: "url", required: false, placeholder: "https://www.seusite.com.br" },
  { name: "segment", label: "Segmento / Ramo da empresa", type: "text", required: true, placeholder: "Ex: Saúde, Alimentação, Advocacia..." },
  { name: "location", label: "Cidade / Estado", type: "text", required: false, placeholder: "Ex: São Paulo / SP" },
];

// ==========================================
// ETAPA 3 — OBJETIVOS DO PROJETO
// ==========================================
export const PROJECT_OBJECTIVES = [
  "Ter presença digital profissional",
  "Apresentar melhor a empresa",
  "Captar mais leads / contatos",
  "Receber mais mensagens no WhatsApp",
  "Mostrar catálogo, produtos ou serviços",
  "Criar página para campanhas",
  "Reformular site atual",
  "Estruturar presença digital do zero",
  "Outro",
];

export const PROJECT_FOCUS_OPTIONS = [
  "Mais institucional",
  "Mais comercial",
  "Ambos",
];

// ==========================================
// ETAPA 4 — TIPO DE SOLUÇÃO
// ==========================================
export const SOLUTION_TYPES = [
  {
    value: "Site institucional",
    description: "É o site principal da empresa, usado para apresentar o negócio, passar credibilidade, organizar informações e facilitar contato.",
  },
  {
    value: "Site com catálogo / vitrine",
    description: "É uma estrutura que além de apresentar a empresa, também mostra produtos, serviços, itens ou portfólio de forma organizada.",
  },
  {
    value: "Landing page",
    description: "É uma página focada em uma ação específica, como captar leads, promover uma campanha, destacar uma oferta ou direcionar para o WhatsApp.",
  },
  {
    value: "Página para campanha específica",
    description: "É uma página criada para uma oferta, ação promocional, lançamento ou anúncio específico.",
  },
  {
    value: "Estrutura para captação de leads",
    description: "É uma página pensada para gerar contatos, coletando dados de pessoas interessadas.",
  },
  {
    value: "Página com formulário",
    description: "É uma estrutura voltada para o cliente preencher informações, solicitar orçamento ou entrar em contato.",
  },
  {
    value: "Área editável para equipe",
    description: "É uma estrutura em que a própria empresa consegue atualizar algumas informações sem depender de terceiros.",
  },
  {
    value: "Não tenho certeza, preciso de orientação",
    description: "Caso ainda não saiba exatamente o melhor formato, posso analisar com base nas suas respostas.",
  },
];

// ==========================================
// ETAPA 5 — CONTEÚDO E CATÁLOGO
// ==========================================
export const CATALOG_TYPE_OPTIONS = [
  "Produtos",
  "Serviços",
  "Produtos e serviços",
  "Portfólio / cases",
  "Catálogo / estoque",
  "Não se aplica",
];

export const YES_NO_MAYBE = [
  "Sim",
  "Não",
  "Talvez",
];

export const ITEM_QUANTITY_OPTIONS = [
  "Até 10",
  "Até 30",
  "Até 100",
  "Mais de 100",
  "Ainda não sei",
];

export const CHANGE_FREQUENCY_OPTIONS = [
  "Sim, mudam com frequência",
  "Mudam às vezes",
  "Quase não mudam",
  "Ainda não sei",
];

export const INDIVIDUAL_PAGE_OPTIONS = [
  "Sim",
  "Não",
  "Não sei",
];

export const HIGH_VOLUME_NOTE = "Quando existe grande volume de itens ou atualização frequente, normalmente faz mais sentido pensar em uma estrutura com mais autonomia para edição, evitando retrabalho manual e deixando a operação mais prática.";

// ==========================================
// ETAPA 6 — AUTONOMIA
// ==========================================
export const AUTONOMY_OPTIONS = [
  "Prefiro que tudo seja feito por profissional",
  "Quero ter autonomia para atualizar algumas coisas",
  "Quero que minha equipe consiga atualizar boa parte",
  "Ainda não sei",
];

export const AUTONOMY_EXPLANATION = "Ter autonomia significa conseguir editar conteúdos, cadastrar itens, alterar informações ou atualizar partes do site sem depender sempre de um terceiro. Isso costuma ser útil quando a empresa tem grande volume de atualização.";

export const TEAM_CAPABILITY_OPTIONS = [
  "Sim",
  "Não",
  "Talvez",
];

// ==========================================
// ETAPA 7 — FUNCIONALIDADES
// ==========================================
export const FEATURES_OPTIONS = [
  {
    value: "Botão de WhatsApp",
    tooltip: "Atalho direto para transformar visitante em conversa.",
  },
  {
    value: "Formulário de contato",
    tooltip: "Permite receber solicitações e contatos organizados.",
  },
  {
    value: "Integração com redes sociais",
    tooltip: "Conectar perfis de redes sociais ao site para maior alcance.",
  },
  {
    value: "Mapa / localização",
    tooltip: "Mostrar endereço e facilitar que clientes encontrem a empresa.",
  },
  {
    value: "Catálogo / vitrine",
    tooltip: "Exibição organizada de produtos ou serviços.",
  },
  {
    value: "Área editável",
    tooltip: "Permite atualizações internas sem depender sempre de suporte.",
  },
  {
    value: "Blog / notícias",
    tooltip: "Publicar conteúdo para melhorar posicionamento e engajamento.",
  },
  {
    value: "Captura de leads",
    tooltip: "Ajuda a coletar dados de pessoas interessadas.",
  },
  {
    value: "Integração com pixel / rastreamento",
    tooltip: "Preparação para campanhas e medição de tráfego.",
  },
  {
    value: "Página para campanhas",
    tooltip: "Página dedicada para ações promocionais ou anúncios.",
  },
  {
    value: "Botão de chamada para ação em vários pontos",
    tooltip: "CTAs distribuídos estrategicamente para aumentar conversão.",
  },
  {
    value: "Seção de depoimentos / prova social",
    tooltip: "Exibir avaliações e depoimentos de clientes para gerar confiança.",
  },
  {
    value: "Outro",
    tooltip: "Descreva a funcionalidade que você precisa.",
  },
];

// ==========================================
// ETAPA 8 — MATERIAL DISPONÍVEL
// ==========================================
export const MATERIALS_OPTIONS = [
  "Logo",
  "Identidade visual",
  "Fotos da empresa",
  "Fotos de produtos / serviços",
  "Textos institucionais",
  "Domínio registrado",
  "Hospedagem",
  "Redes sociais ativas",
  "Nada disso ainda",
  "Outros materiais",
];

// ==========================================
// ETAPA 10 — PRAZO E INVESTIMENTO
// ==========================================
export const URGENCY_OPTIONS = [
  "Sim, preciso o quanto antes",
  "Tenho prazo, mas dá para organizar",
  "Não tenho urgência imediata",
];

export const INVESTMENT_OPTIONS = [
  "Ainda não sei",
  "Quero entender primeiro",
  "Já tenho uma faixa em mente",
];

export const SCOPE_OPTIONS = [
  "Quero começar com algo mais enxuto",
  "Quero algo mais completo desde o início",
  "Ainda preciso entender o melhor caminho",
];

// ==========================================
// CAMPOS OBRIGATÓRIOS POR ETAPA
// ==========================================
export const REQUIRED_FIELDS_BY_STEP = {
  1: ["companyName", "contactName", "whatsapp", "email", "segment"],
  2: ["objectives"],
  3: ["solutionTypes"],
  // Demais etapas são opcionais ou têm validação contextual
};

// ==========================================
// LABELS PARA REVISÃO FINAL
// ==========================================
export const REVIEW_LABELS = {
  // Etapa 2
  companyName: "Nome da empresa",
  contactName: "Nome do responsável",
  whatsapp: "WhatsApp",
  email: "E-mail",
  instagram: "Instagram",
  currentSite: "Site atual",
  segment: "Segmento",
  location: "Cidade / Estado",
  companyStatus: "Situação da empresa",
  businessDescription: "Descrição do negócio",
  // Etapa 3
  objectives: "Objetivos do projeto",
  otherObjective: "Outro objetivo",
  projectFocus: "Foco do projeto",
  projectGoalDescription: "Intenção do projeto",
  // Etapa 4
  solutionTypes: "Tipo de solução desejada",
  // Etapa 5
  catalogType: "Tipo de catálogo",
  showItems: "Mostrar itens no site",
  itemQuantity: "Quantidade de itens",
  itemChangeFrequency: "Frequência de atualização",
  individualPages: "Página individual por item",
  catalogDescription: "Descrição do catálogo",
  // Etapa 6
  autonomyLevel: "Nível de autonomia",
  teamCapability: "Equipe para atualizar",
  frequentUpdates: "Informações com atualização frequente",
  // Etapa 7
  features: "Funcionalidades desejadas",
  otherFeature: "Funcionalidade adicional",
  // Etapa 8
  materials: "Materiais disponíveis",
  materialsDescription: "Descrição dos materiais",
  // Etapa 9
  onlinePerception: "Percepção online desejada",
  differentials: "Diferenciais do negócio",
  visualReferences: "Referências visuais",
  unwantedElements: "O que não quer no projeto",
  // Etapa 10
  urgency: "Urgência do projeto",
  investmentLevel: "Previsão de investimento",
  investmentRange: "Faixa de investimento",
  scopePreference: "Preferência de escopo",
  additionalNotes: "Observações adicionais",
};

// Seções para organizar a revisão final
export const REVIEW_SECTIONS = [
  {
    title: "Dados da Empresa",
    icon: "Building2",
    fields: ["companyName", "contactName", "whatsapp", "email", "instagram", "currentSite", "segment", "location", "companyStatus", "businessDescription"],
  },
  {
    title: "Objetivos do Projeto",
    icon: "Target",
    fields: ["objectives", "otherObjective", "projectFocus", "projectGoalDescription"],
  },
  {
    title: "Solução Desejada",
    icon: "Layers",
    fields: ["solutionTypes"],
  },
  {
    title: "Conteúdo e Catálogo",
    icon: "Package",
    fields: ["catalogType", "showItems", "itemQuantity", "itemChangeFrequency", "individualPages", "catalogDescription"],
  },
  {
    title: "Autonomia",
    icon: "Settings",
    fields: ["autonomyLevel", "teamCapability", "frequentUpdates"],
  },
  {
    title: "Funcionalidades",
    icon: "Zap",
    fields: ["features", "otherFeature"],
  },
  {
    title: "Material Disponível",
    icon: "FolderOpen",
    fields: ["materials", "materialsDescription"],
  },
  {
    title: "Posicionamento",
    icon: "Sparkles",
    fields: ["onlinePerception", "differentials", "visualReferences", "unwantedElements"],
  },
  {
    title: "Prazo e Investimento",
    icon: "Clock",
    fields: ["urgency", "investmentLevel", "investmentRange", "scopePreference", "additionalNotes"],
  },
];
