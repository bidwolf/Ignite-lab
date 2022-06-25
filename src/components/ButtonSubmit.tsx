import { IconProps } from 'phosphor-react'
interface IButtonProps{
    textButton: string;
}
function ButtonSubmit(props:IButtonProps) {
    return (
        <button
            type={'submit'}
            className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors w-full">
            {props.textButton}
        </button>
    );
}

export default ButtonSubmit;