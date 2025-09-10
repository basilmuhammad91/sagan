import React from "react";
import MainHeader from "@/Components/layout/MainHeader";

export default function AppLayout({ children }) {
    return (
        <div>
            <MainHeader />
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}
