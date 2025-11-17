/*
컴포넌트 간에 데이터(속성)를 전달하는 방법을 보여주는 예제
props 넘길 때 JSON 형태 가능!
Array.map() 함수 활용 가능!
*/

function Car(props) {
    return(
        <h2>I am a {props.brand}!</h2>
    )
}

function Car2(props) {
    return(
        <h2>I am a {props.brand.model}!</h2>
    )
}

function Car3(props) {
    return(
        <li>I am a {props.brand}!!</li>
    )
}

function Garage(props) {
    let carInfo = {name : "FORD", model : "MUSTANG"};
    let carName = "Ford";
    //let cars = ['Ford', 'Audi', 'M~'];
    let array_car = [
        {id : 1, brand : "Ford"},
        {id : 2, brand : "Audi"},
        {id : 3, brand : "M~"}
    ]
    // <ol>
    //     {cars.map((car) => <Car3 brand={car} />)}
    // </ol>
    return(
        <div>
            <h1>Who lives in my garage?</h1>
            <Car brand="ford" />
            <Car brand={carName} />
            <Car2 brand={carInfo} />
            
            <ol>
                {array_car.map((car) => <Car3 key={car.id} brand={car.brand} />)}
            </ol>
        </div>
    )
}

export default Garage;