echo 'building...'

cd "$(dirname "$0")/.."
# yarn install && cp .env.example .env && yarn build
yarn install && yarn build