// pages/about.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About = () => {
  const handleClick = (buttonType: string) => {
    alert(`${buttonType} button clicked!`);
  };

  return (
    <>
      <Head>
        <title>About - MyApp</title>
        <meta name="description" content="Learn more about our application" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About MyApp</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to MyApp, a modern web application built with Next.js and React. 
              Our platform is designed to provide users with an intuitive and engaging experience 
              while showcasing the power of modern web development technologies.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe in creating applications that are not only functional but also beautiful 
              and user-friendly. Our team is dedicated to continuous improvement and innovation, 
              ensuring that our users always have access to the best possible experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To create innovative web solutions that empower users and businesses 
                  to achieve their goals through cutting-edge technology and exceptional design.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading platform for modern web applications, setting new standards 
                  in user experience, performance, and accessibility.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Button Component Showcase
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Here are examples of our reusable Button component with different sizes and shapes:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="small" 
                shape="rounded-sm"
                onClick={() => handleClick('Small Rounded-SM')}
              >
                Small & Sharp
              </Button>
              
              <Button 
                size="medium" 
                shape="rounded-md"
                onClick={() => handleClick('Medium Rounded-MD')}
              >
                Medium & Rounded
              </Button>
              
              <Button 
                size="large" 
                shape="rounded-full"
                onClick={() => handleClick('Large Rounded-Full')}
              >
                Large & Pill-shaped
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;