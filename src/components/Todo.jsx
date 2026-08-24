export default function Todo({id , title , description , todo_label , onDo , onRemove}) {
    return (
        <div className="flex flex-col gap-3 my-2" id="todoList">
            <div className={`todo-card ${todo_label === 'done' ? 'bg-brand' : null} rounded-2xl`}>
                <div className="mt-0.5 h-5 flex-shrink-0 flex items-center justify-center"></div>
                <div className="flex-1 min-w-0">
                    <div className="flex pr-2.5 items-start justify-between gap-2 mb-1 flex-wrap">
                        <span className={`text-sm font-medium text-slate-700 ${todo_label === 'done' ? 'text-white' : null}`}>{title}</span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 bg-brand flex-shrink-0">
                            <i className={`ti ${todo_label === 'normal' ? 'ti-circle' : todo_label === 'important' ? 'ti-flame' : todo_label === 'done' ? 'ti-circle-check' : null} text-2xl`}></i>{todo_label === 'normal' ? 'معمولی' : todo_label === 'important' ? 'مهم' : todo_label === 'done' ? 'انجام شد' : null}
                        </span>
                    </div>
                    <p className={`text-xs pr-3 text-slate-400 leading-relaxed mb-2 ${todo_label === 'done' ? 'text-white' : null}`}>{description}</p>
                    <div className="flex gap-2">
                        <button className={`flex items-center gap-1 text-xs text-black hover:text-brand border border-slate-200 hover:border-brand/30 px-2.5 py-1 rounded-lg transition-all ${todo_label === 'done' ? 'hidden' : null}`} onClick={() => onDo(id)}>
                            <i className="ti ti-circle-check text-sm"></i>انجام شد
                        </button>
                        <button className={`flex items-center gap-1 text-xs text-black hover:text-red-500 border border-slate-200 hover:border-red-200 px-2.5 py-1 rounded-lg transition-all ${todo_label === 'done' ? 'text-white hover:text-white border-none hover:border-none' : null}`} onClick={() => onRemove(id)}>
                            <i className="ti ti-trash text-sm"></i>حذف
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}