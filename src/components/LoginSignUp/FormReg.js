import CheckBox from '../CheckBox';
import Form from '../Form';
import InputItem from './InputItem';
import Button from '../Button';

export default function FormReg(){
    return (
        <Form class="mx-1 mx-md-4">
            <InputItem type="text" title="Your Name" labelClass="form-label"/>

            <InputItem type="email" title="Your Email" labelClass="form-label"/>

            <InputItem type="password" title="password" labelClass="form-label"/>

            <InputItem type="password" title="Repeat your password" labelClass="form-label"/>

            <CheckBox type="checkbox" title="I agree all statements in " labelClass="form-label" value=""/>

            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Button type="button" class="btn btn-primary btn-lg">Register</Button>
            </div>
        </Form>
    );
}