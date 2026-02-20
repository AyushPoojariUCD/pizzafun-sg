"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  code: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];

  isOpen: boolean;

  openCart: () => void;

  closeCart: () => void;

  addItem: (item: Omit<CartItem, "quantity">) => void;

  removeItem: (code: string) => void;

  increaseQty: (code: string) => void;

  decreaseQty: (code: string) => void;

  clearCart: () => void;

  getTotal: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({

      items: [],

      isOpen: false,

      openCart: () => set({ isOpen: true }),

      closeCart: () => set({ isOpen: false }),

      addItem: (item) =>
        set((state) => {

          const existing = state.items.find(
            (i) => i.code === item.code
          );

          if (existing) {

            return {
              items: state.items.map((i) =>
                i.code === item.code
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
              isOpen: true,
            };

          }

          return {
            items: [
              ...state.items,
              { ...item, quantity: 1 },
            ],
            isOpen: true,
          };

        }),

      removeItem: (code) =>
        set((state) => ({
          items: state.items.filter(
            (i) => i.code !== code
          ),
        })),

      increaseQty: (code) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.code === code
              ? {
                  ...i,
                  quantity: i.quantity + 1,
                }
              : i
          ),
        })),

      decreaseQty: (code) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.code === code
                ? {
                    ...i,
                    quantity: i.quantity - 1,
                  }
                : i
            )
            .filter((i) => i.quantity > 0),
        })),

      clearCart: () =>
        set({
          items: [],
          isOpen: false,
        }),

      getTotal: () => {

        const items = get().items;

        return items.reduce(
          (total, item) => {

            const price = parseFloat(
              item.price
                .replace("$", "")
                .split("/")[0]
            );

            return (
              total +
              price * item.quantity
            );

          },
          0
        );
      },

    }),
    {
      name: "cart-storage",
    }
  )
);