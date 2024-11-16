import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-100 to-rose-100 dark:from-orange-950 dark:to-rose-950">
      <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-white/5"></div>
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 py-16">
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                We're <span className="text-rose-500">Serious</span> For
                <br />
                <span className="text-orange-500">Food</span> & Delivery.
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <div className="relative flex-1">
                <Input 
                  placeholder="Search food..." 
                  className="pl-10 h-12 bg-background/95"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              </div>
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60"
                alt="Pizza"
                className="rounded-full w-[500px] h-[500px] object-cover border-8 border-background shadow-2xl"
              />
              <div className="absolute -left-16 -top-16 bg-white rounded-2xl p-4 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60"
                  alt="Salad"
                  className="w-24 h-24 rounded-xl object-cover"
                />
              </div>
              <div className="absolute -right-8 top-16 bg-white rounded-2xl p-4 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60"
                  alt="Pasta"
                  className="w-24 h-24 rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-8 left-16 bg-white rounded-2xl p-4 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60"
                  alt="Salmon"
                  className="w-24 h-24 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}