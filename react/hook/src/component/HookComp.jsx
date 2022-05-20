import {useEffect, useState} from "react";

const HookComp = () => {
    const [count , setCount] = useState(0);
    const [username, setUsername] = useState('홍길동');

    useEffect(() => {
        document.title = count;
        console.log(count);
        return()=> {console.log("언마운트 되었습니다"),[]};
    })

    tick = () => {
        this.setState({date : new Date()});
    }

    componentDidMount=()=> {
        console.log("마운트가 되었습니다");
        this.timerId = setInterval(()=>this.tick(),1000);
    };

}
    return(
        <div>
            <h1>StateHook</h1>
            <p>{count}</p>
            <p>{username}</p>
            <button
                onClick={()=>{setCount(count+1)}}
            >
                +1
            </button>
        </div>
    )
}

export default HookComp;
