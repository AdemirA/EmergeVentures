# Firebase Hosting - EmergeVentures

## Deploy para Produção

Para fazer deploy da aplicação para o Firebase Hosting:

```bash
npm run deploy
```

ou diretamente:

```bash
firebase deploy --only hosting
```

## Deploy Preview (Teste)

Para criar um canal de preview temporário para testes:

```bash
npm run deploy:preview
```

## Configuração Atual

- **Public Directory**: `.` (raiz do projeto)
- **Projeto Firebase**: Será configurado ao executar o deploy
- **URL**: Será gerada após o primeiro deploy

## Arquivos Ignorados

O Firebase não fará upload dos seguintes arquivos:
- `node_modules/`
- `firebase.json`
- Arquivos ocultos (começando com `.`)
- `package.json` e `package-lock.json`
- `README.md` e `RELATORIO_EXECUTIVO.md`

## Primeiro Deploy

1. Execute: `firebase use --add` para selecionar o projeto
2. Escolha entre: `grao-tech` ou `kazaiassets`
3. Execute: `npm run deploy`
