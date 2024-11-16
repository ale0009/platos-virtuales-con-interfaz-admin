import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    category: "Starters",
    items: [
      {
        name: "Bruschetta",
        price: "$8.99",
        description: "Grilled bread rubbed with garlic and topped with tomatoes",
        tags: ["Vegetarian"]
      },
      {
        name: "Calamari",
        price: "$12.99",
        description: "Crispy fried squid with marinara sauce",
        tags: ["Seafood"]
      }
    ]
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Pasta Carbonara",
        price: "$16.99",
        description: "Classic pasta with eggs, cheese, pancetta, and black pepper",
        tags: ["Popular"]
      },
      {
        name: "Grilled Salmon",
        price: "$24.99",
        description: "Fresh salmon with herbs and lemon butter sauce",
        tags: ["Healthy", "Gluten-free"]
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        price: "$8.99",
        description: "Classic Italian dessert with coffee and mascarpone",
        tags: ["Popular"]
      },
      {
        name: "Chocolate Lava Cake",
        price: "$9.99",
        description: "Warm chocolate cake with a molten center",
        tags: ["New"]
      }
    ]
  }
];

export function Menu() {
  return (
    <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-lg text-muted-foreground">
          Discover our carefully curated selection of dishes
        </p>
      </div>

      <div className="space-y-12">
        {menuItems.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-bold text-rose-500">{item.price}</span>
                    </div>
                    <div className="flex gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}