import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";
export default function AllCourse(){
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [course,setCourese]=useState([]);
    // const [hasMore,setHasMore]=useState(true);

    useEffect(() => {
        async function FetchVideos(){
            const db=getDatabase();
            const coureseRef=ref(db,"videos");
            // const queryCourse=query(coureseRef,orderByKey(), startAt(""+page),
            // limitToFirst(8)
            // );
            const queryCourse=query(coureseRef,orderByKey());
    
            try{
                setError(false);
                setLoading(true);
    
                const snapshot=await get(queryCourse);
                setLoading(false);
                console.log(snapshot.val());
                if(snapshot.exists()){
                    setCourese((prevVideos)=>{
                        return [...prevVideos,...Object.values(snapshot.val())];
                    })
                }
                // else{
                //     setHasMore(false); 
                // }
    
            }catch(err){
                console.log(err);
                setError(true);
                setLoading(false);
            }
        }
        FetchVideos();
    }, []);
    return {
        loading,
        error,
        course,
        // hasMore
    };
}