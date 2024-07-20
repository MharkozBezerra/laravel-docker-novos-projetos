<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

# Ferramentas do desenvolvimento
- Laravel v10.x
- PHP v8.2.x
- MySQL v8.1 - (in use default)
- MariaDB v10.11 - (comentado)
- phpMyAdmin v5.x
- Mailpit v1.x
- Node.js v18.x
- NPM v10.x
- Yarn v1.x
- Vite v5.x
- Rector v1.x
- Redis v7.2.x

# Recomendaveis
- Stable version of [Docker](https://docs.docker.com/engine/install/)
- Compatible version of [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

# How To Deploy

### For first time only !
- `docker compose up -d --build`
- `docker compose exec php bash`
- `composer setup`

### From the second time onwards
- `docker compose up -d`

# Notes

### Laravel App
- URL: http://localhost

### phpMyAdmin
- URL: http://localhost:8080
- Server: `db`
- Username: `mharkoz`
- Password: `122436`
- Database: `'app'`

### Adminer
- URL: http://localhost:9090
- Server: `db`
- Username: `mharkoz`
- Password: `122436`
- Database: `app`

### Comando básicos do docker
- Construir ou rebuildar serviços
    - `docker compose build`
- Create and start containers
    - `docker compose up -d`
- Parar ou remover container e rede de conexão
    - `docker compose down`
- Parar todos os serviços
    - `docker compose stop`
- Reniciar todos os serviços
    - `docker compose restart`
- Iniciar apenas um container desejado.
    - `docker compose exec [container] [command]`

### Useful Laravel Commands
- Descrição do projeto
    - `php artisan about`
- Remover o cache do projeto
    - `php artisan config:clear`
- Limpar todo os caches
    - `php artisan cache:clear`
- Limpar todo os caches events e listeners
    - `php artisan event:clear`
- Limpa todas filas
    - `php artisan queue:clear`
- Limpar todo os caches da rota
    - `php artisan route:clear`
- Limpa os arquivos copilados
    - `php artisan view:clear`
- Limpa os arquivos copilados
    - `php artisan clear-compiled`
- Remove os caches de iniciação
    - `php artisan optimize:clear`
- Remove todos os agendamento criado pelo scheduler
    - `php artisan schedule:clear-cache`
- Limpa todos os acesso da autorização.
    - `php artisan auth:clear-resets`

### Laravel Pint (Code Style Fixer | PHP-CS-Fixer)
- Formata todos os arquivos
    - `vendor/bin/pint`
- Formata um arquivo ou diretório diretório
    - `vendor/bin/pint app/Models`
    - `vendor/bin/pint app/Models/User.php`
- Formata todos arquivos de visão
    - `vendor/bin/pint -v`
- Formta os arquivos do git
    - `vendor/bin/pint --dirty`
- Inspect all files
  - `vendor/bin/pint --test`

### Rector
- Dry Run
    - `vendor/bin/rector process --dry-run`
- Process
    - `vendor/bin/rector process`

# TODO
 - a máquina deve ter instalado o node js versão 18.
 - após instalação, rode o comando em um terminal:
 ```shell
  
  # Ambiente de desenvolvimento.
  npm run dev 

  # Ambiente de produção.
  npm run build
 ```
---


## Projeto name


.
