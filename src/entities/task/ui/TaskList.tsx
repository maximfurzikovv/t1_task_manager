import { useContext } from 'react'
import { TaskFilterContext } from '@features/filter-task/model/context'
import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'
import { useSelector } from "react-redux";
import { RootState} from "@app/store";

export function TaskList() {
  const tasks = useSelector((state: RootState) => state.task.tasks)

  const filterContext = useContext(TaskFilterContext)
  if (!filterContext) return null
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
