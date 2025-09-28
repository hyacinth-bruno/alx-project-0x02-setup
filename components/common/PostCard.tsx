// components/common/PostCard.tsx
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2 flex-shrink-0">
          ID: {id}
        </span>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{content}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>User ID: {userId}</span>
        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Read more</span>
      </div>
    </div>
  );
};

export default PostCard;