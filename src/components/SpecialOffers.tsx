import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const offers = [
  {
    id: 1,
    name: "Pasta Carbonara",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&auto=format&fit=crop&q=60",
    discount: "20% OFF"
  },
  {
    id: 2,
    name: "Caesar Salad",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
    discount: "15% OFF"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60",
    discount: "25% OFF"
  },
  {
    id: 4,
    name: "Margherita Pizza",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
    discount: "30% OFF"
  }
];

export function SpecialOffers() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Today Special Offers</h2>
        <p className="text-muted-foreground mt-2">
          Discover our amazing deals and save on your favorite dishes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className="group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <Badge 
                  className="absolute top-4 right-4 bg-rose-500"
                  variant="secondary"
                >
                  {offer.discount}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{offer.name}</h3>
                <p className="text-rose-500 font-bold mt-1">{offer.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}