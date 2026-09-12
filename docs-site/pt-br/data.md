# Arquitetura de dados

> A arquitetura transforma registros de coleta em uma base confiável para análise, visualização e decisão.

## Fluxo de dados

<div class="logic-flow"><div class="logic-node">📝 Coleta<small>Resposta / registro</small></div><div class="logic-arrow">→</div><div class="logic-node">🗃️ Registro<small>Base estruturada</small></div><div class="logic-arrow">→</div><div class="logic-node">✅ Validação<small>Regras de qualidade</small></div><div class="logic-arrow">→</div><div class="logic-node">🧱 Consolidação<small>Base analítica</small></div><div class="logic-arrow">→</div><div class="logic-node">🔎 Análise<small>Evidências</small></div><div class="logic-arrow">→</div><div class="logic-node">📊 Visualização<small>Decisão</small></div></div>

## Camadas

<div class="interactive-grid"><div class="interactive-card"><span class="chip">Entrada</span><h3>📝 Coleta</h3><p>Instrumentos e rotinas registram as informações necessárias para responder às perguntas da avaliação.</p></div><div class="interactive-card"><span class="chip">Controle</span><h3>✅ Validação</h3><p>Campos obrigatórios, valores válidos, consistência e regras de qualidade reduzem erros antes da análise.</p></div><div class="interactive-card"><span class="chip">Base</span><h3>🧱 Consolidação</h3><p>Os registros são organizados em uma estrutura que permite cruzamentos, filtros e comparações ao longo do tempo.</p></div><div class="interactive-card"><span class="chip">Saída</span><h3>📊 Visualização</h3><p>Indicadores e análises são apresentados de forma adequada às decisões táticas e estratégicas.</p></div></div>

## Qualidade

Priorizar padronização, campos obrigatórios, valores válidos, rastreabilidade, controle de versões e documentação das transformações.

<div class="filter-note"><strong>Regra:</strong> uma visualização bonita não corrige uma base mal estruturada. A qualidade do dashboard depende da qualidade da arquitetura de dados.</div>

## Governança

Dados públicos de demonstração devem ser sintéticos, fictícios ou devidamente sanitizados. Dados reais devem permanecer em ambientes autorizados.

## Arquitetura conceitual

**Coleta → Registro → Validação → Consolidação → Tratamento → Análise → Visualização → Decisão**