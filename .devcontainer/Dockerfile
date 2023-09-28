ARG VARIANT=18-bullseye
ARG FLAVOUR=typescript
FROM mcr.microsoft.com/vscode/devcontainers/${FLAVOUR}-node:0-${VARIANT}

# Install additional OS packages.
RUN apt-get update && \
  export DEBIAN_FRONTEND=noninteractive && \
  apt-get -y install --no-install-recommends \
    python3-pip \
    python3-venv \
    inetutils-ping \
    vim \
    bc

# Set zsh as the default shell.
RUN chsh -s /bin/zsh root && \
  chsh -s /bin/zsh node

# [Optional] install and enable useful ZSH plugins
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting && \
  git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && \
  git clone https://github.com/MichaelAquilina/zsh-you-should-use.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/you-should-use
RUN sed -i "s/^plugins=(git)/plugins=(git docker you-should-use zsh-autosuggestions zsh-syntax-highlighting)/" ${HOME}/.zshrc

# [Optional] Install yarn.
RUN npm install -g yarn

RUN yarn set version stable

RUN corepack enable
RUN corepack prepare yarn@stable --activate

# Install act to test github actions locally
RUN curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

WORKDIR /workspace
