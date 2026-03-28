# Conversor de Moedas Pro

Uma aplicação web robusta e performática para conversão de moedas em tempo real, utilizando a API de Economia da AwesomeAPI. Este projeto demonstra a implementação de conceitos avançados de JavaScript Assíncrono, Manipulação de DOM e Internacionalização.

## 🚀 Visão Técnica

O projeto foi construído seguindo princípios de **Clean Code** e **Separação de Preocupações**, garantindo que a lógica de negócio, a configuração de dados e a interface do usuário trabalhem de forma harmônica.

### Estrutura e Organização

*   **Data-Driven Design**: As configurações de cada moeda (símbolo, nome, localidade e assets) são centralizadas em um objeto de configuração (`moedasConfig`). Isso facilita a escalabilidade, permitindo adicionar novas moedas apenas atualizando o esquema de dados, sem necessidade de alterar a lógica principal.
*   **Programação Assíncrona**: Utilização de `async/await` para gerenciar requisições de rede, garantindo que a interface do usuário não seja bloqueada durante a busca de dados na API externa.
*   **Gestão de Estado da UI**: Implementação de estados de carregamento (`loading`) e desabilitação de controles durante o processamento, melhorando significativamente a Experiência do Usuário (UX).

## 🛠️ Tecnologias e Métodos

### 1. Consumo de API REST
A aplicação utiliza o método `fetch` para interagir com a AwesomeAPI. A lógica é dinâmica, construindo o par de moedas (ex: `USD-BRL`) programaticamente com base na seleção do usuário.

### 2. Internacionalização (Intl API)
Para garantir a precisão na exibição de valores monetários, foi utilizada a API nativa `Intl.NumberFormat`. Isso permite que cada moeda seja formatada de acordo com seu próprio `locale` e `currency code`, respeitando pontuações e símbolos específicos de cada região (ex: `pt-BR` para Real, `de-DE` para Euro).

### 3. Tratamento de Erros (Error Handling)
O código implementa blocos `try-catch-finally` para:
*   Capturar falhas de rede ou moedas não suportadas.
*   Fornecer feedback visual ao usuário via `alert` e logs no console.
*   Garantir o reset do estado da interface (removendo loaders) independente do sucesso ou falha da operação.

## 📉 Otimizações Implementadas

*   **Single Source of Truth**: A configuração de moedas evita a repetição de strings e URLs em múltiplos lugares do código.
*   **Prevenção de Requisições Inválidas**: Validações de entrada protegem a aplicação de processar valores nulos, negativos ou não numéricos.
*   **Responsividade Reativa**: Uso de event listeners (`change` e `click`) para disparar a conversão automaticamente quando o usuário altera parâmetros, proporcionando uma sensação de aplicação em tempo real.

## 📋 Funções Gerais

*   **Conversão Multi-Moeda**: Suporte para Real, Dólar, Euro, Yuan e Bitcoin.
*   **Atualização Dinâmica de Identidade Visual**: Troca automática de bandeiras e labels conforme a seleção.
*   **Cotação em Tempo Real**: Busca sempre o valor de fechamento (`high`) mais recente do mercado financeiro.

---
**Desenvolvido por Cleomar da Silva, &copy;2025 NexusCleo.**