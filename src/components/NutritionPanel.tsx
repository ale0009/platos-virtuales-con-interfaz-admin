import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Dish } from '../types';
import { Badge } from '@/components/ui/badge';
import { Flame, Fish, Wheat, Droplet } from 'lucide-react';

interface NutritionPanelProps {
  dish: Dish;
}

const getNutrientIcon = (nutrient: string) => {
  switch (nutrient) {
    case 'calories':
      return <Flame className="h-4 w-4" />;
    case 'protein':
      return <Fish className="h-4 w-4" />;
    case 'carbs':
      return <Wheat className="h-4 w-4" />;
    case 'fat':
      return <Droplet className="h-4 w-4" />;
    default:
      return null;
  }
};

export function NutritionPanel({ dish }: NutritionPanelProps) {
  const dailyValues = {
    calories: 2000,
    protein: 50,
    carbs: 300,
    fat: 65
  };

  return (
    <Card className="bg-gradient-to-br from-background to-muted/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <span>Información Nutricional</span>
          <Badge variant="secondary" className="ml-auto">Por porción</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid gap-6">
          {Object.entries(dish.nutrients).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getNutrientIcon(key)}
                  <span className="font-medium capitalize">{key}</span>
                </div>
                <span className="font-semibold">
                  {value}
                  {key === 'calories' ? ' kcal' : 'g'}
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={(value / dailyValues[key as keyof typeof dailyValues]) * 100}
                  className="h-2"
                />
                <span className="absolute right-0 -bottom-5 text-xs text-muted-foreground">
                  {Math.round((value / dailyValues[key as keyof typeof dailyValues]) * 100)}% VD*
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-3">Características</h3>
          <div className="flex flex-wrap gap-2">
            {dish.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className="transition-all hover:scale-105 cursor-default"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          *VD = Valor Diario basado en una dieta de 2000 calorías
        </p>
      </CardContent>
    </Card>
  );
}