import { OrderItem } from "@/types/order";
import { Product } from "@/types/product";
import { ChangeEvent, useState, useEffect } from "react";

const useCreateOrderItem = (candleData?: Product, initialOrderItem?: OrderItem) => {
  const createItemKey = (item?: OrderItem) => {
    if (!item) return "";
    return `${item._id}-${item.size}-${item.color}-${item.Scent}-${item.quantity}`;
  };

  const [currentItemKey, setCurrentItemKey] = useState(createItemKey(initialOrderItem));
  
  const [quantity, setQuantity] = useState(initialOrderItem?.quantity || 1);
  
  // Initialize index for the candle size
  const [index, setIndex] = useState(() => {
    if (initialOrderItem && candleData) {
      const idx = candleData.prices.findIndex(
        (price) => price.size === initialOrderItem.size
      );
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });
  
  const [orderItem, setOrderItem] = useState<OrderItem>({
    name: initialOrderItem?.name || "",
    _id: initialOrderItem?._id || "",
    color: initialOrderItem?.color || "light brown",
    price: initialOrderItem?.price || 0,
    quantity: initialOrderItem?.quantity || 1,
    Scent: initialOrderItem?.Scent || "champagne toast",
    size: initialOrderItem?.size || "150 Ml",
  });

  // Reset states when initialOrderItem changes
  useEffect(() => {
    if (initialOrderItem) {
      const newItemKey = createItemKey(initialOrderItem);
      
      // Only update if we're editing a different item configuration
      if (currentItemKey !== newItemKey) {
        // Update current item key
        setCurrentItemKey(newItemKey);
        
        // Update quantity
        setQuantity(initialOrderItem.quantity);
        
        // Find and update the index of the size in the candleData prices
        if (candleData) {
          const newIndex = candleData.prices.findIndex(
            (price) => price.size === initialOrderItem.size
          );
          setIndex(newIndex >= 0 ? newIndex : 0);
        }
        
        // Update orderItem with all properties from initialOrderItem
        setOrderItem({
          name: initialOrderItem.name,
          _id: initialOrderItem._id,
          color: initialOrderItem.color,
          price: initialOrderItem.price,
          quantity: initialOrderItem.quantity,
          Scent: initialOrderItem.Scent,
          size: initialOrderItem.size,
        });
      }
    }
  }, [initialOrderItem, candleData]);
  
  // Update quantity in orderItem when it changes
  useEffect(() => {
    setOrderItem(prev => ({
      ...prev,
      quantity: quantity
    }));
  }, [quantity]);

  // Increment quantity with upper limit
  const addOneMore = () => {
    setQuantity(prev => Math.min(prev + 1, 50));
  };
  
  // Decrement quantity with lower limit
  const minsOne = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };
  
  // Update orderItem when candleData or index changes
  useEffect(() => {
    if (candleData && candleData.prices && candleData.prices.length > 0) {
      setOrderItem(prev => ({
        ...prev,
        name: candleData.name,
        _id: candleData._id,
        price: candleData.prices[index]?.price || prev.price,
        size: candleData.prices[index]?.size || prev.size,
      }));
    }
  }, [candleData, index]);
  
  // Get active candle size and price
  const activeCandleSize = candleData?.prices?.[index]?.size || orderItem.size;
  const activeCandlePrice = candleData?.prices?.[index]?.price || orderItem.price;
  
  // Handle size change
  const handlePrice = (event: ChangeEvent<HTMLInputElement>) => {
    if (!candleData || !candleData.prices) return;
    
    const newSize = event.target.value;
    const activeIndex = candleData.prices.findIndex(
      (obj: { size: string }) => obj.size === newSize
    );
    
    if (activeIndex >= 0) {
      setIndex(activeIndex);
    }
  };
  
  // Handle other form inputs
  const handleAddToCart = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    if (name === "quantity") {
      const newQuantity = Math.max(1, Math.min(50, Number(value)));
      setQuantity(newQuantity);
    } else {
      const processedValue = type === 'number' ? Number(value) : value;
      setOrderItem(prev => ({
        ...prev,
        [name]: processedValue,
      }));
    }
  };
  
  return {
    quantity,
    activeCandleSize,
    activeCandlePrice,
    handlePrice,
    orderItem,
    handleAddToCart,
    addOneMore,
    minsOne
  };
};

export default useCreateOrderItem;
