import React from "react";
import MainHeader from "@/Components/layout/MainHeader";

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <MainHeader />
            <main className="relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
