# Adonis Rest API with PostgreSql

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
git clone https://github.com/jumadilakbar/simple-auth-adonisjs-service.git project
cd /project
npm install 
sudo npm i -g @adonisjs/cli
```
### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
adonis serve --dev
```
Open browser and type : 
http://127.0.0.1:3333

## Deploy With PM2
```
sudo npm i -g pm2
pm2 startup
pm2 save
sudo pm2 start /directory/path/project 
```
>Tips PM2 
>pm2 startup and pm2 save for auto restart this service or save yur service in pm2 directory if your server reboot or down.
###### Contact
>email : muhamadjumadilakbar@gmail.com