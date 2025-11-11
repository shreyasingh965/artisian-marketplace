const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Artisan Marketplace</h3>
            <p className="text-background/80 text-sm">
              Connecting India's finest artisans with craft lovers worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">All Categories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Special Offers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Artisans</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Start Selling</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© 2024 Artisan Marketplace. Empowering Indian artisans through technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
