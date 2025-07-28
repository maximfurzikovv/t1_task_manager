import { Task } from '@entities/task/model/types';

const BASE_URL = '';

/**
 * API для работы с задачами через REST API.
 * Использует fetch для выполнения HTTP-запросов.
 */
export const taskApi = {
    /**
     * Получить список всех задач.
     * GET /tasks
     * @returns {Promise<Task[]>} - массив задач
     */
    async getAll(): Promise<Task[]> {
        const res = await fetch(`${BASE_URL}/tasks`);
        return await res.json();
    },

    /**
     * Получить задачу по ID.
     * GET /tasks/:id
     * @param {string} id - идентификатор задачи
     * @throws {Error} если задача не найдена
     * @returns {Promise<Task>} - задача
     */
    async getById(id: string): Promise<Task> {
        const res = await fetch(`${BASE_URL}/tasks/${id}`);
        if (!res.ok) {
            throw new Error('Task not found');
        }
        return await res.json();
    },

    /**
     * Создать новую задачу.
     * POST /tasks
     * @param {Task} task - новая задача
     * @returns {Promise<Task>} - созданная задача
     */
    async create(task: Task):Promise<Task> {
        const res = await fetch(`${BASE_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
        return await res.json();
    },

    /**
     * Обновить задачу по ID.
     * PATCH /tasks/:id
     * @param {Task} task - обновлённая задача
     * @returns {Promise<Task>} - обновлённая версия
     */
    async update(task: Task): Promise<Task> {
        const res = await fetch(`${BASE_URL}/tasks/${task.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
        return await res.json();
    },

    /**
     * Удалить задачу по ID.
     * DELETE /tasks/:id
     * @param {string} id - идентификатор задачи
     * @returns {Promise<void>}
     */
    async remove(id: string): Promise<void> {
        await fetch(`${BASE_URL}/tasks/${id}`, { method: 'DELETE' });
    }
}
