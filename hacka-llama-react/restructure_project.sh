#!/bin/bash

# Verifica se o script está sendo executado na raiz do projeto
if [ ! -f "package.json" ]; then
  echo "Por favor, execute este script na raiz do projeto."
  exit 1
fi

# Função para criar diretórios
create_directories() {
  echo "Criando diretórios..."
  mkdir -p src/assets/img/logos
  mkdir -p src/assets/img/banners
  mkdir -p src/application/services/auth
  mkdir -p src/application/services/firebase
  mkdir -p src/presentation/components/common
  mkdir -p src/presentation/pages/login
  mkdir -p src/presentation/pages/home
}

# Função para mover arquivos
move_files() {
  echo "Movendo arquivos..."

  # Imagens
  mv src/assets/img/icon-logo.png src/assets/img/logos/
  mv src/assets/img/logo.svg src/assets/img/logos/
  mv src/assets/img/baloes.png src/assets/img/banners/

  # Serviços
  mv src/application/services/authUtils.ts src/application/services/auth/
  mv src/application/services/authService.ts src/application/services/auth/
  mv src/application/services/firebaseConfig.ts src/application/services/firebase/

  # Componentes
  mv src/presentation/components/spinner/LoadingSpinner.tsx src/presentation/components/common/

  # Páginas
  mv src/presentation/pages/login/* src/presentation/pages/login/
  mv src/presentation/pages/home/* src/presentation/pages/home/

  # Remove diretórios vazios
  find src -type d -empty -delete
}

# Função para limpar arquivos redundantes
clean_redundancies() {
  echo "Limpando arquivos redundantes..."

  # Remove arquivos duplicados ou redundantes
  rm -f src/presentation/components/sidebar/LeftSidebar.tsx
  rm -f src/presentation/components/lsidebar/LeftSideBar.tsx
}

# Executa as funções
create_directories
move_files
clean_redundancies

# Finaliza
echo "Reorganização concluída com sucesso!"
