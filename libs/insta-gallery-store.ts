import { create } from 'zustand';

type CommentStore = {
  open: boolean;
  sliderIndex: number;
  openImage: (index: number) => void;
  setSliderIndex: (sliderIndex: number) => void;
  closeHandler: () => void;
};

export const useInstaGalleryStore = create<CommentStore>((set) => ({
  open: false,
  sliderIndex: 0,
  openImage: (index) => {
    set((state) => ({
      ...state,
      open: true,
      sliderIndex: index,
    }));
  },
  setSliderIndex: (sliderIndex) => {
    set((state) => ({
      ...state,
      sliderIndex,
    }));
  },
  closeHandler: () => {
    set((state) => ({
      ...state,
      open: false,
    }));
  },
}));
