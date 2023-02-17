export interface Post {
    title:string,
    permalink:string,
    expect:string
    category:{
        catId:number,
        category:string
    }
    postImage:string,
    content:string,
    isFeatured:boolean,
    views:number,
    status:string,
    createdAt:Date
}
