export default function CourseItemsSm({column,courseCount,topicsName}){
    return <div className={column}>
        <div class="flex flex-column">
            <h1>{courseCount}</h1>
            <div class="c"></div>
            <h3>{topicsName}</h3>
        </div>
    </div>
}