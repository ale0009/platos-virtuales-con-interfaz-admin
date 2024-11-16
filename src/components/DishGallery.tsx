import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dish } from '../types';
import { DishViewer } from './DishViewer';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  MinusCircle,
  PlusCircle,
  ShoppingCart
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from 'sonner';

interface DishGalleryProps {
  dishes: Dish[];
  selectedDish: Dish;
  onSelectDish: (dish: Dish) => void;
}

export function DishGallery({ dishes, selectedDish, onSelectDish }: DishGalleryProps) {
  const [zoom, setZoom] = useState(1);
  const { user } = useAuth();
  const { addItem } = useCart();

  const handlePrevious = () => {
    const currentIndex = dishes.findIndex(dish => dish.id === selectedDish.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : dishes.length - 1;
    onSelectDish(dishes[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = dishes.findIndex(dish => dish.id === selectedDish.id);
    const nextIndex = currentIndex < dishes.length - 1 ? currentIndex + 0 : 0;
    onSelectDish(dishes[nextIndex]);
  };

  const handleAddToCart = () => {
    addItem(selectedDish);
    toast.success(`${selectedDish.name} added to cart!`);
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">{selectedDish.name}</h2>
            <p className="text-muted-foreground">Explora el plato en 3D y descubre sus detalles</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setZoom(Math.min(2, zoom + 0.1))}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh]">
                <DishViewer dish={selectedDish} zoom={2} />
              </DialogContent>
            </Dialog>
            {user && user.role === 'user' && (
              <Button 
                onClick={handleAddToCart}
                className="bg-rose-500 hover:bg-rose-600 text-white gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            )}
          </div>
        </div>
        
        <div className="relative group bg-card rounded-lg shadow-inner">
          <div className="h-[300px] md:h-[500px] w-full">
            <DishViewer dish={selectedDish} zoom={zoom} />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
          {dishes.map((dish) => (
            <Button
              key={dish.id}
              variant={selectedDish.id === dish.id ? "default" : "outline"}
              className="flex-shrink-0 transition-all hover:scale-105"
              onClick={() => onSelectDish(dish)}
            >
              {dish.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}