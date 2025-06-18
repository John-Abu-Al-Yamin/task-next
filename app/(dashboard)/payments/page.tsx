"use client";

import { ArrowDownLeft, ArrowUpRight, CreditCard } from "lucide-react";
import React from "react";

const payments = () => {
  const transactions = [
    {
      id: 1,
      name: "Salary",
      date: "June 15, 2025",
      amount: "+$3,000.00",
      type: "income",
    },
    {
      id: 2,
      name: "Electricity Bill",
      date: "June 10, 2025",
      amount: "-$120.50",
      type: "expense",
    },
    {
      id: 3,
      name: "Groceries",
      date: "June 09, 2025",
      amount: "-$87.30",
      type: "expense",
    },
    {
      id: 4,
      name: "Freelance Project",
      date: "June 05, 2025",
      amount: "+$500.00",
      type: "income",
    },
  ];

  return (
    <div className="min-h-screen  py-8 px-6">
      {/* Card Section */}
      <div className="mb-8">
        <div className="bg-black rounded-2xl p-6 text-white shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-100 text-sm">Total Balance</p>
              <h2 className="text-3xl font-bold">$48,392.50</h2>
            </div>
            <CreditCard size={32} className="text-blue-200" />
          </div>
          <div className="flex justify-between text-blue-100 text-sm">
            <span>**** **** **** 4829</span>
            <span>12/25</span>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${
                    tx.type === "income" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {tx.type === "income" ? (
                    <ArrowDownLeft className="text-green-500" />
                  ) : (
                    <ArrowUpRight className="text-red-500" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{tx.name}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
              </div>
              <div
                className={`font-semibold ${
                  tx.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default payments;
