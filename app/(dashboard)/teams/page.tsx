import { MoreVertical, Plus, Users } from "lucide-react";
import React from "react";

const Teams = () => {
  const teams = [
    { id: 1, name: "Development Team", members: 8, color: "bg-blue-500" },
    { id: 2, name: "Design Team", members: 5, color: "bg-purple-500" },
    { id: 3, name: "Marketing Team", members: 6, color: "bg-green-500" },
    { id: 4, name: "Sales Team", members: 4, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-2 items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Teams</h1>
            <p className="text-gray-600">Manage your team members</p>
          </div>
          <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors justify-self-end">
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* Teams List */}
      <div className="px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 ${team.color} rounded-full flex items-center justify-center`}
                  >
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{team.name}</h3>
                    <p className="text-sm text-gray-500">
                      {team.members} members
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>

              {/* Team Members Preview */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((member, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                ))}
                {team.members > 4 && (
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-500">
                      +{team.members - 4}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
