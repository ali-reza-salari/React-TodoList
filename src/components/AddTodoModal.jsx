import {useState} from "react";

export default function AddTodoModal({onClose , addTodoHandler}) {
    let [todoTitle , setTodoTitle] = useState('')
    let [todoDesc , setTodoDesc] = useState('')
    const  [todoLabel , setTodoLabel] = useState('normal')

    return (
        <div id="modal" className="modal-cemter bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl p-6 max-h-[92vh] overflow-y-auto">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-800" id="modalTitle">وظیفه جدید</h2>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                    <i className="ti ti-x text-lg"></i>
                </button>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-slate-600 mb-1.5">نام وظیفه
                    <span className="text-red-400">*</span>
                </label>
                <input id="todoName" type="text" placeholder="مثلاً: طراحی رابط کاربری" className={"w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-300 transition-shadow"}
                       value={todoTitle} onChange={e => setTodoTitle(e.target.value)}/>
                <p className="text-red-400 text-xs mt-1 hidden" id="nameError">نام وظیفه الزامی است</p>
            </div>

            <div className="mb-5">
                <label className="block text-sm font-medium text-slate-600 mb-1.5">توضیحات</label>
                <textarea id="todoDesc" rows="3" placeholder="توضیحات بیشتر درباره این وظیفه..." className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-300 resize-none transition-shadow"
                          value={todoDesc}
                          onChange={e => setTodoDesc(e.target.value)}
                ></textarea>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-slate-600 mb-2">برچسب</label>
                <div className="grid grid-cols-3 gap-2">
                    <button id="lbl-normal" onClick={() => setTodoLabel('normal')} className={`label-opt flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 border-slate-100 text-slate-400 hover:border-brand/30 transition-all text-xs font-medium ${todoLabel === 'normal' ? 'bg-[#534AB7] text-white' : null}`}>
                        <i className="ti ti-circle text-base"></i>
                        معمولی
                    </button>
                    <button id="lbl-important" onClick={() => setTodoLabel('important')} className={` flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 border-slate-100 text-slate-400 hover:border-orange-300 transition-all text-xs font-medium ${todoLabel === 'important' ? 'bg-[#534AB7] text-white' : null}`}>
                        <i className="ti ti-flame text-base"></i>
                        مهم
                    </button>
                    <button id="lbl-done" onClick={() => setTodoLabel('done')} className={`label-opt flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 border-slate-100 text-slate-400 hover:border-green-300 transition-all text-xs font-medium ${todoLabel === 'done' ? 'bg-[#534AB7] text-white' : null}`}>
                        <i className="ti ti-circle-check text-base"></i>
                        انجام شده
                    </button>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-500 hover:bg-slate-50 transition-colors font-medium" onClick={onClose}>انصراف</button>
                <button className="flex-2 flex-grow-[2] py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white text-sm font-medium transition-all active:scale-95 shadow-md shadow-brand/20" onClick={() => addTodoHandler(todoTitle , todoDesc , todoLabel)}>ذخیره وظیفه</button>
            </div>

        </div>
    )
}