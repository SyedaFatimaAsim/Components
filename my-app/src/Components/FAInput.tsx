export default function FAInput(props:any)
{
    const {text,onChanged,type} = props
    return <input placeholder={text} onChange={onChanged} type={type}
    />
}