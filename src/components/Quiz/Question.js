import MiniPlayer from "./MiniPlayer";

export default function Question({question}){
    return <>
        <div class="border-bottom d-flex justify-content-between">
        <div>
            <h4 class="">Questions</h4>
            <h3>{question}</h3>
        </div>
        <MiniPlayer />
    </div>

    </>
}