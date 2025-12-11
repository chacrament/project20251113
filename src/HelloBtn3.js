function HelloBtn3() {
    const message = (name, event) => {
        alert("[" + event.target.id + "//" + event.type + "] Hello " + name + " !!!");
    }

    return (
        <>
            <button id="btn1" onClick={(e) => message("Sally", e)}>버튼입니다.</button>
        </>
    );
}

export default HelloBtn3;