import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Star, SendHorizontal } from 'lucide-react';

export function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Por favor, selecciona una calificación');
      return;
    }
    toast.success('¡Gracias por tu feedback!');
    setRating(0);
    setComment('');
  };

  return (
    <Card className="bg-gradient-to-br from-background to-muted/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          Tu Opinión
          <span className="text-sm font-normal text-muted-foreground ml-2">
            Ayúdanos a mejorar
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-center text-muted-foreground">
              ¿Qué te pareció esta experiencia?
            </p>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <Button
                  key={value}
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHoveredRating(value)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-all hover:scale-110"
                >
                  <Star
                    className={`h-6 w-6 transition-colors ${
                      value <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Cuéntanos tu experiencia..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>
          <Button type="submit" className="w-full group">
            <span>Enviar Feedback</span>
            <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}