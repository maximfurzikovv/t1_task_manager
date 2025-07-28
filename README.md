# Менеджер задач
В рамках учебного задания реализовано полноценное CRUD-приложение с REST API: менеджер задач с клиент-серверной архитектурой на базе React + Redux + Express (Node.js).  

### Vercel: https://t1-task-manager-git-server-version-maxim-furzikovs-projects.vercel.app/
### Versel (сервер): https://t1-task-manager-git-server-version-maxim-furzikovs-projects.vercel.app/tasks

## Стек технологий:
- Node.js + Express;
- Ранее разработанное SPA-приложение (ветка redux-version): https://github.com/maximfurzikovv/t1_task_manager/tree/redux-version

## Реализованный функционал
- REST API на Express с TypeScript;
- Методы получения всех задач, поиск задач по названию и дате (на уровне API);
- Создание, редактирование и удаление задач;
- Валидация формы задач;
- Данные хранятся в оперативной памяти;

## Краткое описание архитектуры
Проект реализован по принципу клиент–серверной архитектуры, где:
- Клиентская часть - это одностраничное приложение (SPA) на React + Redux, взаимодействующее с сервером через REST API.
- Серверная часть - Express-приложение на Node.js и TypeScript, обрабатывающее CRUD-запросы к задачам.

## 🛠 Инструкция по запуску проекта

#### Установка зависимостей
```bash
git clone https://github.com/maximfurzikovv/t1_task_manager/tree/server-version
npm install
cd server
npm install
```

#### Запуск сервера
```bash
npm run dev # В директории server
```

#### Запуск SPA-приложения
```bash
npm run dev # В корневой директории проекта
```
