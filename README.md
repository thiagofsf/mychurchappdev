# Sobre
Mychurch é um app que promove interação e controle de fluxo de dados para igrejas, ele promove a redução da sobrecarga dos setores administrativos ao permitir que os próprios membros atualizem e forneçam os seus dados.
# Funcionalidades Previstas
## Cadastro/Login
Permite que qualquer pessoa realize um cadastro para ser um usuário do aplicativo. Esta funcionalidade prevê login/logout. O usuário será setado como membro e não possui nenhum privilégio, desta forma apenas pode ver as informações públicas no app.
## Membro
Permite que qualquer pessoa preencha e envie uma solicitação para ser membro da igreja, estes dados ficarão em uma tabela temporária no banco de dados, apenas usuários com privilégios de administrador poderão aceitar ou rejeitar o pedido. Após uma aceitação, esse usuário é setado como membro. Membros tem acesso as seguintes funcionalidades exclusivas: voluntariado, atualização de dados e cartão de membro digital.
## Eventos
Permite que qualquer usuário veja os próximos eventos, com todas as informações sobre os mesmos. Esta funcionalidade é pública, ou seja, disponível para todos os usuários (membros ou não). Apenas usuários com privilégios de adm terão acesso ao módulo de adição de eventos.
## Voluntariado
Permite que qualquer membro se voluntarie para uma atividade da igreja, uma nova requisição de voluntariado apenas poderá ser feita por um usuário adm. Essa funcionalidade é disponível apenas para membros.
## Cartão de Membro Digital (extra feature)
Essa funcionalidade mostra um cartão de membros dentro do app, isso permite que membros sejam devidamente identificados como parte integrante do corpo de membros da igreja (por exemplo quando este membro visitar outra igreja). Essa funcionalidade estará disponível apenas para membros.
# Arquivos
Neste projeto são encontradas duas pastas:
## mychurch
Aplicação desenvolvida usando React-Native.
## mychurchserver
Todo o código backend usado para comunicação com o banco de dados (hospedado em servidor web). A intenção é que este mesmo backend seja usado para uma posterior variação do app para web, além de integrar os bancos de dados a outras aplicações complementares.
