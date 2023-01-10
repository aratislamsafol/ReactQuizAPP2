import classes from './assets/css/module/footer.module.css';
import img from './assets/images/footer-logo.png';
import Container from "./Container";
import FooterPartition from "./FooterPartition";
import Image from "./Image";

export default function Footer(){
    return <div class={classes.footer}>
        <Image src={img} alt="footerLogo" banner_img={classes.footer_image}/>
        <Container classes="container">
            <FooterPartition />
        </Container>
    </div>
}