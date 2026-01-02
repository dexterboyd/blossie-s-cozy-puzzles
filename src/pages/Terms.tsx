import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
              Terms of Use
            </h1>
            <div className="bg-card rounded-2xl shadow-warm p-8 md:p-10 prose prose-lg max-w-none">
              <p className="text-muted-foreground">Last updated: January 2026</p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-foreground mb-4">
                By accessing and using this website, you accept and agree to be bound
                by these Terms of Use. If you do not agree to these terms, please do
                not use our website.
              </p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Products and Pricing
              </h2>
              <p className="text-foreground mb-4">
                All prices are listed in USD and are subject to change without notice.
                We reserve the right to limit quantities and to correct any errors
                in pricing or product information.
              </p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Shipping and Returns
              </h2>
              <p className="text-foreground mb-4">
                We ship to addresses within the United States. Returns are accepted
                within 30 days of purchase for unopened, unused puzzles in their
                original packaging.
              </p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Intellectual Property
              </h2>
              <p className="text-foreground mb-4">
                All content on this website, including text, images, and logos, is
                the property of Blossie's Puzzles and is protected by copyright law.
              </p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-foreground">
                If you have questions about these Terms of Use, please contact us at
                hello@blossiespuzzles.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
