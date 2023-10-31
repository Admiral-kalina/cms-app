export type Tab = {
    id: string;
    title: string;
    order: number;
    path: string;
};

export interface TabsState {
    tabsList: Tab[];
    isLoading: boolean;
    error: string | null;
}