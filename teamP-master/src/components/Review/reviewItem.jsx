import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/reviewItem.module.css'

//🍎 ReviewPage에서 map으로 사용되는 item 컴포넌트

const ReviewItem = ({review}) => {
    const navigate = useNavigate()

    return (
        <section className={styles.container}>
            <img src={review.reviewIMG} alt="review"
                onClick={()=>{
                    navigate(`/reviews/${review.id}`, {state : {review}})
                }}
            />
            <h3>{review.reviewTitle}</h3>
            <p>{review.nickname}</p>
            <div>
                <span>👍</span>
                <span>{review.likes.length}</span>
            </div>
        </section>
    );
};

export default ReviewItem;