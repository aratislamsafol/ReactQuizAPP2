import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import AllCourse from "./hooks/AllCourse";
import Input from "./Input";
import { CiSearch } from 'react-icons/ci';

export default function SearchBar(){
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    // const {loading,error,course}=AllCourse();

    let allData=[];
    useEffect(() => {
        
        fetch('https://quizapp2-fdc78-default-rtdb.firebaseio.com/videos.json')
        .then(response => response.json())
        .then(data => {
    
            data.forEach((datas,index)=>{
                if(index>0){
                    allData.push(datas.title);
                }
            })
            
            allData.filter(item => item.toLowerCase().includes(search.toLowerCase())).map(item => (
                setData(item)
            ))
        })
        .catch(error => console.error(error));
    }, [search,allData]);
   
    // console.log(data)
    return <>
    <Form>
        <Input type="text" value={search} placeholder="Searching ..." onChange={event => setSearch(event.target.value)} />  
        
        <Button type="submit">
            <CiSearch/>
        </Button>
    </Form>
    <div className="d-flex justify-content-center" style={{height:"60px"}}>
        {/* <ul>
            {data.map((item) => (
            <li>{item}</li>
            ))}
        </ul> */}
        {/* {data} */}
    </div>
        
    </>
    
}

