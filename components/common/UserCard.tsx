// components/common/UserCard.tsx
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address, phone, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600 hover:text-blue-800 cursor-pointer">{email}</p>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          ID: {id}
        </span>
      </div>
      
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-1">Address</h4>
          <p className="text-gray-600 text-sm">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium text-gray-700">Phone</h4>
            <p className="text-gray-600 text-sm">{phone}</p>
          </div>
          <div className="text-right">
            <h4 className="text-sm font-medium text-gray-700">Website</h4>
            <p className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm">{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;