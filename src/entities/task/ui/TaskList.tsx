import { useContext } from 'react'
import { TaskContext } from '../model/context'
import { TaskFilterContext } from '@features/filter-task/model/context'
import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'

export function TaskList() {
  const taskContext = useContext(TaskContext)
  const filterContext = useContext(TaskFilterContext)

  if (!taskContext || !filterContext) return null

  const { tasks } = taskContext
  const { filter } = filterContext

  const filteredTasks = tasks.filter(task => {
    const matchStatus = filter.status === 'all' || task.status === filter.status
    const matchCategory = filter.category === 'all' || task.category === filter.category
    const matchPriority = filter.priority === 'all' || task.priority === filter.priority
    return matchStatus && matchCategory && matchPriority
  })

  return (
    <div className={styles.container}>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
