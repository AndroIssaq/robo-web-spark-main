import React from 'react';

interface TitleProps {
  title: string | React.ReactElement;
  des?: string;
}

const Title: React.FC<TitleProps> = ({ title, des }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      {des && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {des}
        </p>
      )}
    </div>
  );
};

export default Title; 