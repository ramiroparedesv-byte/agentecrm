# AgenteCRM 🤖

CRM inteligente para vendedores latinoamericanos. Claude analiza tus conversaciones de WhatsApp y te dice exactamente qué hacer para cerrar más ventas.

## Deploy en 3 minutos

### 1. Obtén tu API Key de Anthropic
- Ve a https://console.anthropic.com
- Crea cuenta → API Keys → Create Key
- Copia la key (empieza con `sk-ant-...`)

### 2. Sube a Vercel
**Opción A — Sin código (más fácil):**
1. Ve a https://vercel.com y crea cuenta
2. Arrastra la carpeta `agentecrm` al dashboard de Vercel
3. Click "Deploy"
4. ¡Listo! Tendrás una URL tipo `agentecrm-xxx.vercel.app`

**Opción B — Con CLI:**
```bash
npm i -g vercel
cd agentecrm
vercel --prod
```

### 3. Configura la API Key en la app
- Abre tu URL desplegada
- Click en "⚙ API Key" (esquina superior derecha)
- Pega tu key de Anthropic
- ¡Ya puedes analizar conversaciones!

## Cómo usar
1. Los 3 prospectos de ejemplo ya están cargados
2. Click en cualquier prospecto → "Analizar con Claude"
3. Claude analiza y te da: estado, objeciones, siguiente paso y mensaje listo
4. Click "+ Nuevo" para agregar tus propios prospectos
5. Pega cualquier conversación de WhatsApp y analiza

## Stack
- HTML/CSS/JS puro — sin frameworks, sin build steps
- Claude API (Haiku) para análisis
- LocalStorage para persistencia de datos
- Vercel para hosting estático gratuito

## Pricing sugerido para clientes
- Plan Starter: $29/mes (hasta 50 análisis)
- Plan Pro: $79/mes (análisis ilimitados + historial)
- Plan Agencia: $199/mes (hasta 5 usuarios)
