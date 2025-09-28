// pages/home.tsx
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import PostModal from '../components/common/PostModal';

interface Post {
  id: number;
  title: string;
  content: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (data: { title: string; content: string }) => {
    const newPost: Post = {
      id: Date.now(),
      title: data.title,
      content: data.content
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <Head>
        <title>Home - MyApp</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MyApp</h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover amazing content and connect with our community
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="large"
              shape="rounded-md"
            >
              Add New Post
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card 
              title="Getting Started" 
              content="Learn how to use our platform with step-by-step guides and tutorials designed for beginners and advanced users alike."
            />
            <Card 
              title="Community Features" 
              content="Connect with like-minded individuals, share your thoughts, and participate in meaningful discussions within our vibrant community."
            />
            <Card 
              title="Latest Updates" 
              content="Stay informed about new features, improvements, and announcements. We're constantly working to enhance your experience."
            />
          </div>

          {posts.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Posts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Card 
                    key={post.id}
                    title={post.title}
                    content={post.content}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <PostModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
};

export default Home;