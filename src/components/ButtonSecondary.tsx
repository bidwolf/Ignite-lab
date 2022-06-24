import { IconProps } from 'phosphor-react'
interface IButtonProps{
    icon?: IconProps;
    textButton: string;
    href: string;
}
function ButtonSecondary(props:IButtonProps) {
    return (
        <a
                href={props.href}
                className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
            <>
                {props.icon}
                {props.textButton}
            </>
        </a>
    );
}

export default ButtonSecondary;