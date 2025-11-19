import type { ReportSection } from '../types';

export const reportContent: ReportSection[] = [
  {
    id: "hero",
    type: "hero",
    title: "A Revolução Invisível",
    subtitle: "Como Microrganismos Podem Recuperar os Solos do Cerrado"
  },
  {
    id: "intro",
    type: "text",
    title: "O solo do Cerrado está pedindo socorro",
    content: [
      "Quando se fala em Brasil e agricultura, o Cerrado costuma entrar na conversa como uma espécie de “fábrica natural” de alimentos. Um bioma gigantesco, que ocupa cerca de 22% do território nacional e concentra boa parte da soja, milho e algodão que abastecem o país e o mundo. Mas essa aparente abundância esconde um problema silencioso: a degradação física do solo, especialmente a compactação, que vem se intensificando conforme a mecanização e as monoculturas avançam.",
      "A compactação não é algo que se vê facilmente. Não forma crateras, não causa deslizamentos, não aparece em fotos de satélite como as queimadas da Amazônia. Mas seus efeitos são profundos: solos endurecidos, raízes que não conseguem se desenvolver, menos infiltração de água, mais escoamento superficial, erosão acelerada e, no fim das contas, perda de produtividade. Pesquisadores da Embrapa Cerrados descrevem essa condição como “um colapso estrutural invisível”.",
      "E como todo problema silencioso, ele cresce rápido. Segundo levantamentos da Embrapa e de universidades brasileiras, grande parte das áreas agrícolas do Cerrado já apresenta algum nível de compactação, especialmente na camada entre 10 e 20 cm de profundidade — exatamente onde as raízes deveriam se expandir com força.",
      "Mas aqui entra o lado fascinante da história: a solução pode vir das menores formas de vida da Terra. Microrganismos — bactérias e fungos — capazes de reconstruir esse solo degradado de baixo para cima.",
      "E é exatamente isso que esta reportagem vai explorar: como consórcios microbianos podem recuperar a fertilidade e a estrutura dos solos do Cerrado, e por que essa abordagem biotecnológica está se tornando uma das alternativas mais promissoras para a agricultura sustentável brasileira."
    ]
  },
  {
    id: "problem",
    type: "text",
    title: "O que é a compactação do solo?",
    content: [
      "Se você caminhar por uma área de Cerrado nativo após uma chuva, vai notar que o solo absorve água facilmente. A superfície fica úmida, mas sem poças grandes. Isso acontece porque esses solos — apesar de sua baixa fertilidade natural — possuem uma estrutura altamente porosa, com espaços que permitem a entrada de água e o crescimento profundo das raízes. É essa estrutura, formada ao longo de milhares de anos, que sustenta a vegetação típica desse bioma.",
      "Mas nas regiões em que a agricultura avançou, essa lógica mudou. Hoje, em muitas áreas agrícolas do Cerrado, basta pisar no solo para sentir a diferença: o chão é mais duro, mais resistente, às vezes até parece cimentado. Isso é o que os especialistas chamam de compactação do solo.",
      "Tecnicamente, a compactação ocorre quando as partículas do solo são pressionadas de tal forma que os espaços entre elas — chamados de poros — diminuem. É nesses poros que circulam ar, água, nutrientes, microrganismos e as raízes das plantas. Quando essa “rede de túneis” se fecha, todo o ecossistema abaixo da superfície fica prejudicado."
    ]
  },
  {
    id: "graph-1-section",
    type: "chart",
    title: "Comparação: Cerrado Natural vs. Agricultura",
    content: [
      "Um estudo realizado em um Latossolo do Cerrado em Uberlândia (MG) ilustra isso de forma clara. Pesquisadores compararam a estrutura de um solo sob Cerrado natural e de outro sob semeadura direta agrícola. Apenas essa diferença de densidade — de 0,98 para 1,23 g/cm³ — já é suficiente para causar dificuldade de penetração das raízes e menor infiltração de água."
    ],
    chartId: "graph-1"
  },
  {
    id: "graph-2-section",
    type: "chart",
    title: "Relação Densidade x Porosidade",
    content: [
      "Quanto maior a densidade, menor a porosidade. Isso é típico de compactação. Em outras palavras, quando o solo é apertado demais, a vida subterrânea deixa de funcionar como deveria."
    ],
    chartId: "graph-2"
  },
  {
    id: "causes",
    type: "infographic",
    title: "Como a compactação surge",
    content: [
      "A compactação é resultado direto da forma como o Cerrado vem sendo ocupado ao longo das últimas décadas. Máquinas pesadas, monoculturas contínuas e baixa matéria orgânica são os principais vilões."
    ],
    chartId: "graph-3"
  },
  {
    id: "graph-4-section",
    type: "chart",
    title: "O Perfil Vertical da Compactação",
    content: [
      "A compactação não é uniforme. Ela cria uma 'camada adensada', geralmente entre 10 e 30 cm de profundidade, que impede as raízes de buscar água mais fundo."
    ],
    chartId: "graph-4"
  },
  {
    id: "graph-5-section",
    type: "chart",
    title: "O Papel da Matéria Orgânica",
    content: [
      "A matéria orgânica é fundamental para manter o solo 'fofo'. Quanto menor o teor de matéria orgânica, maior tende a ser a densidade do solo."
    ],
    chartId: "graph-5"
  },
  {
    id: "solution",
    type: "text",
    title: "Microrganismos: os engenheiros invisíveis",
    content: [
      "Depois de tantos diagnósticos, dados e estudos mostrando como o solo do Cerrado está se degradando, uma pergunta inevitável surge: existe mesmo uma forma de reverter esse quadro sem depender de máquinas ainda maiores, insumos químicos caros ou processos demoradíssimos?",
      "A boa notícia — surpreendente para muitos — é que sim. E a solução não está nas máquinas, mas nos microrganismos. Sim, eles mesmos: seres invisíveis, que cabem milhares em um único grão de terra. Mas que desempenham papéis gigantescos na estruturação, fertilidade e saúde do solo.",
      "A ciência brasileira já sabe disso há décadas. O que muda agora é que, graças ao avanço da biotecnologia, conseguimos selecionar, combinar e aplicar esses microrganismos de forma estratégica — criando verdadeiros consórcios biológicos capazes de reconstruir solos degradados."
    ]
  },
  {
    id: "graph-6-section",
    type: "chart",
    title: "Efeitos da Inoculação",
    content: [
      "Pesquisas mostram que o uso de consórcios microbianos (como Azospirillum, Bacillus e fungos micorrízicos) aumenta a macroporosidade e reduz a densidade do solo, recuperando sua estrutura."
    ],
    chartId: "graph-6"
  },
  {
    id: "implementation",
    type: "steps",
    title: "Como implementar consórcios microbianos",
    content: [
      "Se a ciência já mostrou que microrganismos podem reestruturar o solo do Cerrado, a pergunta agora passa a ser: como levar essa tecnologia para o campo, de forma prática e eficiente?",
      "Seleção de microrganismos:Pesquisadores e biofábricas selecionam microrganismos com funções complementares.",
      "Tratamento de sementes (TS):A forma mais eficiente e viável de aplicar microrganismos é via tratamento de sementes, já consagrado no cultivo de soja e feijão.",
      "Aplicação no sulco:Em situações de compactação moderada a severa, o inoculante líquido é aplicado junto à semente.",
      "Integração com plantas de cobertura:Microrganismos não fazem milagre sozinhos. Eles precisam de raízes para atuar. Por isso, a recuperação de solos compactados costuma usar braquiária, crotalária, feijão-guandu, etc."
    ]
  },
  {
    id: "conclusion",
    type: "text",
    title: "Conclusão: A revolução invisível",
    content: [
      "A história da agricultura brasileira sempre foi contada em termos de máquinas, grandes áreas, recordes de safra e expansão territorial. Mas talvez o capítulo mais importante — e mais silencioso — esteja acontecendo agora, debaixo da superfície.",
      "O Cerrado está entrando num ponto de inflexão. A compactação do solo se espalhou como uma rachadura subterrânea. Mas ao mesmo tempo, surge um novo caminho biológico.",
      "Microrganismos despontam como o elo que faltava entre ciência do solo, produtividade e sustentabilidade. Eles são capazes de reconstruir a estrutura do solo a partir de dentro, devolvendo a ele vida, porosidade e força.",
      "A revolução que o Cerrado precisa não virá de novas máquinas ou novos agrotóxicos. Ela acontecerá em microscópicos pontos de vida que se multiplicam, conectam raízes, colam partículas de solo, criam poros, constroem agregados. Uma revolução invisível, sim — mas uma revolução profunda o suficiente para mudar o futuro da agricultura brasileira."
    ]
  }
];
