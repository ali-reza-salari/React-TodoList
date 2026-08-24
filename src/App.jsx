import {useState} from "react";
import {useId} from "react";
import AddTodoModal from "./components/AddTodoModal.jsx";
import Todo from "./components/Todo.jsx";
export default function App() {
    const id = useId()
    let [showModal , setShowModal] = useState(false)
    let [todos , setTodos] = useState([])
    const [filterTodo , setFilterTodo] = useState('all')
    const addTodo = (title , description , todo_label) => {
        const newTodo = {
            id: id,
            title,
            description,
            todo_label
        }
        setTodos([...todos , newTodo])
        setShowModal(false)
    }
    let doTodo = (id) => {
        let updateTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.todo_label = 'done'
            }
            return todo
        })
        setTodos(updateTodo)
    }
    let removeTodo = (id) => {
        const updateTodo = todos.filter(todo => todo.id !== id)
        setTodos(updateTodo)
    }

  return (
      <>
          <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">


              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                      <div
                          className="w-11 h-11 rounded-2xl bg-brand flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand/30">
                          <i className="ti ti-checks text-white text-xl"></i>
                      </div>
                      <div>
                          <h1 className="text-xl font-semibold text-slate-800">وظایف من</h1>
                          <p className="text-xs text-slate-400 mt-0.5" id="dateLabel"></p>
                      </div>
                  </div>
                  <button className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 active:scale-95 shadow-md shadow-brand/25 w-full sm:w-auto" onClick={() => setShowModal(true)}>
                      <i className="ti ti-plus text-base"></i>
                      افزودن وظیفه
                  </button>
              </div>


              <div className="grid grid-cols-3 gap-3 mb-6" id="statsRow">
                  <div className="bg-white rounded-2xl border border-slate-100 px-3 py-3 flex flex-col items-center gap-1">
                      <span className="text-xs text-slate-400">کل وظایف</span>
                      <span className="text-2xl font-semibold text-slate-700" id="statAll">{todos.length}</span>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 px-3 py-3 flex flex-col items-center gap-1">
                      <span className="text-xs text-slate-400">مهم</span>
                      <span className="text-2xl font-semibold text-orange-500" id="statImportant">{todos.filter(todo => todo.todo_label === 'important').length}</span>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 px-3 py-3 flex flex-col items-center gap-1">
                      <span className="text-xs text-slate-400">انجام شده</span>
                      <span className="text-2xl font-semibold text-green-500" id="statDone">{todos.filter(todo => todo.todo_label === 'done').length}</span>
                  </div>
              </div>


              <div className="flex gap-2 mb-5 overflow-x-auto pb-1" id="filterBar">
                  <button className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shadow-md shadow-brand/20 ${filterTodo === 'all' ? 'bg-brand text-white' : 'text-brand'}`} onClick={() => setFilterTodo('all')}>
                      <i className="ti ti-layout-list text-sm"></i>همه
                  </button>

                  <button className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all bg-white ${filterTodo === 'normal' ? 'bg-brand text-white' : 'text-brand'}`} onClick={() => setFilterTodo('normal')}>
                      <i className="ti ti-circle text-sm"></i>معمولی
                  </button>

                  <button className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all bg-white ${filterTodo === 'important' ? 'bg-brand text-white' : 'text-brand'}`} onClick={() => setFilterTodo('important')}>
                      <i className="ti ti-flame text-sm"></i>مهم
                  </button>

                  <button className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all bg-white ${filterTodo === 'done' ? 'bg-brand text-white' : 'text-brand'}`} onClick={() => setFilterTodo('done')}>
                      <i className="ti ti-circle-check text-sm"></i>انجام شده
                  </button>
              </div>

              {
                  filterTodo === 'all' ? (
                      todos.length !== 0 ? (
                          todos.map(todo => (
                              <Todo key={todo.id} {...todo} onDo={doTodo} onRemove={removeTodo} />
                          ))
                      ) : (
                          <div id="emptyState" className=" text-center py-16">
                              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                                  <i className="ti ti-clipboard-off text-brand text-2xl"></i>
                              </div>
                              <p className="text-slate-600 font-medium">موردی یافت نشد</p>
                              <p className="text-slate-400 text-sm mt-1">وظیفه‌ای برای نمایش وجود ندارد</p>
                          </div>
                      )
                  ) : filterTodo === 'normal' ? (
                      todos.length !== 0 ? (
                          todos.filter(todo => todo.todo_label === 'normal').map(todo => (
                              <Todo key={todo.id} {...todo} onDo={doTodo} onRemove={removeTodo} />
                          ))
                      ) : (
                          <div id="emptyState" className=" text-center py-16">
                              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                                  <i className="ti ti-clipboard-off text-brand text-2xl"></i>
                              </div>
                              <p className="text-slate-600 font-medium">موردی یافت نشد</p>
                              <p className="text-slate-400 text-sm mt-1">وظیفه‌ای برای نمایش وجود ندارد</p>
                          </div>
                      )
                  ) : filterTodo === 'important' ? (
                      todos.length !== 0 ? (
                          todos.filter(todo => todo.todo_label === 'important').map(todo => (
                              <Todo key={todo.id} {...todo} onDo={doTodo} onRemove={removeTodo} />
                          ))
                      ) : (
                          <div id="emptyState" className=" text-center py-16">
                              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                                  <i className="ti ti-clipboard-off text-brand text-2xl"></i>
                              </div>
                              <p className="text-slate-600 font-medium">موردی یافت نشد</p>
                              <p className="text-slate-400 text-sm mt-1">وظیفه‌ای برای نمایش وجود ندارد</p>
                          </div>
                      )
                  ) : filterTodo === 'done' ? (
                      todos.length !== 0 ? (
                          todos.filter(todo => todo.todo_label === 'done').map(todo => (
                              <Todo key={todo.id} {...todo} onDo={doTodo} onRemove={removeTodo} />
                          ))
                      ) : (
                          <div id="emptyState" className=" text-center py-16">
                              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                                  <i className="ti ti-clipboard-off text-brand text-2xl"></i>
                              </div>
                              <p className="text-slate-600 font-medium">موردی یافت نشد</p>
                              <p className="text-slate-400 text-sm mt-1">وظیفه‌ای برای نمایش وجود ندارد</p>
                          </div>
                      )
                  ) : (null)
              }

          </div>


          <div id="overlay" className={`fixed inset-0 bg-black/40 modal-backdrop z-50 items-end sm:items-center justify-center p-0 sm:p-4 ${showModal === false ? `hidden` : `flex`}`}>
              <AddTodoModal onClose={() => setShowModal(false)} addTodoHandler={addTodo} />
          </div>
      </>
  )
}