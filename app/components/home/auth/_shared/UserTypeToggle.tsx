import React from 'react';

interface UserTypeToggleProps {
  currentUserType: 'individual' | 'organization';
  onToggle: (type: 'individual' | 'organization') => void;
}

const UserTypeToggle: React.FC<UserTypeToggleProps> = ({ currentUserType, onToggle }) => {
  return (
    <div className="flex justify-center mb-8 text-black">
      <div className="inline-flex rounded-full bg-indigo-300 p-1 shadow-inner">
        <button
          onClick={() => onToggle('individual')}
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
                      ${currentUserType === 'individual' ? 'bg-indigo-900  text-white shadow-md' 
                        : 'text-indigo-950  hover:bg-indigo-200'}`}
        >
          Individual
        </button>
        <button
          onClick={() => onToggle('organization')}
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
                      ${currentUserType === 'organization' ? 'bg-indigo-900 text-white  shadow-md'
                         : 'text-indigo-950 hover:bg-indigo-200'}`}
        >
          Organization
        </button>
      </div>
    </div>
  );
};

export default UserTypeToggle;
