# Sistema de Gerenciamento de Estoque e Vendas

## Visão Geral

Este projeto é um sistema de gerenciamento de estoque e vendas que permite o controle completo sobre produtos, vendas e relatórios de reposição e devolução. O objetivo é proporcionar uma interface intuitiva e fácil de usar para administrar o estoque de uma loja, gerando relatórios detalhados de cada transação, seja uma venda, reposição ou devolução de produtos.

## Objetivos Principais

- **Gestão de Estoque:** Permitir que administradores adicionem, editem e removam produtos do estoque.
- **Relatórios Detalhados:** Geração automática de relatórios baseados nas transações de vendas, reposições e devoluções, ajudando no acompanhamento de fluxo de produtos.
- **Controle de Permissões:** Usuários com diferentes níveis de permissão (admin e comuns) terão acesso a funcionalidades de acordo com seu cargo.
- **Login Seguro:** Autenticação utilizando tokens JWT, garantindo segurança e controle sobre o acesso dos usuários.
- **Experiência de Espera:** Implementação de uma página de espera para quando o servidor demorar a responder, assegurando uma boa experiência de usuário mesmo em momentos de indisponibilidade.

## Funcionalidades

- **Login e Autenticação Segura:** Os usuários podem se autenticar com nome de usuário ou e-mail, com segurança reforçada por criptografia de senha e tokens JWT.
- **Gestão de Produtos:** Administradores têm acesso completo à criação, edição e remoção de produtos no sistema.
- **Relatórios Automatizados:** Relatórios são gerados automaticamente após transações, fornecendo um histórico detalhado do que foi vendido ou reposto.
- **Controle de Acesso:** Diferentes níveis de permissões permitem o gerenciamento hierárquico dentro do sistema.

## Tecnologias Utilizadas

- **Frontend:** Desenvolvido em **React** com **Next.js**, proporcionando uma experiência de navegação otimizada e moderna, com Server-Side Rendering (SSR) para melhor performance.
- **Backend:** Construído em **Express.js**, uma estrutura leve e robusta para APIs e microsserviços, proporcionando uma base escalável para o sistema.
- **Comunicação em Tempo Real:** Integração com **Socket.io** para funcionalidades de tempo real, como atualizações instantâneas do status de estoque e notificações.
- **Interface de Usuário:** Utilização do **Material UI**, um conjunto de componentes de interface do usuário que segue as melhores práticas de design, assegurando consistência visual e usabilidade.
- **Banco de Dados:** **MongoDB**, um banco de dados NoSQL altamente escalável e flexível, que facilita o gerenciamento de dados complexos de estoque e usuários.
- **Autenticação e Segurança:** O uso de **bcryptjs** para hash de senhas e **JWT (JSON Web Token)** para autenticação, garantindo a segurança das informações dos usuários.
- **Hospedagem:** O sistema será hospedado no **Render.com**, garantindo escalabilidade e alta disponibilidade. Além disso, uma página de fallback será exibida caso o servidor não responda em 2500ms, garantindo uma experiência de usuário contínua.

## Página de Espera (Fallback)

Caso o servidor não responda em até 2500ms, o sistema exibirá uma página de "servidor ligando, aguarde", com uma tentativa de reconectar por até 15 segundos. Após três tentativas sem sucesso, o sistema exibirá uma mensagem de erro interno, informando o usuário.

## Desenvolvimento

Para visualizar o progresso, tarefas pendentes e desenvolvedores envolvidos, acesse o [gerenciamento do projeto](https://www.notion.so/12860b922fba80d6a23fc3f052d4602e?pvs=21).

## Licença

Este projeto possui uma licença personalizada. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.
