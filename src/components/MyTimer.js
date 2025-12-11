import { useEffect } from "react";

export default function MyTimer(){

    // 매번 렌더링마다 실행
    useEffect(
        () => {console.log("effect 1");}
    );

    //첫번째 렌더링마다 실행
    useEffect(
        () => {console.log("effect 2");}, []
    );

    useEffect(
        () => {console.log("effect 3");}, [value]
    );

    return(
        <></>
    );
}