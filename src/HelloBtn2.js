function HelloBtn2() {
    const message = (name) => {
        alert("Hello " + name + " !!!");
    }

    return (
        <>
            <button onClick={() => message("Sally")}>버튼입니다.</button>
        </>
    );
}

export default HelloBtn2;