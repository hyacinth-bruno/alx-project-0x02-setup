// pages/posts.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        
        // Transform the API data to match our interface
        type ApiPost = {
          userId: number;
          id: number;
          title: string;
          body: string;
        };

        const transformedPosts: PostProps[] = (data as ApiPost[]).map((post) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId
        }));
        
        setPosts(transformedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>Posts - MyApp</title>
          <meta name="description" content="Browse all posts" />
        </Head>
        
        <Header />
        
        <main className="min-h-screen bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">All Posts</h1>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Posts - MyApp</title>
          <meta name="description" content="Browse all posts" />
        </Head>
        
        <Header />
        
        <main className="min-h-screen bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">All Posts</h1>
            <div className="text-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                Error loading posts: {error}
              </div>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Posts - MyApp</title>
        <meta name="description" content="Browse all posts from our community" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">All Posts</h1>
            <p className="text-lg text-gray-600">
              Discover interesting content from our community
            </p>
          </div>

          <div className="mb-6 text-center">
            <span className="text-gray-600">
              Showing {posts.length} posts
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Posts;