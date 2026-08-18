# Viagem para a Chapada dos Veadeiros

Dashboard estático (HTML/CSS/JS puro, sem build) para comparar hospedagens, calcular gasolina e organizar o roteiro do fim de semana de 02 a 04 de outubro de 2026.

## Estrutura

```
index.html   → estrutura da página
style.css    → visual (bege claro, verde, branco, amadeirado)
app.js       → dados da viagem (CONFIG) e toda a lógica/renderização
images/      → fotos das hospedagens (commitada normalmente, para aparecer no GitHub Pages)
```

Todos os dados editáveis (preços, distâncias, roteiro, comida) ficam no objeto `CONFIG` no topo de `app.js`. Para atualizar qualquer informação do site, edite ali — o HTML não precisa ser tocado.

## Rodar localmente

Não precisa instalar nada. Duas opções:

**1. Abrir direto no navegador**
Dê duplo clique em `index.html` (ou clique com botão direito → Abrir com → seu navegador).

**2. Servidor local (recomendado, evita bloqueios de `file://` em alguns navegadores)**

Com Python instalado:
```bash
cd d:\Viagem_Chapada
python -m http.server 8080
```
Depois acesse `http://localhost:8080` no navegador.

Ou com Node.js:
```bash
npx serve .
```

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado, GitHub Pages funciona nos dois em contas com Pages habilitado).
2. Na pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Dashboard da viagem Chapada dos Veadeiros"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Build and deployment", selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
5. Salve e aguarde alguns minutos — o site fica disponível em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

## O que ajustar antes de publicar

- Conferir se as distâncias das rotas (em `CONFIG.routeSets` no `app.js`) batem com o trajeto real combinado. Há duas malhas: `altoParaiso` (Barata, Ideal, Cara) e `saoJorge` (Barata 02), selecionáveis por abas na seção "Rotas & Combustível".
- Ajustar o preço padrão da gasolina no `CONFIG.fuelDefaults` se estiver desatualizado (o valor usado como padrão foi baseado em pesquisa de agosto/2026 no DF).
- Conferir se as 16 fotos em `images/` estão corretas antes do `git add` — elas serão publicadas junto com o código.
