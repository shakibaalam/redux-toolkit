import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            <h3>Post View</h3>

            {
                isLoading && <div>
                    Loading...........
                </div>
            }
            {
                error && <div className=' text-red-600'>
                    {error.message}
                </div>
            }
            <section >
                {posts && posts.map(post => <article key={post?.id}>
                    <h3>Title: {post?.title}</h3>
                    <h3>Body : {post?.body}</h3>
                </article>)

                }
            </section>
        </div>
    );
};

export default PostView;