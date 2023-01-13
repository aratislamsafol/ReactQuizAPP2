import Input from "./Input";
import Label from "./Label";

export default function CheckBox({type,value,labelClass,title}){
    return <div class="form-check d-flex justify-content-center mb-5">
        <Input class="form-check-input me-2" type={type} value={value}/>
        <Label labelClass={labelClass} title={title} />
</div>
}