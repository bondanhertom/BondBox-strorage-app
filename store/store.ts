import { create } from 'zustand';

interface AppState {
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (open: boolean) => void;

    isRenameModalOpen: boolean;
    setIsRenameModalOpen: (open: boolean) => void;

    fileId: string;
    setFileId: (fileId: string) => void;

    filename: string;
    setFilename: (filename: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isDeleteModalOpen: false,
    setIsDeleteModalOpen: (open: boolean) => set({ isDeleteModalOpen: open }),

    isRenameModalOpen: false,
    setIsRenameModalOpen: (open: boolean) => set({ isRenameModalOpen: open }),

    fileId: "",
    setFileId: (fileId: string) => set({ fileId }),

    filename: "",
    setFilename: (filename: string) => set({ filename }),
}));
