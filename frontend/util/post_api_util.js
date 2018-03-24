export const fetchPosts = (city_id) => {

    return $.ajax({
        method: 'GET',
        url: `api/cities/${city_id}/posts`
    })

};


export const createPost = (post) => (

    $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: {post}
    })

);

