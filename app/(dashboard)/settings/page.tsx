import {
  Bell,
  ChevronRight,
  HelpCircle,
  Palette,
  Shield,
  User,
} from "lucide-react";
import React from "react";

const Settings = () => {
  const settingsGroups = [
    {
      title: "Account",
      items: [
        {
          icon: User,
          label: "Profile Settings",
          description: "Update your personal information",
        },
        {
          icon: Shield,
          label: "Privacy & Security",
          description: "Manage your privacy settings",
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: Bell,
          label: "Notifications",
          description: "Configure notification preferences",
        },
        {
          icon: Palette,
          label: "Appearance",
          description: "Customize app theme and display",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          label: "Help & Support",
          description: "Get help and contact support",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-6 py-8">
        <div className=" mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your app preferences</p>
        </div>
      </div>

     <div className="px-6 pb-32">
  <div className="max-w-4xl mx-auto space-y-10">
    {settingsGroups.map((group, groupIndex) => (
      <div key={groupIndex}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {group.title}
        </h3>

        {/* شبكة مرنة حسب حجم الشاشة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {group.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <item.icon className="text-gray-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {item.label}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Settings;
