export interface Blog {
    title: string;
    link: string;
    author?: string;
    description?: string;
  }
  
  export interface Course {
    name: string;
    registrationLink: string;
    description: string;
    rating: number;
    thumbnail: string;
    workload: string;
  }
  
  export interface Playlist {
    title: string;
    link: string;
    thumbnail: string;
    channel: string;
  }
  
  export interface ApiResponse {
    results: {
      medium?: {
  
        blogs: Blog[];
        timestamp: string;
        query: string;
    };
    coursera?: {
        courses: Course[];
    };
    udemy?: {
        courses: Course[];
        timestamp: string;
        query: string;
    };
    youtube?: {
        playlists: Playlist[];  
        timestamp: string;
        query: string;
    };
        
    }
  
  }