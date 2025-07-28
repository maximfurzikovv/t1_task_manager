import express from 'express'
import cors from 'cors'
import tasksRoutes from './routes/tasks'

const app = express()
const PORT = process.env.PORT || 3001

/**
 * Инициализация сервера Express с базовыми middleware:
 * - `cors()` разрешает кросс-доменные запросы с клиента
 * - `express.json()` парсит тело запроса как JSON
 * - `/tasks` - корневой маршрут для API задач
 */

app.use(cors())
app.use(express.json())

app.use('/tasks', tasksRoutes)

/**
 * Запускает сервер на указанном порту.
 * После запуска отображает сообщение в консоли.
 */
if (process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
}

export default app
