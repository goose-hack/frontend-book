"use client";

import { useState, useContext, createContext, type ReactNode } from "react";

type SyncTabValue = {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
};

const SyncTabContext = createContext<SyncTabValue>({} as SyncTabValue);

type SyncTabProviderProps = {
  children: ReactNode;
};

export function SyncTabProvider({ children }: SyncTabProviderProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SyncTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </SyncTabContext.Provider>
  );
}

type Props = {
  tabs: {
    label: string;
    content: ReactNode;
  }[];
};

export function SyncTab({ tabs }: Props) {
  const { activeTab, setActiveTab } = useContext(SyncTabContext);

  return (
    <div className="shadow">
      <div className="border-b-2 border-neutral-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={`${
              index === activeTab
                ? "border-black text-black"
                : "border-neutral-300 text-neutral-500 hover:border-neutral-400 hover:text-neutral-600"
            } m-2 -mb-0.5 w-36 border-b-2 px-8 py-3 text-lg`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
}
