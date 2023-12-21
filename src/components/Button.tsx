import clsx from "clsx";

type TProps = {
    label           : string;
    color           : "blue" | "red",
    onClick         : ()=> void;
    customeClass    : string;
    type?           : "outlined" | "contained";
    disabled?       : boolean;
}

const Button = (props: TProps) => {
    const {label, color, onClick, customeClass="", type="contained", disabled=false} = props

  return (
    <button 
        className={clsx(
            "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block",
            {
                "bg-blue-500 hover:bg-blue-700 " : color === "blue" && type==="contained" ,
                "bg-red-500 hover:bg-red-700" : color === "red" && type==="contained",
                "opacity-75 cursor-not-allowed	" : disabled,
                [customeClass] : customeClass
            }
        )} 
        disabled={disabled}
        onClick={onClick}
    >
    {label}
    </button>
  )
}

export default Button