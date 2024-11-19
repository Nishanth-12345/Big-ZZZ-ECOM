import { images } from "../constants/image";
import { HeaderData } from "../types/header-types";
export const slideHeaderData: HeaderData[] = [
    {
        id: 1,
        title: "save more with your product",
        mode: "left"
    },
    {
        id: 2,
        title: "your perfect solution",
        mode: "left"
    },
    {
        id: 3,
        title: "proud to be certified",
        mode: "left"
    },

]
export const headerData: HeaderData[] = [
    {
        id: 4,
        title: "Group by",
        mode: "right"
    },
    {
        id: 5,
        title: "Showroom",
        mode: "right"
    },

    {
        id: 6,
        title: "support",
        mode: "right",
        childItems: [
            {
                id: 1,
                title: "contact"
            },
            {
                id: 2,
                title: "size guide"
            },
            {
                id: 3,
                title: "made to order"
            },
            {
                id: 4,
                title: "faq"
            },
        ]
    },
    {
        id: 7,
        title: "why hevaya",
        mode: "right",
        childItems: [
            {
                id: 1,
                title: "our story"
            },
            {
                id: 2,
                title: "sustainabilty"
            },
            {
                id: 3,
                title: "charity"
            },
            {
                id: 4,
                title: "b corp"
            },
        ]
    },
    {
        id: 8,
        title: "account",
        mode: "right",
        childItems: [
            {
                id: 1,
                title: "account"
            },
            {
                id: 2,
                title: "login"
            },
        ]
    },
]

export interface ImageLinks extends BaseItem{
    image:string;
    link:string;
}
export interface BaseItem {
    id: number;
    title: string;
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

export const MultiHeaderData: MultiHeaderData[] = [
    {
        id: 1,
        catTitle: "Mattress",
        link: "/mattress",
        subCat: {
            catSub: [
                {
                    id: 13,
                    title: "Mattress",
                    link: "/mattress",
                    image: images.MattressOne,
                    category: [
                        {
                            id: 1,
                            title: "Natural Mattress 1"
                        },
                        {
                            id: 2,
                            title: "Natural Mattress 11"
                        },
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                        {
                            id: 4,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        }

                    ],
                },
                {
                    id: 24,
                    title: "Toppers",
                    link: "/toppers",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: "Natural Organic Latex Topper"
                    }
                },
                {
                    id: 25,
                    title: "junior",
                    link: "/junior",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: " Junior Baby Cot Mattress"
                    }
                },
            ],
            imageLinks: [
                {
                    id: 13,
                    image: images.TeekBed,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
                {
                    id: 13,
                    image: images.MattressTwo,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
            ],
            footers: [
                {
                    id: 134,
                    title: "Natural & Sustainable"
                },
                {
                    id: 123,
                    title: "100-day Free Trial"
                },
                {
                    id: 755,
                    title: "Free Delivery & Remova"
                }
            ]
        },
    },
    {
        id: 2,
        catTitle: "Bed Frames",
        link: "/bed frames",
        subCat: {
            catSub: [
                {
                    id: 23,
                    title: "Mattress=1",
                    link: "/mattress",
                    image: images.MattressOne,
                    category: [
                   
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                        {
                            id: 4,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        }

                    ],
                },
                {
                    id: 24,
                    title: "Toppers",
                    link: "/toppers",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: "Natural Organic Latex Topper"
                    }
                },
                {
                    id: 25,
                    title: "junior",
                    link: "/junior",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: " Junior Baby Cot Mattress"
                    }
                },
            ],
            imageLinks: [
                {
                    id: 1,
                    image: images.TeekBed,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
                {
                    id: 13,
                    image: images.MattressTwo,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
            ],
            footers: [
                {
                    id: 134,
                    title: "Natural & Sustainable"
                },
                {
                    id: 123,
                    title: "100-day Free Trial"
                },
                {
                    id: 755,
                    title: "Free Delivery & Remova"
                }
            ]
        },
    },
    {
        id: 3,
        catTitle: "Pillows & bolster",
        link: "/pillows",
        subCat: {
            catSub: [
                {
                    id: 13,
                    title: "Mattress",
                    link: "/mattress",
                    image: images.MattressOne,
                    category: [
                        {
                            id: 1,
                            title: "Natural Mattress 1"
                        },
                      
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                     

                    ],
                },
                {
                    id: 24,
                    title: "Toppers",
                    link: "/toppers",
                    image: images.MattressOne,
                    category:  [
                        {
                            id: 1,
                            title: "Natural Mattress 1"
                        },
                        {
                            id: 2,
                            title: "Natural Mattress 11"
                        },
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                     

                    ],
                },
                {
                    id: 25,
                    title: "junior",
                    link: "/junior",
                    image: images.MattressOne,
                    category:  [
                        {
                            id: 1,
                            title: "Natural Mattress 1"
                        },
                        {
                            id: 2,
                            title: "Natural Mattress 11"
                        },
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                     
                        {
                            id: 2,
                            title: "Natural Mattress 11"
                        },
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                    ],
                },
            ],
            imageLinks: [
                {
                    id: 1,
                    image: images.TeekBed,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
                {
                    id: 13,
                    image: images.MattressTwo,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
            ],
            footers: [
                {
                    id: 134,
                    title: "Natural & Sustainable"
                },
                {
                    id: 123,
                    title: "100-day Free Trial"
                },
                {
                    id: 755,
                    title: "Free Delivery & Remova"
                }
            ]
        },
    },
    {
        id: 4,
        catTitle: "Sheets",
        link: "/sheets",
        subCat: {
            catSub: [
                {
                    id: 13,
                    title: "Mattress",
                    link: "/mattress",
                    image: images.MattressOne,
                    category: [
                        {
                            id: 1,
                            title: "Natural Mattress 1"
                        },
                        {
                            id: 2,
                            title: "Natural Mattress 11"
                        },
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                        {
                            id: 4,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        }

                    ],
                },
                {
                    id: 24,
                    title: "Toppers",
                    link: "/toppers",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: "Natural Organic Latex Topper"
                    }
                },
                {
                    id: 25,
                    title: "junior",
                    link: "/junior",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: " Junior Baby Cot Mattress"
                    }
                },
            ],
            imageLinks: [
                {
                    id: 1,
                    image: images.TeekBed,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
                {
                    id: 13,
                    image: images.MattressTwo,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
            ],
            footers: [
                {
                    id: 134,
                    title: "Natural & Sustainable"
                },
                {
                    id: 123,
                    title: "100-day Free Trial"
                },
                {
                    id: 755,
                    title: "Free Delivery & Remova"
                }
            ]
        },
    },
    {
        id: 5,
        catTitle: "Accessories",
        link: "/Accessories",
        subCat: {
            catSub: [
                {
                    id: 13,
                    title: "Mattress",
                    link: "/mattress",
                    image: images.MattressOne,
                    category: [
                        {
                            id: 1,
                            title: "Natural Mattress 1"
                        },
                        {
                            id: 2,
                            title: "Natural Mattress 11"
                        },
                        {
                            id: 3,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        },
                        {
                            id: 4,
                            title: "Heveya® Natural Organic Latex Mattress I"
                        }

                    ],
                },
                {
                    id: 24,
                    title: "Toppers",
                    link: "/toppers",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: "Natural Organic Latex Topper"
                    }
                },
                {
                    id: 25,
                    title: "junior",
                    link: "/junior",
                    image: images.MattressOne,
                    category: {
                        id: 1,
                        title: " Junior Baby Cot Mattress"
                    }
                },
            ],
            imageLinks: [
                {
                    id: 1,
                    image: images.TeekBed,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
                {
                    id: 13,
                    image: images.MattressTwo,
                    title: "create a bespoke mattress tailored to your needs",
                    link: "/matres/order"
                },
            ],
            footers: [
                {
                    id: 134,
                    title: "Natural & Sustainable"
                },
                {
                    id: 123,
                    title: "100-day Free Trial"
                },
                {
                    id: 755,
                    title: "Free Delivery & Remova"
                }
            ]
        },
    },
    {
        id: 6,
        catTitle: "Bundles",
        link: "/bundles",
    }
]