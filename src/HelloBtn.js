function HelloBtn() {
    const message = () => {
        alert("Hello World!!!");
    }

    return (
        <>
            <button onClick={message}>버튼입니다.</button>
        </>
    );
}

export default HelloBtn;