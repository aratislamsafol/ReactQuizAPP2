export default function Time({time,children}){
    return <div className={time}>
        <div class="d-flex gap-1">
            <span class="material-symbols-outlined ">
                schedule
            </span>
            <span class="">03:15</span>
            {children}
        </div>
    </div>
}