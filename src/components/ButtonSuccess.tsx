import { IconProps } from 'phosphor-react'
interface IButtonProps{
    icon?: IconProps;
    textButton: string;
    href: string;
}
function ButtonSuccess(props:IButtonProps) {
    return (
        <a
                href={props.href}
                className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
            <>
                {props.icon}
                {props.textButton}
            </>
              </a>
    );
}

export default ButtonSuccess;