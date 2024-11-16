export function About() {
  return (
    <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About FoodHub</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We're passionate about delivering the best food experience to our customers.
          Our mission is to connect food lovers with the best restaurants in their area.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🍳</span>
          </div>
          <h3 className="font-semibold mb-2">Expert Chefs</h3>
          <p className="text-muted-foreground">
            Our platform partners with the most talented chefs in the industry.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="font-semibold mb-2">Fast Delivery</h3>
          <p className="text-muted-foreground">
            We ensure your food arrives hot and fresh within 60 minutes.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="font-semibold mb-2">Quality First</h3>
          <p className="text-muted-foreground">
            We never compromise on the quality of food and service.
          </p>
        </div>
      </div>
    </div>
  );
}