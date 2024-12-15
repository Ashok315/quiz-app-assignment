import React from "react";
import styles from "./Question.module.css"
import Button from "../../components/Button/Button";
import Wrapper from "../../components/Wrapper/Wrapper";
const Question = () =>{
    return (
        <Wrapper>
            <div className={styles.questionBox}>
                
                <div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo iure tenetur amet reiciendis molestias neque ad, aut praesentium quibusdam recusandae libero, repudiandae, distinctio autem dignissimos ipsum suscipit est quasi?</h3>
                    <div>
                        <img src="" alt="" />
                    </div>
                     
                     <div className={styles.options}>
                        <div className={styles.selected}>Option A</div>
                        <div>Option B</div>
                        <div>Option C</div>
                        <div>Option D</div>
                     </div>
                   
                    
                </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressRing}>
                        <p>5</p>
                    </div>
                     
                </div>

                <div>
                  <Button>Next</Button>
                </div>               
                
            </div>        
        </Wrapper>
    )
}

export default Question;