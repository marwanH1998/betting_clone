import '@fortawesome/fontawesome-free/css/all.css';
import { FC, MouseEvent, HTMLAttributes } from 'react';

interface IconButtonProps extends HTMLAttributes<HTMLAnchorElement> {
    className?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  }
const IconButton:FC<IconButtonProps> = (props) => {

    return (
        <a
        href="#"
        onClick={props.onClick}
        className="mr-6 text-gray-700 hover:text-white"
        >
        <i className={props.className}></i>
        </a>
    );

}

export default IconButton