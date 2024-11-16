import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input id="subject" placeholder="How can we help?" required />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message..."
              className="min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
            Send Message
          </Button>
        </form>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">support@foodhub.com</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground">123 Food Street, Kitchen City</p>
          </div>
        </div>
      </div>
    </div>
  );
}