
import React from 'react';
import { Calendar, User, MapPin, BarChart3, ZoomIn } from 'lucide-react';

const DataTableHeader = () => {
  return (
    <thead className="sticky top-0 bg-gradient-to-r from-purple-800/80 to-blue-800/80 backdrop-blur-xl">
      <tr>
        <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Login ID</span>
          </div>
        </th>
        <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Emp ID</span>
          </div>
        </th>
        <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>State</span>
          </div>
        </th>
        <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Login Time</span>
          </div>
        </th>
        <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Att Mark Time</span>
          </div>
        </th>
        <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Att Mark By</span>
          </div>
        </th>
        <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Confidence</span>
          </div>
        </th>
        <th className="p-2 text-left text-purple-200 font-semibold">Status</th>

         <th className="p-2 text-left text-purple-200 font-semibold">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Login - Enroll</span>
          </div>
        </th>
         
        
      </tr>
    </thead>
  );
};

export default DataTableHeader;
