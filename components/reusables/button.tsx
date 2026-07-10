type ButtonProps = {
    label: string
    type: 'submit' | 'button'
    onClick?: () => void
    isLoading?: boolean
}

export default function Button({ label, type, onClick, isLoading }: ButtonProps) {
    return (
        <button
            onClick={ onClick }
            type={ type }
            disabled={ isLoading }
            className={`
                ${ isLoading ? 'bg-cyan-900 ' : 'bg-cyan-800 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-800/25 active:scale-[0.98] cursor-pointer' }
                rounded-xl
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-200
                
                w-full
            `}
        >
            { isLoading ? 'Sending...' : label }
        </button>
    )
}