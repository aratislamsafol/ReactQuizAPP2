import { Container } from 'react-bootstrap';
import classes from './assets/css/module/major.module.css';
import MajorChoiceIcon from './MajorChoiceIcon';

export default function MajorChoice({children,majorChoice}){
    return <div className={classes.majorChoice}>
        <MajorChoiceIcon majorChoiceIcon={classes.majorChoiceIcon}> 
        <Container>
            {children}
        </Container>
        </MajorChoiceIcon>
    </div>
}