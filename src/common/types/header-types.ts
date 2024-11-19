export interface BaseItem {
    id: number;
    title: string;
}

export interface HeaderData extends BaseItem {
    mode: string;
    childItems?: ChildItem[];
}

export interface ChildItem extends BaseItem {}


export interface ImageLinks extends BaseItem{
    image:string;
    link:string;
}
export interface FooterLinks extends BaseItem{}
export interface CategorySubLinks extends BaseItem{}
export interface CategorySub extends BaseItem{
    link:string;
    image:string;
    category: CategorySubLinks[] | CategorySubLinks; 
}
export interface SubCat{
    catSub?: CategorySub[],
    imageLinks?:ImageLinks[],
    footers?: FooterLinks[],
}
export interface MultiHeaderData{
    id:number;
    catTitle:string;
    link:string;
    subCat?:SubCat
}