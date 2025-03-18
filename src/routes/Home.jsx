import { useState } from "react";
import styles from "./Home.module.css";

function Home(props) {
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
                <button>검색</button>
            </div>
        </div>
    )
}
export default Home;