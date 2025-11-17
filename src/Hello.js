/*
    컴포넌트 활용해보기
    Arrow Function 문법 사용
*/

// function Hello(props) {
//     return (
//         <h1>HELLO! 1</h1>
//     )
// }

const Hello = (props) => {
    return (
        <h1>HELLO! {props.name}~~</h1>
    )
}

export default Hello;