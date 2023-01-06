import CarouselItem from "./CarouselItem";

export default function OwlCarousel({owlClassName}){
    return <div className={owlClassName}>
        <CarouselItem/>
        <CarouselItem/>
    </div>
}