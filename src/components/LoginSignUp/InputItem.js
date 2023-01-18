import Input from "../Input";
import Label from "../Label";
export default function InputItem({type,title,labelClass,...rest}){
    return <div class="d-flex flex-row align-items-center mb-4">
    <div class="form-outline flex-fill mb-0">
        <Input type={type} class="form-control" {...rest}/>
        <Label labelClass={labelClass} title={title} />
    </div>
</div>
}