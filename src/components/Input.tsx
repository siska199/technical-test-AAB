import clsx from 'clsx';
import React from 'react'

type TProps = {
    id?         : string;
    label       : string 
    name        : string; 
    value       : string | number;
    placeholder?: string;
    type?       : "text" | "password" | "email";
    direction?  : "horizontal" | "vertical"
    onChange    : (e : React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input = (props: TProps) => {
    const {id, label, name, value, type="text", onChange,placeholder, direction="horizontal" } = props
  return (
    <div
        className={clsx('flex gap-2',{
            "flex-col" : direction ==="vertical"
        })}
    >
        {
            label && (<label className='min-w-[50%]'>{label}</label>)
        }
        <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id={id} 
            name={name}
            type={type} 
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>

    )
}

export default Input