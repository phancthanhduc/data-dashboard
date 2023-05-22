import * as React from "react";
import LayoutWrapper from "@src/components/layoutWrapper/LayoutWrapper";
import WithUserSession from "@src/components/withUserSession/page";

export const metadata = {
    title: "Dashboard",
    description: "",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <WithUserSession />
            <LayoutWrapper>{children}</LayoutWrapper>
        </section>
    );
}
