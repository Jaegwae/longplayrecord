import { useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
    let navigate = useNavigate();
    return (
        <div className={styles.Searchdiv}>
            <p>Long Play Record</p>
            <div className={styles.Searchdivdiv}>
                <input
                    type="text"
                    placeholder="LP 혹은 가수명을 입력"
                    value={props.InputText}
                    onChange={(e) => {props.setInputText(e.target.value);}}
                    />
                <button onClick={ () => { navigate("/result") } }>검색</button>
            </div>
        </div>
    )
}
export default Home;