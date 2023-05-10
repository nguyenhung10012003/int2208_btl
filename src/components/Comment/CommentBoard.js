import SongApi from "../../api/SongApi";
import {useEffect, useState} from "react";
import songApi from "../../api/SongApi";
import styles from './Comment.module.scss';
import {SendIcon} from "../Layouts/components/IconBox";
import {useAuth} from "../../hooks/AuthContext";
import {Link} from "react-router-dom";
import DefaultAvatar from "../global/DefaultAvatar";

function CommentBoard({songId}) {

    const [comment, setComment] = useState();
    const [text, setText] = useState();
    const {getUser} = useAuth();
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
        }
    }
    const handleSubmit = async () => {
        if (!text) return;
        const post = {
            track_id: songId,
            user_email: getUser().email,
            text: text
        }
        const res = await SongApi.postComment('', post);
        if (res) {

        }
        setText('');
    }
    useEffect(() => {
        const fetchComment = async () => {
            try {
                const data = await songApi.getComment(songId);
                setComment(data);
            } catch(err) {
                console.log(err);
            }
        }

        fetchComment();
    }, [songId]);

    return (
        <>
            <div className={styles['list-cmt']}>
                {comment?.length > 0 ? comment.map((comment, index) => {
                    return (
                        <div className={styles['comment']} key={index}>
                            <div className={styles['avatar']}>
                                {comment.avatar ? <img src={comment.avatar} alt={''}/> : <DefaultAvatar/>}
                            </div>
                            <div className={styles['comment-content']}>
                                <div className={styles['name']}>{comment.name || comment.user_email}</div>
                                <div className={styles['text']}>
                                    {comment.text}
                                </div>
                            </div>
                        </div>
                    )
                }) : <div style={{color: '#fff'}}>Hãy là người đầu tiên bình luận</div>}
            </div>

            {getUser() ? <div className={styles['comment-box']}>
                <textarea className={styles['text-box']}
                       onChange={handleChange}
                       placeholder={'Viết bình luận của bạn'}
                          value={text}
                          onKeyPress={handleKeyPress}
                />
                <SendIcon onClick={handleSubmit}/>
            </div> : <Link to={'/login'}>Bạn cần đăng nhập để bình luận</Link> }
        </>
    )
}

export default CommentBoard;