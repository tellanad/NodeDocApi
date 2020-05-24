exports.getPosts = (req,res) =>{
    res.json({
        posts: [
            {title:'Amaravathi'},
            {title:'Guntur'},
            {title:'MP'}
        ]
    });
}