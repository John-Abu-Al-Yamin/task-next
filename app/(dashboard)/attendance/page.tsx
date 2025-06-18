import { Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import React from "react";

const Attendance = () => {
  const attendanceData = [
    {
      date: "Today",
      status: "present",
      checkIn: "09:00 AM",
      checkOut: "06:30 PM",
      hours: "9.5h",
    },
    {
      date: "Yesterday",
      status: "present",
      checkIn: "08:45 AM",
      checkOut: "06:15 PM",
      hours: "9.5h",
    },
    {
      date: "Nov 20",
      status: "absent",
      checkIn: "-",
      checkOut: "-",
      hours: "0h",
    },
    {
      date: "Nov 19",
      status: "present",
      checkIn: "09:15 AM",
      checkOut: "06:45 PM",
      hours: "9.5h",
    },
    {
      date: "Nov 18",
      status: "present",
      checkIn: "08:30 AM",
      checkOut: "06:00 PM",
      hours: "9.5h",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance</h1>
        <p className="text-gray-600">Track your work hours and presence</p>
      </div>

      {/* Today's Status & Weekly Summary */}
      <div className="px-6 mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Status */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Status</h3>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle size={20} />
              <span className="font-medium">Present</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Check In</p>
              <p className="text-xl font-bold text-gray-900">09:00 AM</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Hours Worked</p>
              <p className="text-xl font-bold text-gray-900">7.5h</p>
            </div>
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-100 text-sm">This Week</p>
              <h2 className="text-3xl font-bold">42.5h</h2>
            </div>
            <Clock size={32} className="text-blue-200" />
          </div>
          <div className="flex justify-between text-blue-100 text-sm">
            <span>4 Days Present</span>
            <span>1 Day Absent</span>
          </div>
        </div>
      </div>

      {/* Attendance History */}
      <div className="px-6 pb-32">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent History
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {attendanceData.map((record, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-gray-400" />
                  <span className="font-medium text-gray-900">
                    {record.date}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {record.status === "present" ? (
                    <CheckCircle size={16} className="text-green-600" />
                  ) : (
                    <XCircle size={16} className="text-red-600" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      record.status === "present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {record.status === "present" ? "Present" : "Absent"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500">Check In</p>
                  <p className="text-sm font-medium text-gray-900">
                    {record.checkIn}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Check Out</p>
                  <p className="text-sm font-medium text-gray-900">
                    {record.checkOut}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Hours</p>
                  <p className="text-sm font-medium text-gray-900">
                    {record.hours}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
