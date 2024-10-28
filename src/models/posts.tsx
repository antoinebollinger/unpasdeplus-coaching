// Step 1: Define interfaces for nested objects
interface Blog {
    id: string;
}

interface Author {
    id: string;
    displayName: string;
    url: string;
    image: {
        url: string;
    };
}

interface Replies {
    totalItems: string;
    selfLink: string;
}

interface Location {
    name: string;
    lat: number;
    lng: number;
    span: string;
}

// Step 2: Define the Post interface
export interface Post {
    kind: string;          // e.g., "blogger#post"
    id: string;           // Unique ID for the post
    blog: Blog;           // Blog object containing blog ID
    published: string;    // Date string in ISO 8601 format
    updated: string;      // Date string in ISO 8601 format
    url: string;          // URL to the post
    selfLink: string;     // API link to the post
    title: string;        // Title of the post
    content: string;      // HTML content of the post
    author: Author;       // Author object containing author info
    replies: Replies;     // Replies object containing comments info
    location: Location;   // Location object for geographic information
    etag: string;         // ETag for the post
}

// Step 3: Define the PostList interface
export interface PostList {
    kind: string;         // e.g., "blogger#postList"
    items: Post[];       // Array of Post objects
    etag: string;         // ETag for the post list
}