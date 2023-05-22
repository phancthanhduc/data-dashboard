export type MUISetupProps = {
    children: React.ReactNode;
};

export type NextAuthProviderProps = {
    children?: React.ReactNode;
};

export type DataCardProps = {
    title: string;
    value: string;
    description: string;
};

export type SettingMenu = {
    title: string;
    signOut?: () => void;
    signIn?: () => void;
    link?: string;
};

export type LayoutWrapperProps = {
    children: React.ReactNode;
};

export type TranSactionCardType = {
    title: string;
    value: string;
    changeValue: string;
};

export type TransactionsPerDayProps = {
    data: TranSactionCardType;
};
