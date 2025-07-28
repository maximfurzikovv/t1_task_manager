import express from 'express'
import { tasks } from '../db'
import { Task } from '../models/task'

const router = express.Router()

/**
 * @route GET /tasks
 * @description Получить список всех задач, с возможностью фильтрации по названию и дате
 * @queryParam {string} [title] - фильтр по части названия задачи
 * @queryParam {string} [date] - фильтр по дате создания
 * @returns {Task[]} - массив задач
 */
router.get('/', (req, res) => {
  const { title, date } = req.query
  let filtered = tasks

  if (title) {
    filtered = filtered.filter(t =>
      t.title.toLowerCase().includes((title as string).toLowerCase())
    )
  }

  if (date) {
    filtered = filtered.filter(t =>
      new Date(t.createdAt).toDateString() === new Date(date as string).toDateString()
    )
  }

  res.json(filtered)
})

/**
 * @route GET /tasks/:id
 * @description Получить задачу по ID
 * @param {string} id — идентификатор задачи
 * @returns {Task} — задача, если найдена
 * @throws 404 — если задача не найдена
 */
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id)
  if (!task) return res.status(404).json({ error: 'Not found' })
  res.json(task)
})

/**
 * @route POST /tasks
 * @description Создать новую задачу
 * @bodyParam {Task} task — объект новой задачи
 * @returns {Task} — созданная задача
 */
router.post('/', (req, res) => {
  const task = req.body as Task
  tasks.push(task)
  res.status(201).json(task)
})

/**
 * @route PATCH /tasks/:id
 * @description Обновить существующую задачу по ID
 * @param {string} id - идентификатор задачи
 * @bodyParam {Partial<Task>} task - поля для обновления
 * @returns {Task} - обновлённая задача
 * @throws 404 - если задача не найдена
 */
router.patch('/:id', (req, res) => {
  const idx = tasks.findIndex(t => t.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'Not found' })

  tasks[idx] = { ...tasks[idx], ...req.body }
  res.json(tasks[idx])
})

/**
 * @route DELETE /tasks/:id
 * @description Удалить задачу по ID
 * @param {string} id - идентификатор задачи
 * @returns {Task} - удалённая задача
 * @throws 404 - если задача не найдена
 */
router.delete('/:id', (req, res) => {
  const idx = tasks.findIndex(t => t.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'Not found' })

  const removed = tasks.splice(idx, 1)
  res.json(removed[0])
})

export default router
