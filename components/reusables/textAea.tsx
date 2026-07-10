import { Dispatch, SetStateAction } from "react";

type TextAAreaProps = {
    label: string; 
    placeHolder: string
    setValue: Dispatch<SetStateAction<string>>
    value: string
}
export default function TextArea({ label, placeHolder, setValue, value }: TextAAreaProps) {
    return (
        <div className="flex-1">
            <label className="mb-2 block text-md font-medium text-slate-400">{ label }</label>
            <textarea
                rows={6}
                placeholder={ placeHolder }
                onChange={(e) => setValue(e.target.value)}
                value={ value }
                className="
                    w-full
                    resize-none
                    rounded-xl
                    border border-slate-900
                    bg-slate-900/60
                    px-4
                    py-3
                    text-slate-100
                    placeholder:text-slate-500
                    outline-none
                    transition-all
                    duration-200
                    focus:border-cyan-900
                    focus:ring-1
                    focus:ring-cyan-900/20
                "
            />
        </div>
    )
}