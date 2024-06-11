import { Route } from "routers/types";

//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string;
  href: Route;
  targetBlank?: boolean;
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  id: string | number;
  name: string;
  href: Route;
  count?: number;
  thumbnail?: string;
  desc?: string;
  color?: TwMainColor | string;
  taxonomy: "category" | "tag";
}

export interface PostAuthorType {
  id: string | number;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string;
  bgImage?: string;
  email?: string;
  count: number;
  desc: string;
  jobName: string;
  href: Route;
}

export interface PostDataType {
  id: string | number;
  author: PostAuthorType;
  date: string;
  href: Route;
  categories: TaxonomyType[];
  title: string;
  featuredImage: string;
  desc?: string;
  like: {
    count: number;
    isLiked: boolean;
  };
  bookmark: {
    count: number;
    isBookmarked: boolean;
  };
  commentCount: number;
  viewdCount: number;
  readingTime: number;
  postType: "standard" | "video" | "gallery" | "audio";
  videoUrl?: string;
  audioUrl?: string | string[];
  galleryImgs?: string[];
}




export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";




  // ! GLOBAL

  export interface IGlobalResponse {
    errors: string | string[];
    isSuccess: boolean;
  }

  export interface IGlobalResponseAxios {

   data: IGlobalResponse
  }
 export interface IFileServerResponse {
    id: number | string;
    mimeType?: string | null;
    uploadDate?: Date | string | null;
    size?: number | null;
    fileSize?: number;
    name?: string | null;
    fileNameOnDisk?: string | null;
    fileUrl?: string | null;
    version?: number | string;
    totalVersion?: number | string;
    createdDate: string;
  }
  

   // ! GALLERY
  export interface IGalleryItem {
    id: number;
    name: string;
    createdDate: string;
    description: string;
    coverPhoto: IFileServerResponse;
  }
  
  export interface IGetGalleryResponse extends IGlobalResponse {
   data:{ data: {
      totalDataCount: number;
      data: IGalleryItem[];
    };}
  }


  // ! Blogs 

  export interface IBlogsItem {
    id: string;
    name: string;
    description: string;
    content: string;
    showOnFirstScreen: boolean;
    userId: string;
    isActive: boolean;
    coverPhoto: IFileServerResponse;
    createdDate: string;
  }




  export interface IGetBlogsResponse extends IGlobalResponse {
    data: {data: {
      totalDataCount: number;
      data: IBlogsItem[];
    };}
  }


  // ! Books

  export interface IBooksItem {
    id: number;
    name: string;
    author: string;
    description: string;
    createdDate: string;
    price: number;
    coverPhoto: any;
    audioFile: any;
    pdfFile: any;
    showOnFirstScreen: boolean;
    rowNum: number;
    isActive: boolean;
  }

  // ! HomePage

  export interface IHomePageDataResponse extends IGlobalResponse {
      data: {
        books: IBooksItem[],
        posts: IBlogsItem[]
      }
    
  }

  export interface IHomePageDataResponseAxios {
    data: IHomePageDataResponse;
  } 


  // ! Contact (Setting)

  export interface IContactUs {
    website: string | null;
    email: string | null;
    facebook: string | null;
    instagram: string | null;
  }
  
  export interface IGetContactUsResponse extends IGlobalResponse {
    data: IContactUs;
  }


  // ! WebsiteTitle


export interface IWebsiteTitles {
  caruselGalleryHeader: string | null;
  caruselGalleryContent: string | null;
  aboutUsHeader: string | null;
  aboutUsContent: string | null;
  booksHeader: string | null;
  booksContent: string | null;
  founderHeader: string | null;
  founderContent: string | null;
  founderSpeciality: string | null;
  articleHeader: string | null;
  articleContent: string | null;
  photoGalleryHeader: string | null;
  photoGalleryContent: string | null;
  newsLetterHeader: string | null;
  newsLetterContent: string | null;
  bioContent: string | null;
}

export interface IGetWebsiteTitlesResponse extends IGlobalResponse {
  data: IWebsiteTitles;
}