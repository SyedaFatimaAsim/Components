export default function FAButton(props:any)
{
    //better way instead of props. is destructring
    const { type,btnValue,className,functionName} = props;
    return <button type ={type} onClick={functionName} className={ className==null? "btn btn-danger rounded 0 m-1": className}>{btnValue}</button>
}