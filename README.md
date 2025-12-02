# Moova 🚀

Aplicativo mobile desenvolvido com React Native e Expo, utilizando arquitetura MVVM para organização e manutenibilidade do código.

## 📋 Sobre o Projeto

Moova é uma aplicação mobile multiplataforma (iOS e Android) construída com Expo Router para navegação baseada em arquivos, Redux Toolkit para gerenciamento de estado global, e seguindo o padrão arquitetural MVVM (Model-View-ViewModel).

## 🏗️ Arquitetura

### MVVM (Model-View-ViewModel)

O projeto utiliza o padrão **MVVM** para separar responsabilidades:

- **View** (`index.tsx`): Responsável apenas pela apresentação e renderização da UI
- **ViewModel** (`viewModel.ts`): Contém toda a lógica de negócio, estado e efeitos
- **Model**: Representado pelos serviços (`services/`) e estado global (`redux/`)

### Estrutura de Pastas

```
moova/
├── app/                      # Rotas (Expo Router)
│   ├── (auth)/              # Rotas autenticadas
│   └── (public)/            # Rotas públicas
│
├── presentation/            # Camada de apresentação
│   ├── components/          # Componentes reutilizáveis (MVVM)
│   │   ├── Splash/
│   │   │   ├── index.tsx    # View
│   │   │   ├── viewModel.ts # ViewModel
│   │   │   └── styles.ts    # Estilos
│   │   └── ...
│   └── icons/              # Ícones SVG
│
├── services/                # Camada de serviços (API)
│   ├── api.ts              # Cliente HTTP base
│   └── *.ts                # Serviços específicos
│
├── redux/                   # Estado global
│   ├── store.ts            # Configuração da store
│   ├── rootReducer.ts      # Combinação de reducers
│   ├── hooks.ts            # Hooks tipados
│   └── slices/             # Slices Redux
│
├── theme/                   # Design tokens
│   ├── index.ts            # Cores, fontes, espaçamentos
│   └── styles.ts           # Estilos reutilizáveis
│
├── providers/               # React Context Providers
├── hooks/                   # Hooks customizados
└── constants/               # Constantes da aplicação
```

## 🛠️ Tecnologias Principais

- **React Native** (0.81.5) - Framework mobile
- **Expo** (~54.0.25) - Plataforma de desenvolvimento
- **Expo Router** (~6.0.15) - Roteamento baseado em arquivos
- **Redux Toolkit** (^2.11.0) - Gerenciamento de estado
- **TypeScript** (~5.9.2) - Tipagem estática
- **Styled Components** (^6.1.13) - Estilização
- **React Native Reanimated** (~4.1.3) - Animações
- **Clerk** (^2.2.34) - Autenticação

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn (gerenciador de pacotes)
- Expo CLI (`npm install -g expo-cli`)

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd moova
```

2. Instale as dependências:
```bash
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
yarn start
```

4. Execute em uma plataforma:
```bash
# iOS
yarn ios

# Android
yarn android

# Web
yarn web
```

## 📝 Convenções de Código

### Nomenclatura

- **Pastas de componentes**: PascalCase (`Splash/`, `Collapsible/`)
- **Arquivos utilitários**: camelCase (`viewModel.ts`, `styles.ts`)
- **Componentes**: PascalCase (`Splash.tsx`, `ThemedText.tsx`)
- **Pastas utilitárias**: minúscula (`services/`, `hooks/`, `icons/`)

### Estrutura de Componente MVVM

```typescript
// presentation/components/MyComponent/index.tsx (View)
import { useMyComponentViewModel } from "./viewModel";
import * as S from "./styles";

export default function MyComponent() {
  const { data, handleAction } = useMyComponentViewModel();
  
  return (
    <S.Container>
      {/* UI aqui */}
    </S.Container>
  );
}
```

```typescript
// presentation/components/MyComponent/viewModel.ts
import { useState, useEffect } from "react";

export function useMyComponentViewModel() {
  const [data, setData] = useState(null);
  
  const handleAction = () => {
    // Lógica aqui
  };
  
  return { data, handleAction };
}
```

```typescript
// presentation/components/MyComponent/styles.ts
import styled from "styled-components/native";
import { theme } from "@/theme";

export const Container = styled.View`
  padding: ${theme.spacing.base}px;
`;
```

## 🔄 Gerenciamento de Estado

### Redux Toolkit

O projeto utiliza Redux Toolkit para estado global. Para usar:

```typescript
import { useAppDispatch, useAppSelector } from "@/redux";
import { setLoading } from "@/redux/slices/appSlice";

function MyComponent() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.app.isLoading);
  
  const handleClick = () => {
    dispatch(setLoading(true));
  };
}
```

### Criar um novo Slice

1. Crie o arquivo em `redux/slices/`
2. Adicione ao `rootReducer.ts`
3. Exporte as actions em `redux/index.ts`

## 🌐 Serviços de API

Os serviços ficam em `services/` e são usados para comunicação com APIs:

```typescript
import { userService } from "@/services";

const users = await userService.getAll();
```

## 🎨 Tema

O tema centralizado está em `theme/index.ts`:

```typescript
import { theme } from "@/theme";

// Cores
theme.colors.primary
theme.colors.gradient.start

// Fontes
theme.fonts.family.regular
theme.fonts.size.base

// Espaçamentos
theme.spacing.base
```

## 🧪 Testes

```bash
yarn test
```

## 🔍 Linting

```bash
# Verificar erros
yarn lint

# Corrigir automaticamente
yarn lint:fix
```

## 📦 Scripts Disponíveis

- `yarn start` - Inicia o servidor Expo
- `yarn ios` - Executa no iOS
- `yarn android` - Executa no Android
- `yarn web` - Executa no navegador
- `yarn lint` - Verifica código
- `yarn lint:fix` - Corrige código automaticamente
- `yarn test` - Executa testes

## 🔐 Git Hooks

O projeto utiliza **Husky** e **Commitlint** para garantir qualidade:

- **Pre-commit**: Executa lint-staged
- **Commit-msg**: Valida mensagens de commit (conventional commits)

## 📚 Recursos Adicionais

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## 🤝 Contribuindo

1. Siga as convenções de código estabelecidas
2. Use commits convencionais (Commitlint)
3. Execute `yarn lint` antes de commitar
4. Mantenha a arquitetura MVVM

---

Desenvolvido com ❤️ usando Expo e React Native
