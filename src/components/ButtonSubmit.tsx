interface IButtonProps{
    textButton: string;
    disabled?: boolean;
}
function ButtonSubmit(props:IButtonProps) {
    return (
        <button
            disabled={props.disabled}
            type={'submit'}
            className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors w-full disabled:opacity-50">
            {props.textButton}
        </button>
    );
}

export default ButtonSubmit;