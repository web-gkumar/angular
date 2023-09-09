export interface Blogs {
    $key: string;
    mta_title: string;
    mta_desc: string;
    blog_title: string
    blog_image: Array<string>;
    blog_desc:string;
    publication_date: Date;
    author_name: string;
}
