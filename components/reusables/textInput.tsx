import { Dispatch, SetStateAction } from "react";

type TextInputProps = {
    label: string; 
    placeHolder: string
    setValue: Dispatch<SetStateAction<string>>
    value: string
}
export default function TextInput({ label, placeHolder, setValue, value }: TextInputProps) {
    return (
        <div className="w-full">
            <label className="mb-2 block text-md font-medium text-slate-400">{ label }</label>
            <input 
                type="text" 
                placeholder={ placeHolder }
                value={ value }
                onChange={(e) => setValue(e.target.value) }
                className="
                    w-full
                    rounded-xl
                    font-[16px]
                    border border-1 border-slate-900
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
                focus:bg-slate-900
            "
            />
        </div>
    )
}